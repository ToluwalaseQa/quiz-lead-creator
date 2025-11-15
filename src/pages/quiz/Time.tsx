import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";

const Time = () => {
  const navigate = useNavigate();
  
  const options = [
    "Less than 15 minutes per day",
    "Around 1 hour per day",
    "A few hours per week"
  ];

  return (
    <QuizLayout currentStep={3}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How much time can you dedicate to managing your investments?
          </h2>
          <p className="text-sm text-muted-foreground">
            AI does 90% of the analysis — you just approve trades.
          </p>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          {options.map((option) => (
            <Button
              key={option}
              variant="quiz-option"
              className="w-full"
              onClick={() => navigate("/quiz/risk")}
            >
              {option}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-foreground italic max-w-lg mx-auto pt-4">
          Most users spend less than 15 minutes daily. The AI works 24/7 while you live your life.
        </p>
      </div>
    </QuizLayout>
  );
};

export default Time;
