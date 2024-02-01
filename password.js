const promt = require("prompt-sync")();
const otp = "admin";

const User = promt("what's your Name: ")
const loging = promt("enter otp to login to the admin dasboard: ")
if (otp === loging) {
    console.log("welcome", User);
} else {
    console.log("wrong password try agin");
}