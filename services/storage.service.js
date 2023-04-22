import { homedir } from "os";
import { join, basename } from "path";

const filePath = join(homedir(), "./weather_data.json");

export function saveKeyValue(key, value) {
  console.log(basename(filePath));
  console.log("123");
}
