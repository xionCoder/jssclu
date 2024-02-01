 const promt = require("prompt-sync")();
 let correct_answers = 0;

 console.log("welcome to the Quiz");
const answer1 = promt("what is the brain of the computer: ");
const correct_answer1 = "CPU";

if  (answer1.toUpperCase() === correct_answer1) {
    console.log("you got it right");
    correct_answers +=1
} else{
    console.log("Wrong..... try agin");
}

const answer2 = promt("how many ram dose a computer have: ");
const correct_answer2 = "2";

if  (answer2 === correct_answer2) {
    console.log("you got it right");
    correct_answers +=1
} else{ 
    console.log("Wrong..... try agin");
}

const answer3 = promt("what is the storage device: ");
const correct_answer3 = "RAM";

if  (answer3.toUpperCase() === correct_answer3) {
    console.log("you got it right");
    correct_answers +=1
} else{
    console.log("Wrong..... try agin");
}

console.log("you got"  , correct_answers  ,  "correctly");
