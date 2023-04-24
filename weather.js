// #!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { pringHelp, printError, printSuccess } from "./services/log.service.js";
import { TOKEN_DICTIONARY, saveKeyValue } from "./services/storage.service.js";

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

function initCLI() {
  const args = getArgs(process.argv);

  if (args.h) {
    pringHelp();
  }
  if (args.t) {
    return saveToken(args.t);
  }
}

getWeather("krasnoyarsk");

initCLI();
