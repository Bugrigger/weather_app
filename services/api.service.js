import axios from "axios";
import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js";

export async function getWeather(city) {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error(
      "Не задан ключ API, задайте его через команду -t [API_KEY]"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    { params: { q: city, appid: token, lang: "ru", units: "metric" } }
  );

  return data;
}
