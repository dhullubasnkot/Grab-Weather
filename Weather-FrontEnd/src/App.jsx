import { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return setError("Type a city.");
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/api/weather", {
        city,
      });
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Network error");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "12px", width: "280px", fontFamily: "Arial" }}>
      <h2>Weather Checker</h2>
      <input
        type="text"
        placeholder="City name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ width: "100%", padding: "6px", boxSizing: "border-box" }}
      />
      <button
        onClick={getWeather}
        style={{ margin: "8px 0", width: "100%", padding: "6px" }}
      >
        {loading ? "Loading..." : "Get Weather"}
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {weather && (
        <div style={{ marginTop: "12px" }}>
          <div>
            <strong>{weather.name}</strong>
          </div>
          <div>🔆 {weather.weather[0].main}</div>
          <div>🌡️ {weather.main.temp}°C</div>
          <div>💧 Humidity: {weather.main.humidity}%</div>
          <div>💨 Wind: {weather.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
}
//app.jsx
