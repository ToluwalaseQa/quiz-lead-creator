import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { CheckCircle2, Loader2 } from "lucide-react";

const Analyzing = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const analysisSteps = [
    { text: "Analyzing your experience level and investment goals...", delay: 1000 },
    { text: "Evaluating your risk profile and time commitment...", delay: 2000 },
    { text: "Matching with optimal market opportunities...", delay: 3000 },
    { text: "Generating your personalized AI trading recommendations...", delay: 4000 }
  ];

  useEffect(() => {
    const timers = analysisSteps.map((step, index) => {
      return setTimeout(() => {
        setCurrentStep(index + 1);
      }, step.delay);
    });

    // Navigate to success page after all steps complete
    const finalTimer = setTimeout(() => {
      navigate("/quiz/success");
    }, 5000);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(finalTimer);
    };
  }, [navigate]);

  return (
    <QuizLayout showProgress={false}>
      <div className="space-y-8 max-w-2xl mx-auto">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Analyzing Your Responses...
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI is processing your information to create your personalized trading strategy
          </p>
        </div>

        <div className="space-y-4 bg-white dark:bg-card p-8 rounded-2xl shadow-lg border-2 border-border">
          {analysisSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 ${
                currentStep > index
                  ? "bg-accent/10 opacity-100"
                  : "opacity-40"
              }`}
            >
              <div className="flex-shrink-0 mt-1">
                {currentStep > index ? (
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                ) : currentStep === index ? (
                  <Loader2 className="w-6 h-6 text-primary animate-spin" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30" />
                )}
              </div>
              <p className="text-foreground font-medium pt-0.5">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground italic">
          This will only take a moment...
        </p>
      </div>
    </QuizLayout>
  );
};

export default Analyzing;
