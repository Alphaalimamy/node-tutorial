// Modules
// CommonJS every file us module (by default)

//Modules - Encapsulted Code (only share minimum)

// const sayHi = function (name) {
//   console.log(`Hello there ${name}`);
// };

const names = require("./4-names");
const sayHi = require("./5-utils");
console.log(names);

sayHi(names.john);
