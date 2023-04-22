// #!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { pringHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

function initCLI() {
  const args = getArgs(process.argv);

  if (args.h) {
    pringHelp();
  }
  if (args.t) {
    saveKeyValue("token", args.t);
  }
}

initCLI();
