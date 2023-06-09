import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import WeatherSearch from "./pages/WeatherSearch";
import WeatherResult from "./pages/WeatherResult";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WeatherSearch />} />
        <Route path="/:location" element={<WeatherResult />} />
      </Routes>
    </HashRouter>
  );
}
