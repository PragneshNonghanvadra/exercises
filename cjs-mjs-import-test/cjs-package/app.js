const { mjsVariable, mjsFunction } = require("mjs-package");

const cjsVariable = "Hello from CJS";

async function cjsFunction() {
  // const { mjsVariable, mjsFunction } = await import("../mjs-package/app.js");
  console.log(mjsVariable, mjsFunction());
  console.log(cjsVariable);
}

cjsFunction();

module.exports = { cjsVariable, cjsFunction };
