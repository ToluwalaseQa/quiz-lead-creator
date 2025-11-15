import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";

const Experience = () => {
  const navigate = useNavigate();
  
  const options = [
    "Yes, I have experience",
    "I've tried once or twice",
    "No, I'm a complete beginner"
  ];

  return (
    <QuizLayout currentStep={1}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Have you ever invested or traded online before?
          </h2>
          <p className="text-sm text-muted-foreground">
            AI doesn't need you to be an expert — it learns your style automatically.
          </p>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          {options.map((option) => (
            <Button
              key={option}
              variant="quiz-option"
              className="w-full"
              onClick={() => navigate("/quiz/goal")}
            >
              {option}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-foreground italic max-w-lg mx-auto pt-4">
          Over 70% of our users started with zero trading experience. The AI adapts to your knowledge level.
        </p>
      </div>
    </QuizLayout>
  );
};

export default Experience;
