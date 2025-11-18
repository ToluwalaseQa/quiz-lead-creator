import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useIpGeolocation } from "@/hooks/use-ip-geolocation";
import { Mail, Phone, Send } from "lucide-react";
import NavBar from "@/components/quiz/NavBar";
import Footer from "@/components/quiz/Footer";
import flags from "react-phone-number-input/flags";
import type { Country } from "react-phone-number-input";

// Mapping of calling codes to country codes
const callingCodeToCountry: Record<string, Country> = {
  "+1": "US",
  "+44": "GB",
  "+61": "AU",
  "+33": "FR",
  "+49": "DE",
  "+39": "IT",
  "+34": "ES",
  "+31": "NL",
  "+971": "AE",
  "+65": "SG",
  "+81": "JP",
  "+86": "CN",
  "+91": "IN",
  "+55": "BR",
  "+52": "MX",
  "+27": "ZA",
  "+64": "NZ",
  "+353": "IE",
  "+41": "CH",
  "+43": "AT",
  "+32": "BE",
  "+46": "SE",
  "+47": "NO",
  "+45": "DK",
  "+358": "FI",
  "+48": "PL",
  "+351": "PT",
  "+30": "GR",
  "+90": "TR",
  "+7": "RU",
  "+82": "KR",
  "+66": "TH",
  "+60": "MY",
  "+62": "ID",
  "+63": "PH",
  "+84": "VN",
  "+852": "HK",
  "+886": "TW",
  "+966": "SA",
  "+972": "IL",
  "+20": "EG",
  "+234": "NG",
  "+254": "KE",
  "+54": "AR",
  "+56": "CL",
  "+57": "CO",
  "+51": "PE",
  "+58": "VE",
};

// Flag component
const Flag = ({ country }: { country: Country }) => {
  const FlagComponent = flags[country];
  if (!FlagComponent) return null;
  return (
    <span className="inline-block w-5 h-4" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <FlagComponent title={country} />
    </span>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const { geolocation, loading: geoLoading } = useIpGeolocation();
  const [countryCode, setCountryCode] = useState("+1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Get country code for current calling code
  const currentCountry = useMemo(() => {
    return callingCodeToCountry[countryCode] || "US";
  }, [countryCode]);

  // Auto-set country code when geolocation is loaded
  useEffect(() => {
    if (geolocation?.countryCallingCode && !geoLoading) {
      setCountryCode(geolocation.countryCallingCode);
    }
  }, [geolocation, geoLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll respond as quickly as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Contact Information</h2>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:contact@domain.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      contact@domain.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:+447369283372" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +44 736 9283 8372
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM GMT<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Send us a Message</h2>
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2">
                  <Select value={countryCode} onValueChange={setCountryCode} disabled={geoLoading}>
                    <SelectTrigger className="w-[90px] rounded-xl [&_svg[class*='lucide-check']]:hidden [&_svg[class*='lucide-Check']]:hidden relative [&>span:first-child]:!hidden">
                      <SelectValue placeholder="" />
                      <span className="flex items-center gap-1 whitespace-nowrap">
                        <Flag country={currentCountry} />
                        {countryCode}
                      </span>
                    </SelectTrigger>
                    <SelectContent className="w-[90px] min-w-[90px]">
                      <SelectItem value="+1" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="US" />
                          +1
                        </span>
                      </SelectItem>
                      <SelectItem value="+44" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="GB" />
                          +44
                        </span>
                      </SelectItem>
                      <SelectItem value="+61" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="AU" />
                          +61
                        </span>
                      </SelectItem>
                      <SelectItem value="+33" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="FR" />
                          +33
                        </span>
                      </SelectItem>
                      <SelectItem value="+49" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="DE" />
                          +49
                        </span>
                      </SelectItem>
                      <SelectItem value="+39" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="IT" />
                          +39
                        </span>
                      </SelectItem>
                      <SelectItem value="+34" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="ES" />
                          +34
                        </span>
                      </SelectItem>
                      <SelectItem value="+31" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="NL" />
                          +31
                        </span>
                      </SelectItem>
                      <SelectItem value="+971" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="AE" />
                          +971
                        </span>
                      </SelectItem>
                      <SelectItem value="+65" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="SG" />
                          +65
                        </span>
                      </SelectItem>
                      <SelectItem value="+81" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="JP" />
                          +81
                        </span>
                      </SelectItem>
                      <SelectItem value="+86" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="CN" />
                          +86
                        </span>
                      </SelectItem>
                      <SelectItem value="+91" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="IN" />
                          +91
                        </span>
                      </SelectItem>
                      <SelectItem value="+55" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="BR" />
                          +55
                        </span>
                      </SelectItem>
                      <SelectItem value="+52" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="MX" />
                          +52
                        </span>
                      </SelectItem>
                      <SelectItem value="+27" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="ZA" />
                          +27
                        </span>
                      </SelectItem>
                      <SelectItem value="+64" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="NZ" />
                          +64
                        </span>
                      </SelectItem>
                      <SelectItem value="+353" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="IE" />
                          +353
                        </span>
                      </SelectItem>
                      <SelectItem value="+41" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="CH" />
                          +41
                        </span>
                      </SelectItem>
                      <SelectItem value="+43" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="AT" />
                          +43
                        </span>
                      </SelectItem>
                      <SelectItem value="+32" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="BE" />
                          +32
                        </span>
                      </SelectItem>
                      <SelectItem value="+46" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="SE" />
                          +46
                        </span>
                      </SelectItem>
                      <SelectItem value="+47" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="NO" />
                          +47
                        </span>
                      </SelectItem>
                      <SelectItem value="+45" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="DK" />
                          +45
                        </span>
                      </SelectItem>
                      <SelectItem value="+358" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="FI" />
                          +358
                        </span>
                      </SelectItem>
                      <SelectItem value="+48" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="PL" />
                          +48
                        </span>
                      </SelectItem>
                      <SelectItem value="+351" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="PT" />
                          +351
                        </span>
                      </SelectItem>
                      <SelectItem value="+30" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="GR" />
                          +30
                        </span>
                      </SelectItem>
                      <SelectItem value="+90" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="TR" />
                          +90
                        </span>
                      </SelectItem>
                      <SelectItem value="+7" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="RU" />
                          +7
                        </span>
                      </SelectItem>
                      <SelectItem value="+82" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="KR" />
                          +82
                        </span>
                      </SelectItem>
                      <SelectItem value="+66" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="TH" />
                          +66
                        </span>
                      </SelectItem>
                      <SelectItem value="+60" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="MY" />
                          +60
                        </span>
                      </SelectItem>
                      <SelectItem value="+62" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="ID" />
                          +62
                        </span>
                      </SelectItem>
                      <SelectItem value="+63" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="PH" />
                          +63
                        </span>
                      </SelectItem>
                      <SelectItem value="+84" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="VN" />
                          +84
                        </span>
                      </SelectItem>
                      <SelectItem value="+852" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="HK" />
                          +852
                        </span>
                      </SelectItem>
                      <SelectItem value="+886" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="TW" />
                          +886
                        </span>
                      </SelectItem>
                      <SelectItem value="+966" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="SA" />
                          +966
                        </span>
                      </SelectItem>
                      <SelectItem value="+972" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="IL" />
                          +972
                        </span>
                      </SelectItem>
                      <SelectItem value="+20" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="EG" />
                          +20
                        </span>
                      </SelectItem>
                      <SelectItem value="+234" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="NG" />
                          +234
                        </span>
                      </SelectItem>
                      <SelectItem value="+254" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="KE" />
                          +254
                        </span>
                      </SelectItem>
                      <SelectItem value="+54" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="AR" />
                          +54
                        </span>
                      </SelectItem>
                      <SelectItem value="+56" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="CL" />
                          +56
                        </span>
                      </SelectItem>
                      <SelectItem value="+57" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="CO" />
                          +57
                        </span>
                      </SelectItem>
                      <SelectItem value="+51" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="PE" />
                          +51
                        </span>
                      </SelectItem>
                      <SelectItem value="+58" className="whitespace-nowrap justify-center !px-1 [&>span:first-child]:hidden">
                        <span className="flex items-center gap-1 justify-center">
                          <Flag country="VE" />
                          +58
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="736 9283 8372" 
                    className="flex-1 rounded-xl"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit"
                variant="quiz" 
                size="lg"
                className="w-full"
              >
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
