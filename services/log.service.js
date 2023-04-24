import chalk from "chalk";
import dedent from "dedent-js";

function getIcon(icon) {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧";
    case "10":
      return "🌦";
    case "11":
      return "🌩";
    case "13":
      return "❄️";
    case "50":
      return "🌫";
    default:
      return "";
  }
}

export function printError(error) {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
}

export function printSuccess(message) {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
}

export function pringHelp() {
  console.log(
    dedent(`
  ${chalk.bgBlue(" HELP ")}
  "Без параметров - вывод погоды"
  -s [CITY] для установки города
  -h для вывода помощи
  -t [API_KEY] для сохранения токена
  `)
  );
}

export function logWeather(data) {
  console.log(
    dedent(`
    ${chalk.bgYellow(" ПОГОДА ")}
    Погода в городе: ${data.name}
    ${getIcon(data.weather[0].icon)} ${data.weather[0].description}
    Температура: ${data.main.temp} (ощущается как ${data.main.feels_like})
    Влажность: ${data.main.humidity}%
    Скорость ветра: ${data.wind.speed} м/с
  `)
  );
}
