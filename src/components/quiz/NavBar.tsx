import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import yahooLogo from "@/assets/tv/YahooNewsLogo.png";
import businessInsiderLogo from "@/assets/tv/Business-Insider-Logo-1536x864.webp";
import cbsLogo from "@/assets/tv/cbs-news.webp";
import foxLogo from "@/assets/tv/Fox News.9ad83084.svg";
import nbcLogo from "@/assets/tv/NBC_News_2023.webp";
import abcLogo from "@/assets/tv/ABC_News_logo_2021.webp";

const NavBar = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <nav className="w-full bg-card border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4">
        {/* Mobile: Stacked layout */}
        <div className="flex flex-col md:hidden gap-3">
          {/* First line: AI QUIZ and CALL NOW */}
          <div className="flex items-center justify-between gap-4">
            <div className="text-xl font-bold text-primary">
              AI QUIZ
            </div>
            <Button 
              variant="quiz" 
              size="sm"
              onClick={handleCallNow}
              className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </Button>
          </div>
          
          {/* Second line: AS SEEN ON text */}
          <div className="flex items-center justify-center">
            <span className="text-sm text-muted-foreground font-medium">AS SEEN ON</span>
          </div>
          
          {/* Third line: Logos */}
          <div className="flex items-center justify-between w-full overflow-x-auto scrollbar-hide whitespace-nowrap">
            <img 
              src={yahooLogo} 
              alt="Yahoo News" 
              className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
              style={{ maxWidth: '90px' }}
            />
            <img 
              src={businessInsiderLogo} 
              alt="Business Insider" 
              className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
              style={{ maxWidth: '120px' }}
            />
            <img 
              src={cbsLogo} 
              alt="CBS News" 
              className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
              style={{ maxWidth: '75px' }}
            />
            <img 
              src={foxLogo} 
              alt="FOX News" 
              className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
              style={{ maxWidth: '75px' }}
            />
            <img 
              src={nbcLogo} 
              alt="NBC News" 
              className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
              style={{ maxWidth: '75px' }}
            />
            <img 
              src={abcLogo} 
              alt="ABC News" 
              className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
              style={{ maxWidth: '75px' }}
            />
          </div>
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
          {/* Left: AI QUIZ */}
          <div className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">
            AI QUIZ
          </div>
          
          {/* Center: AS SEEN ON + Logos */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide whitespace-nowrap flex-1 justify-center px-4 md:px-6 lg:px-8">
            <span className="text-sm md:text-base text-muted-foreground font-medium flex-shrink-0">AS SEEN ON</span>
            <div className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-nowrap">
              <img 
                src={yahooLogo} 
                alt="Yahoo News" 
                className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ maxWidth: '90px' }}
              />
              <img 
                src={businessInsiderLogo} 
                alt="Business Insider" 
                className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ maxWidth: '120px' }}
              />
              <img 
                src={cbsLogo} 
                alt="CBS News" 
                className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ maxWidth: '75px' }}
              />
              <img 
                src={foxLogo} 
                alt="FOX News" 
                className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ maxWidth: '75px' }}
              />
              <img 
                src={nbcLogo} 
                alt="NBC News" 
                className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ maxWidth: '75px' }}
              />
              <img 
                src={abcLogo} 
                alt="ABC News" 
                className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ maxWidth: '75px' }}
              />
            </div>
          </div>
          
          {/* Right: CALL NOW Button */}
          <Button 
            variant="quiz" 
            size="sm"
            onClick={handleCallNow}
            className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>CALL NOW</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
