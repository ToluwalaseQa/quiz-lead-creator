import { QuizLayout } from "@/components/quiz/QuizLayout";
import { CheckCircle2, Star } from "lucide-react";
import successImage from "@/assets/success.jpg";

const Success = () => {

  return (
    <QuizLayout showProgress={false}>
      <div className="space-y-8 text-center">
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
          <p className="text-sm md:text-base text-foreground font-medium">
            A member of our team will contact you shortly to set up your personalized onboarding session.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-4">
            <CheckCircle2 className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            ✅ Success! You're In.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to Profit Alliance AI — your gateway to smarter, faster, AI-powered market insights.
            Watch this short video to learn how your personal AI system works before your onboarding session.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
          <img 
            src={successImage} 
            alt="Success - Welcome to AI-powered trading platform dashboard" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-card border border-border rounded-xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-sm font-medium text-foreground mb-1">
            Rated "Excellent" on Trustpilot
          </p>
          <p className="text-xs text-muted-foreground">
            Over 12,000 users worldwide trust Profit Alliance AI to guide their trading decisions.
          </p>
        </div>

      </div>
    </QuizLayout>
  );
};

export default Success;
