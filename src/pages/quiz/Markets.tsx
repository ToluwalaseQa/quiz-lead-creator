import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";

const Markets = () => {
  const navigate = useNavigate();
  
  const options = [
    "Stocks",
    "Forex",
    "Crypto",
    "All of the above"
  ];

  return (
    <QuizLayout currentStep={5}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Which markets are you most interested in?
          </h2>
          <p className="text-sm text-muted-foreground">
            The AI analyzes all major markets. You choose what to track.
          </p>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          {options.map((option) => (
            <Button
              key={option}
              variant="quiz-option"
              className="w-full"
              onClick={() => navigate("/quiz/location")}
            >
              {option}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-foreground italic max-w-lg mx-auto pt-4">
          Our AI monitors multiple asset classes simultaneously, giving you diversified insights across markets.
        </p>
      </div>
    </QuizLayout>
  );
};

export default Markets;
