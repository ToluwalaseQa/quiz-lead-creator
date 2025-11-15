import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";

const Readiness = () => {
  const navigate = useNavigate();
  
  const options = [
    "Immediately",
    "In the next few days",
    "I just want to learn more"
  ];

  return (
    <QuizLayout currentStep={7}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            If you qualify, how soon would you like to start using the AI system?
          </h2>
          <p className="text-sm text-muted-foreground">
            Early users get access to personal onboarding and live demos.
          </p>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          {options.map((option) => (
            <Button
              key={option}
              variant="quiz-option"
              className="w-full"
              onClick={() => navigate("/quiz/qualified")}
            >
              {option}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-foreground italic max-w-lg mx-auto pt-4">
          No pressure — take your time. Early adopters receive priority support and exclusive training materials.
        </p>
      </div>
    </QuizLayout>
  );
};

export default Readiness;
