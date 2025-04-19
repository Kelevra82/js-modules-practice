"use strict";

import { divide, multiply } from "./mathUtils.js";
import repeatString from "./stringUtils.js";

const divideResults = divide(30, 3);
const multiplyResults = multiply(3, 7);

console.log(repeatString("h i  "));
console.log('Division:', divideResults);
console.log('Multiplication:', multiplyResults);