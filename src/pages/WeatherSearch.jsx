export default function WeatherSearch() {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="app-heading">Weather App</div>
        <hr className="top-hr" />
        <input
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
          <button className="btn">Get Device Location</button>
        </div>
      </div>
    </div>
  );
}
