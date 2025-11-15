import { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { NotificationPopup } from "./NotificationPopup";

interface QuizLayoutProps {
  children: ReactNode;
  currentStep?: number;
  totalSteps?: number;
  showProgress?: boolean;
  showNavBar?: boolean;
}

export const QuizLayout = ({ children, currentStep = 0, totalSteps = 8, showProgress = true, showNavBar = true }: QuizLayoutProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showNavBar && <NavBar />}
      {showProgress && currentStep > 0 && (
        <div className="w-full bg-card border-b border-border">
          <div className="container max-w-3xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Question {currentStep} of {totalSteps}</span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      )}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          {children}
        </div>
      </div>
      <Footer />
      <NotificationPopup />
    </div>
  );
};
