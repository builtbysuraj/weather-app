import { useNavigate, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import useWeatherData from "../hooks/useWeatherData";
import ServerError from "../errors/ServerError";
import UserError from "../errors/UserError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { countries } from "country-data";

export default function WeatherResult() {
  const { location } = useParams();
  const navigate = useNavigate();
  const { apiData, isLoading, hasError, hasServerError } =
    useWeatherData(location);

  let name, country, temp, feels_like, humidity, description;

  if (apiData?.weather?.length > 0) {
    ({
      name,
      sys: { country },
      main: { temp, feels_like, humidity },
      weather: [{ description }],
    } = apiData);
  }

  const imgMap = {
    mist: "/img/mist.png",
    rain: "/img/rain.png",
    "moderate rain": "/img/rain.png",
    "light rain": "/img/rain.png",
    "shower rain": "/img/shower.png",
    "clear sky": "/img/clear-sky.png",
    thunderstorm: "/img/thunderstorm.png",
    snow: "/img/show.png",
    "cloudy day": "/img/cloudy-day.png",
    "few clouds": "/img/cloudy-day.png",
    haze: "/img/haze.png",
    tornado: "/img/tornado.png",
    "broken clouds": "/img/broken-cloud.png",
    "scattered clouds": "/img/broken-cloud.png",
    "overcast clouds": "/img/broken-cloud.png",
    sunny: "/img/sunny-day.png",
    smoke: "/img/smoke.png",
  };

  const imgSrc = imgMap[description];

  return (
    <div className="result-container">
      {isLoading ? (
        <BeatLoader color="#fff" />
      ) : hasServerError ? (
        <ServerError />
      ) : hasError ? (
        <UserError />
      ) : (
        <>
          {/* header */}
          <div className="result-wrapper">
            <div onClick={() => navigate(-1)} className="heading">
              <span className="symbol">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: "#499ddd" }}
                />
              </span>
              <span className="back">Weather App</span>
            </div>
            <hr className="top-hr" />
            {/* main section */}
            <div className="main-section">
              <img src={imgSrc} width={105} alt="icon" />
              <div className="temprature">{temp}°C</div>
              <div className="cloud-status">{description}</div>
              <div className="location">
                <FontAwesomeIcon icon={faLocationDot} />
                {name}, {countries[country]?.name}
              </div>
            </div>
            <hr className="top-hr" />
            {/* bottom section */}
            <div className="bottom">
              {/* bottom-left feels-like section */}
              <div className="bottom-left">
                <span className="left-wrapper">
                  <img width={31} src="/img/feels-like.png" alt="feels-like" />
                  <span className="feels-like">
                    <span className="value">{feels_like}°C</span>
                    <span className="title">Feels like</span>
                  </span>
                </span>
              </div>
              <div className="vl"></div>
              {/* bottom-right humidity section */}
              <div className="bottom-right">
                <span className="right-wrapper">
                  <img width={30} src="/img/humidity.png" alt="humidity" />
                  <span className="humidity">
                    <span className="value">{humidity}%</span>
                    <span className="title">Humidity</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
