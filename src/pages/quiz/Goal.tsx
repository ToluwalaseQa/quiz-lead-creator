import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";

const Goal = () => {
  const navigate = useNavigate();
  
  const options = [
    "Build long-term wealth",
    "Create an extra income stream",
    "Learn how AI trading works"
  ];

  return (
    <QuizLayout currentStep={2}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What's your main goal when it comes to investing?
          </h2>
          <p className="text-sm text-muted-foreground">
            The system adapts to your goal — long-term or short-term.
          </p>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          {options.map((option) => (
            <Button
              key={option}
              variant="quiz-option"
              className="w-full"
              onClick={() => navigate("/quiz/time")}
            >
              {option}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-foreground italic max-w-lg mx-auto pt-4">
          Your goals shape the AI's strategy. We personalize everything to match your financial objectives.
        </p>
      </div>
    </QuizLayout>
  );
};

export default Goal;
