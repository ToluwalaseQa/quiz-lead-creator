import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/quiz/Welcome";
import Experience from "./pages/quiz/Experience";
import Goal from "./pages/quiz/Goal";
import Time from "./pages/quiz/Time";
import Risk from "./pages/quiz/Risk";
import Markets from "./pages/quiz/Markets";
import Location from "./pages/quiz/Location";
import Readiness from "./pages/quiz/Readiness";
import Qualified from "./pages/quiz/Qualified";
import Analyzing from "./pages/quiz/Analyzing";
import Success from "./pages/quiz/Success";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/quiz/welcome" replace />} />
          <Route path="/quiz/welcome" element={<Welcome />} />
          <Route path="/quiz/experience" element={<Experience />} />
          <Route path="/quiz/goal" element={<Goal />} />
          <Route path="/quiz/time" element={<Time />} />
          <Route path="/quiz/risk" element={<Risk />} />
          <Route path="/quiz/markets" element={<Markets />} />
          <Route path="/quiz/location" element={<Location />} />
          <Route path="/quiz/readiness" element={<Readiness />} />
          <Route path="/quiz/qualified" element={<Qualified />} />
          <Route path="/quiz/analyzing" element={<Analyzing />} />
          <Route path="/quiz/success" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
