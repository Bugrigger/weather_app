#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import {
  logWeather,
  pringHelp,
  printError,
  printSuccess,
} from "./services/log.service.js";
import {
  TOKEN_DICTIONARY,
  getKeyValue,
  saveKeyValue,
} from "./services/storage.service.js";

/**
 * Установка токена
 * @param {*} token
 * @returns
 */
async function saveToken(token) {
  if (!token.length) {
    printError("Не передан токен");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Токен сохранен");
  } catch (error) {
    printError(error.message);
  }
}

/**
 * Установка города по которому будет получена погода
 * @param {*} city
 * @returns
 */
async function saveCity(city) {
  if (!city.length) {
    printError("Город не передан");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("Город сохранен");
  } catch (error) {
    printError(error.message);
  }
}

/**
 * Запуск приложения и обработка ошибок
 */
async function getForecast() {
  try {
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    logWeather(weather);
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("Неверно указан город");
    } else if (error?.response?.status === 401) {
      printError("Неверно указан токен");
    } else {
      printError(error.message);
    }
  }
}

/**
 * Чтение аргументов и вызов методов в зависимости от переданных аргументов
 * @returns
 */
function initCLI() {
  const args = getArgs(process.argv);

  if (args.h) {
    pringHelp();
  }
  if (args.t) {
    return saveToken(args.t);
  }
  if (args.s) {
    return saveCity(args.s);
  }

  getForecast();
}

initCLI();
