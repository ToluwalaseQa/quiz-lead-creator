import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border mt-auto">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> Trading and investing carry risk. Past performance does not guarantee future results. 
              The information provided on this site is for educational purposes only and should not be considered financial advice. 
              Profit Alliance AI is a technology platform that provides market analysis tools. 
              Always consult with a qualified financial advisor before making investment decisions.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Profit Alliance AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
