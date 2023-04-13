import { useParams } from "react-router-dom";
import Error from "../components/UserError";
import ServerError from "../components/ServerError";
import { BeatLoader } from "react-spinners";
import useWeatherData from "../hooks/useWeatherData";

export default function WeatherResult() {
  const { location } = useParams();
  const { apiData, isLoading, hasError, hasServerError } =
    useWeatherData(location);
  console.log(apiData);
  return (
    <div className="result-container">
      {isLoading ? (
        <BeatLoader color="#fff" />
      ) : hasServerError ? (
        <ServerError />
      ) : hasError ? (
        <Error />
      ) : (
        <div>
          <div>The Main data is here</div>
        </div>
      )}
    </div>
  );
}
