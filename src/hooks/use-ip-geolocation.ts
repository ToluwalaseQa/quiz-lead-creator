import { useState, useEffect } from "react";

interface GeolocationData {
  countryCode: string;
  countryName: string;
  city: string;
  countryCallingCode: string;
}

// Mapping of country codes to phone calling codes
const countryToCallingCode: Record<string, string> = {
  US: "+1", GB: "+44", AU: "+61", CA: "+1", FR: "+33", DE: "+49", IT: "+39",
  ES: "+34", NL: "+31", AE: "+971", SG: "+65", JP: "+81", CN: "+86", IN: "+91",
  BR: "+55", MX: "+52", ZA: "+27", NZ: "+64", IE: "+353", CH: "+41", AT: "+43",
  BE: "+32", SE: "+46", NO: "+47", DK: "+45", FI: "+358", PL: "+48", PT: "+351",
  GR: "+30", TR: "+90", RU: "+7", KR: "+82", TH: "+66", MY: "+60", ID: "+62",
  PH: "+63", VN: "+84", HK: "+852", TW: "+886", SA: "+966", IL: "+972", EG: "+20",
  NG: "+234", KE: "+254", AR: "+54", CL: "+56", CO: "+57", PE: "+51", VE: "+58",
};

export const useIpGeolocation = () => {
  const [geolocation, setGeolocation] = useState<GeolocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        setLoading(true);
        // Using ipapi.co free API (no API key required for basic usage)
        const response = await fetch("https://ipapi.co/json/");
        
        if (!response.ok) {
          throw new Error("Failed to fetch geolocation");
        }

        const data = await response.json();
        
        const countryCode = data.country_code || "US";
        const callingCode = countryToCallingCode[countryCode] || "+1";
        
        setGeolocation({
          countryCode,
          countryName: data.country_name || "United States",
          city: data.city || "Unknown",
          countryCallingCode: callingCode,
        });
        setError(null);
      } catch (err) {
        console.error("Error fetching geolocation:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        // Set default values on error
        setGeolocation({
          countryCode: "US",
          countryName: "United States",
          city: "Unknown",
          countryCallingCode: "+1",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGeolocation();
  }, []);

  return { geolocation, loading, error };
};


