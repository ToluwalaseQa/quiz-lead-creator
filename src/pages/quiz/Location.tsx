import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizLayout } from "@/components/quiz/QuizLayout";

const Location = () => {
  const navigate = useNavigate();
  
  const options = [
    "Australia",
    "United Kingdom",
    "Canada",
    "New Zealand",
    "Other"
  ];

  return (
    <QuizLayout currentStep={6}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Where are you located?
          </h2>
          <p className="text-sm text-muted-foreground">
            We only connect users to licensed and regulated partners in your region.
          </p>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          {options.map((option) => (
            <Button
              key={option}
              variant="quiz-option"
              className="w-full"
              onClick={() => navigate("/quiz/readiness")}
            >
              {option}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-foreground italic max-w-lg mx-auto pt-4">
          Your location ensures we connect you with fully licensed, regulated brokers in your jurisdiction.
        </p>
      </div>
    </QuizLayout>
  );
};

export default Location;
