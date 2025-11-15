import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { TrustpilotReview } from "@/components/quiz/TrustpilotReview";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Clock, Zap, Target } from "lucide-react";
import testimonialJames from "@/assets/testimonial-james.jpg";
import testimonialLisa from "@/assets/testimonial-lisa.jpg";
import testimonialMark from "@/assets/testimonial-mark.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout showProgress={false}>
      <div className="space-y-8 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            AI Is Creating the Next Wave of Millionaires.
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            Answer 7 fast questions to find out if you qualify for free access.
          </p>

          <Button 
            variant="quiz" 
            size="lg"
            onClick={() => navigate("/quiz/experience")}
            className="w-full md:w-auto text-base px-12 py-7 text-lg"
          >
            Start My Quiz <ArrowRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="space-y-6 pt-8">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What You Get With Free Access:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI-Powered Market Analysis</h4>
                  <p className="text-sm text-muted-foreground">Get real-time insights across stocks, forex, and crypto markets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Personalized Trading Strategies</h4>
                  <p className="text-sm text-muted-foreground">AI adapts to your risk profile and investment goals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Licensed Partner Connections</h4>
                  <p className="text-sm text-muted-foreground">Only regulated brokers in your jurisdiction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">24/7 Market Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Never miss opportunities while you sleep</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Instant Trade Alerts</h4>
                  <p className="text-sm text-muted-foreground">Get notified when AI identifies high-probability setups</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Personal Onboarding Session</h4>
                  <p className="text-sm text-muted-foreground">One-on-one setup with a dedicated account manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">✓ Zero Experience Required</h3>
              <p className="text-sm text-muted-foreground">
                AI handles the complex analysis. You just review and approve trades.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">✓ 24/7 Market Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Never miss opportunities. The AI watches markets around the clock.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">✓ Licensed & Regulated</h3>
              <p className="text-sm text-muted-foreground">
                We only connect you with fully licensed partners in your region.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <TrustpilotReview 
              text="Didn't expect much, but this AI actually helps me understand the market in minutes."
              author="James R., London"
              image={testimonialJames}
            />
            <TrustpilotReview 
              text="I'm not a trader, but this made it feel simple and safe."
              author="Lisa M., Sydney"
              image={testimonialLisa}
            />
            <TrustpilotReview 
              text="Easy setup, real insights. Way better than guessing."
              author="Mark P., Toronto"
              image={testimonialMark}
            />
          </div>

          <p className="text-sm text-muted-foreground italic mb-6">
            Let's find out how the AI can help you make smarter moves — no experience needed.
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to See If You Qualify?
            </h3>
            <p className="text-muted-foreground mb-6">
              Takes less than 2 minutes. Over 50,000 people have already started.
            </p>
            <Button 
              variant="quiz" 
              size="lg"
              onClick={() => navigate("/quiz/experience")}
              className="w-full md:w-auto text-base px-12 py-7 text-lg"
            >
              Start My Quiz Now <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </QuizLayout>
  );
};

export default Welcome;
