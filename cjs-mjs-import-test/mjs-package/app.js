import { cjsVariable, cjsFunction } from "cjs-package";
import { mjsTest } from "./mjs-file.js";

export const mjsVariable = "Hello from MJS";

export function mjsFunction() {
  console.log("MJS::", mjsVariable);
}

// mjsTest();
cjsFunction();

// console.log("FROM MJS:: ", cjsFunction(), cjsVariable);
