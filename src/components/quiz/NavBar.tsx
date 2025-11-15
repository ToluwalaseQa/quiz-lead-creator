import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import yahooLogo from "@/assets/Yahoo_news.svg";
import cbsLogo from "@/assets/CBS_logo.svg";
import businessInsiderLogo from "@/assets/Business_Insider_Logo.svg";
import foxLogo from "@/assets/Fox_News_Channel_logo.svg";
import cnnLogo from "@/assets/CNN_International_logo.svg";

const NavBar = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <nav className="w-full bg-card border-b border-border">
      <div className="container max-w-6xl mx-auto px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xl md:text-2xl font-bold text-primary">
          AI QUIZ
        </div>
        <Button 
          variant="quiz" 
          size="sm"
          onClick={handleCallNow}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          <span>CALL NOW</span>
        </Button>
      </div>
      <div className="flex items-center gap-3 md:gap-5 overflow-x-auto scrollbar-hide whitespace-nowrap mt-3 md:mt-0">
        <span className="text-sm md:text-base text-muted-foreground font-medium flex-shrink-0">AS SEEN ON</span>
        <div className="flex items-center gap-4 md:gap-6 flex-nowrap">
          <img 
            src={yahooLogo} 
            alt="Yahoo" 
            className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            style={{ maxWidth: '90px' }}
          />
          <img 
            src={cbsLogo} 
            alt="CBS" 
            className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            style={{ maxWidth: '75px' }}
          />
          <img 
            src={businessInsiderLogo} 
            alt="Business Insider" 
            className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            style={{ maxWidth: '120px' }}
          />
          <img 
            src={foxLogo} 
            alt="FOX" 
            className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            style={{ maxWidth: '75px' }}
          />
          <img 
            src={cnnLogo} 
            alt="CNN" 
            className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            style={{ maxWidth: '75px' }}
          />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
