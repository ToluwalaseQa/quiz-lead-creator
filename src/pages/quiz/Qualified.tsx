import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { ArrowRight, PartyPopper } from "lucide-react";
import qualifiedImage from "@/assets/qualified.jpg";
import { useToast } from "@/hooks/use-toast";
import { useIpGeolocation } from "@/hooks/use-ip-geolocation";
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

const Qualified = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { geolocation, loading: geoLoading } = useIpGeolocation();
  const [countryCode, setCountryCode] = useState("+1");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: ""
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
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to continue.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Your information has been submitted.",
    });

    navigate("/quiz/analyzing");
  };

  return (
    <QuizLayout currentStep={8} showProgress={false}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
            <PartyPopper className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            🎉 You Qualify for Early Access!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI analysis platform is available in your region.
            Fill in your details to unlock your dashboard and connect with your personal account manager.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white dark:bg-card p-8 rounded-2xl shadow-lg border-2 border-border">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input 
              id="fullName"
              placeholder="John Smith"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="rounded-xl"
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
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-xl flex-1"
              />
            </div>
          </div>

          <Button 
            type="submit"
            variant="quiz" 
            size="lg"
            className="w-full text-base"
          >
            Get My Access <ArrowRight className="w-5 h-5" />
          </Button>
        </form>

          <p className="text-sm text-center text-muted-foreground italic">
            Almost done — your personal AI trading setup is waiting!
          </p>
          
          <div className="text-center text-xs text-muted-foreground max-w-md mx-auto pt-2">
            Your information is secure and will only be shared with licensed, regulated partners in your region.
          </div>
      </div>
    </QuizLayout>
  );
};

export default Qualified;
