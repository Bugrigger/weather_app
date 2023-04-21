// #!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { pringHelp } from "./services/log.service.js";

function initCLI() {
  const args = getArgs(process.argv);

  if (args.h) {
    pringHelp();
  }
}

initCLI();
