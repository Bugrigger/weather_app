import chalk from "chalk";
import dedent from "dedent-js";

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
  -i CLI клиент для отображения прогноза погоды
  `)
  );
}
