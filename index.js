import * as _ from "./lodash.js";

document.getElementById("btn").addEventListener("click", () => {
  log();
});

function log() {
  console.log("--arr-------", _.shuffle([2, 1, 4, 3]));
  console.log("--obj-------", _.shuffle({ a: 1, b: 2, c: 3 }));
  return;
}
