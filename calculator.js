const body = document.body;
const promt = require("prompt-sync")();
let quit = false;
const value1 = parseInt(promt("first: "));
const value2 = parseInt(promt("second: "));
const oprator = promt("A. addition , M. multipication  , D.  divition , Q. quit: ");
const addition = value1 + value2;
const multipication = value1 *  value2;
const divition = value1 / value2;

if (oprator === "addition") {
    addition;
    console.log("Addition");
    console.log(addition);
} else if (oprator === "multipication") {
    multipication;
    console.log("multiplication");
    console.log(multipication);
} else if (oprator === "divition") {
    Math.round(divition);
    console.log("divition");
    console.log(divition);
} else if (oprator === "quit") {
    quit = true;
}
