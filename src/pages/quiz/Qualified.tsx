import { useState, useEffect } from "react";
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

  // Auto-set country code when geolocation is loaded
  useEffect(() => {
    if (geolocation?.countryCallingCode) {
      setCountryCode(geolocation.countryCallingCode);
    }
  }, [geolocation]);

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
                <SelectTrigger className="w-[140px] rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44</SelectItem>
                  <SelectItem value="+61">🇦🇺 +61</SelectItem>
                  <SelectItem value="+33">🇫🇷 +33</SelectItem>
                  <SelectItem value="+49">🇩🇪 +49</SelectItem>
                  <SelectItem value="+39">🇮🇹 +39</SelectItem>
                  <SelectItem value="+34">🇪🇸 +34</SelectItem>
                  <SelectItem value="+31">🇳🇱 +31</SelectItem>
                  <SelectItem value="+971">🇦🇪 +971</SelectItem>
                  <SelectItem value="+65">🇸🇬 +65</SelectItem>
                  <SelectItem value="+81">🇯🇵 +81</SelectItem>
                  <SelectItem value="+86">🇨🇳 +86</SelectItem>
                  <SelectItem value="+91">🇮🇳 +91</SelectItem>
                  <SelectItem value="+55">🇧🇷 +55</SelectItem>
                  <SelectItem value="+52">🇲🇽 +52</SelectItem>
                  <SelectItem value="+27">🇿🇦 +27</SelectItem>
                  <SelectItem value="+64">🇳🇿 +64</SelectItem>
                  <SelectItem value="+353">🇮🇪 +353</SelectItem>
                  <SelectItem value="+41">🇨🇭 +41</SelectItem>
                  <SelectItem value="+43">🇦🇹 +43</SelectItem>
                  <SelectItem value="+32">🇧🇪 +32</SelectItem>
                  <SelectItem value="+46">🇸🇪 +46</SelectItem>
                  <SelectItem value="+47">🇳🇴 +47</SelectItem>
                  <SelectItem value="+45">🇩🇰 +45</SelectItem>
                  <SelectItem value="+358">🇫🇮 +358</SelectItem>
                  <SelectItem value="+48">🇵🇱 +48</SelectItem>
                  <SelectItem value="+351">🇵🇹 +351</SelectItem>
                  <SelectItem value="+30">🇬🇷 +30</SelectItem>
                  <SelectItem value="+90">🇹🇷 +90</SelectItem>
                  <SelectItem value="+7">🇷🇺 +7</SelectItem>
                  <SelectItem value="+82">🇰🇷 +82</SelectItem>
                  <SelectItem value="+66">🇹🇭 +66</SelectItem>
                  <SelectItem value="+60">🇲🇾 +60</SelectItem>
                  <SelectItem value="+62">🇮🇩 +62</SelectItem>
                  <SelectItem value="+63">🇵🇭 +63</SelectItem>
                  <SelectItem value="+84">🇻🇳 +84</SelectItem>
                  <SelectItem value="+852">🇭🇰 +852</SelectItem>
                  <SelectItem value="+886">🇹🇼 +886</SelectItem>
                  <SelectItem value="+966">🇸🇦 +966</SelectItem>
                  <SelectItem value="+972">🇮🇱 +972</SelectItem>
                  <SelectItem value="+20">🇪🇬 +20</SelectItem>
                  <SelectItem value="+234">🇳🇬 +234</SelectItem>
                  <SelectItem value="+254">🇰🇪 +254</SelectItem>
                  <SelectItem value="+54">🇦🇷 +54</SelectItem>
                  <SelectItem value="+56">🇨🇱 +56</SelectItem>
                  <SelectItem value="+57">🇨🇴 +57</SelectItem>
                  <SelectItem value="+51">🇵🇪 +51</SelectItem>
                  <SelectItem value="+58">🇻🇪 +58</SelectItem>
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
