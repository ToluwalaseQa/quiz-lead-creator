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
      setLoading(true);
      let finalData: GeolocationData | null = null;

      // List of geolocation APIs to try in order
      const apis = [
        // API 1: ipapi.co
        async () => {
          const response = await fetch("https://ipapi.co/json/", {
            headers: { 'Accept': 'application/json' },
          });
          if (response.ok) {
            const data = await response.json();
            if (data.city && data.city !== "Unknown" && data.city !== "") {
              return {
                countryCode: data.country_code || "US",
                countryName: data.country_name || "United States",
                city: data.city,
                countryCallingCode: countryToCallingCode[data.country_code] || "+1",
              };
            }
          }
          return null;
        },
        // API 2: ip-api.com (HTTPS via proxy or direct)
        async () => {
          try {
            const response = await fetch("https://ip-api.com/json/?fields=status,message,country,countryCode,city,regionName", {
              headers: { 'Accept': 'application/json' },
            });
            if (response.ok) {
              const data = await response.json();
              if (data.status === "success" && data.city) {
                return {
                  countryCode: data.countryCode || "US",
                  countryName: data.country || "United States",
                  city: data.city,
                  countryCallingCode: countryToCallingCode[data.countryCode] || "+1",
                };
              }
            }
          } catch (e) {
            // Try HTTP version if HTTPS fails (some environments allow it)
            try {
              const response = await fetch("http://ip-api.com/json/?fields=status,message,country,countryCode,city,regionName");
              if (response.ok) {
                const data = await response.json();
                if (data.status === "success" && data.city) {
                  return {
                    countryCode: data.countryCode || "US",
                    countryName: data.country || "United States",
                    city: data.city,
                    countryCallingCode: countryToCallingCode[data.countryCode] || "+1",
                  };
                }
              }
            } catch (e2) {
              // Ignore
            }
          }
          return null;
        },
        // API 3: ipgeolocation.io (free tier)
        async () => {
          try {
            const response = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=free", {
              headers: { 'Accept': 'application/json' },
            });
            if (response.ok) {
              const data = await response.json();
              if (data.city) {
                return {
                  countryCode: data.country_code2 || "US",
                  countryName: data.country_name || "United States",
                  city: data.city,
                  countryCallingCode: countryToCallingCode[data.country_code2] || "+1",
                };
              }
            }
          } catch (e) {
            // Ignore
          }
          return null;
        },
        // API 4: ipwho.is
        async () => {
          try {
            const response = await fetch("https://ipwho.is/", {
              headers: { 'Accept': 'application/json' },
            });
            if (response.ok) {
              const data = await response.json();
              if (data.success && data.city) {
                return {
                  countryCode: data.country_code || "US",
                  countryName: data.country || "United States",
                  city: data.city,
                  countryCallingCode: countryToCallingCode[data.country_code] || "+1",
                };
              }
            }
          } catch (e) {
            // Ignore
          }
          return null;
        },
        // API 5: geojs.io
        async () => {
          try {
            const response = await fetch("https://get.geojs.io/v1/ip/geo.json", {
              headers: { 'Accept': 'application/json' },
            });
            if (response.ok) {
              const data = await response.json();
              if (data.city) {
                return {
                  countryCode: data.country_code || "US",
                  countryName: data.country || "United States",
                  city: data.city,
                  countryCallingCode: countryToCallingCode[data.country_code] || "+1",
                };
              }
            }
          } catch (e) {
            // Ignore
          }
          return null;
        },
      ];

      // Try each API in sequence until we get valid city data
      for (const api of apis) {
        try {
          const result = await Promise.race([
            api(),
            new Promise<null>((resolve) => setTimeout(() => resolve(null), 5000)), // 5 second timeout
          ]);
          
          if (result && result.city && result.city !== "Unknown" && result.city !== "") {
            finalData = result;
            break;
          }
        } catch (err) {
          console.log("API attempt failed, trying next...");
          continue;
        }
      }

      // If we still don't have city data, set a default but keep trying
      if (!finalData) {
        console.warn("Could not fetch city from any API, using fallback");
        finalData = {
          countryCode: "US",
          countryName: "United States",
          city: "your area",
          countryCallingCode: "+1",
        };
      }

      setGeolocation(finalData);
      setError(null);
      setLoading(false);
    };

    fetchGeolocation();
  }, []);

  return { geolocation, loading, error };
};


