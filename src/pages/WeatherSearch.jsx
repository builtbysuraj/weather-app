import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WeatherSearch() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleInput = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z][a-zA-Z\s]*$/.test(inputRef.current.value)) {
      navigate(`/search/${inputRef.current.value}`);
    } else {
      toast.warn("Invalid input! Please enter a valid city name.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
