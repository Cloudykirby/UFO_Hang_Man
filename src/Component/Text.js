// var fs = require("fs");
import { readFileSync } from "fs";

function txtToArray() {
  let wordArray = readFileSync("../../public/nouns.txt");
  wordArray = wordArray.split("\n");
  console.log(wordArray);
  return wordArray;
}
// export default txtToArray;

// var losingMess = fs.readFileSync("../../public/messages.txt", "utf8");

// losingMess = losingMess.split("\n");
// console.log(losingMess);

// export { losingMess };
