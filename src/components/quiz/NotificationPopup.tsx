import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { useIpGeolocation } from "@/hooks/use-ip-geolocation";

const names = ["John", "Sarah", "Michael", "Emma", "David", "Sophie", "James", "Lisa", "Mark", "Anna"];

const generateAmount = () => {
  return Math.floor(Math.random() * 8000) + 2000; // Random amount between $2,000 and $10,000
};

export const NotificationPopup = () => {
  const { geolocation } = useIpGeolocation();
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState({ name: "", city: "", amount: 0 });

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      // Use visitor's city from IP, fallback to "your area" if not available
      const visitorCity = geolocation?.city || "your area";
      const randomAmount = generateAmount();

      setMessage({ name: randomName, city: visitorCity, amount: randomAmount });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Hide after 5 seconds
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Show subsequent notifications every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [geolocation]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-card border border-border rounded-xl shadow-lg p-4 max-w-sm flex items-start gap-3">
        <div className="flex-shrink-0">
          <CheckCircle2 className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">
            {message.name} from {message.city}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            just earned ${message.amount.toLocaleString()} with AI QUIZ
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
