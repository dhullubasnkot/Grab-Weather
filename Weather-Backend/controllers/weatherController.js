
import axios from "axios";
export async function fetchWeather(req, res) {
  const { city } = req.body;
  if (!city) return res.status(400).json({ error: "City is required" });
  try {
    const apiRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: { q: city, units: "metric", appid: process.env.OPENWEATHER_KEY }
      }
    );
    res.json(apiRes.data);
  } catch (err) {
    res.status(500).json({ error: err.response?.data?.message || err.message });
  }
}
