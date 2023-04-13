import { useState, useEffect } from "react";

export default function useWeatherData(location) {
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [hasServerError, setHasServerError] = useState(false);

  const latLonUrl = `https://api.openweathermap.org/data/2.5/weather?${location}&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  const fetchData = async () => {
    try {
      let response;
      location.includes("lat") && location.includes("lon")
        ? (response = await fetch(latLonUrl))
        : (response = await fetch(cityUrl));
      if (!response.ok) {
        if (response.status >= 500) {
          setHasServerError(true);
        } else {
          throw new Error(`Response is not OK!`);
        }
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { apiData, isLoading, hasError, hasServerError };
}