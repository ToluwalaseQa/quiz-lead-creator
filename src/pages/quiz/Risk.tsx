import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";

const Risk = () => {
  const navigate = useNavigate();
  
  const options = [
    "Conservative",
    "Balanced",
    "Aggressive"
  ];

  return (
    <QuizLayout currentStep={4}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How would you describe your risk appetite?
          </h2>
          <p className="text-sm text-muted-foreground">
            No judgment — the AI automatically adjusts risk to fit you.
          </p>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          {options.map((option) => (
            <Button
              key={option}
              variant="quiz-option"
              className="w-full"
              onClick={() => navigate("/quiz/markets")}
            >
              {option}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-foreground italic max-w-lg mx-auto pt-4">
          Your risk profile helps us match you with the right trading strategies and asset allocations.
        </p>
      </div>
    </QuizLayout>
  );
};

export default Risk;
