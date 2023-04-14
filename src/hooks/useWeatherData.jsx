import { useState, useEffect } from "react";

export default function useWeatherData(location) {
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [hasServerError, setHasServerError] = useState(false);

  // URL for lat & lon
  const latLonUrl = `https://api.openweathermap.org/data/2.5/weather?${location}&units=metric&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  // URL for city
  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  // fetching api data
  const fetchData = async () => {
    try {
      let response;
      location.includes("lat") && location.includes("lon")
        ? (response = await fetch(latLonUrl))
        : (response = await fetch(cityUrl));
      if (!response.ok) {
        if (response.status >= 500) {
          setHasServerError((prev) => !prev);
        } else {
          throw new Error(`Response is not OK!`);
        }
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setHasError((prev) => !prev);
    } finally {
      setIsLoading((prev) => !prev);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { apiData, isLoading, hasError, hasServerError };
}
