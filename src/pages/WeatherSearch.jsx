import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function WeatherSearch() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleInput = (e) => {
    e.preventDefault();
    navigate(`/search/${inputRef.current.value}`);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        navigate(`/search/lat=${lat}&lon=${lon}`);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  return (
    <div className="search-container">
      <form onSubmit={handleInput} className="search-wrapper">
        <div className="app-heading">Weather App</div>
        <hr className="top-hr" />
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Enter city name"
          spellCheck="false"
        />
        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <div className="btn-wrapper">
          <button type="button" onClick={(e) => getLocation(e)} className="btn">
            Get Device Location
          </button>
        </div>
      </form>
    </div>
  );
}
