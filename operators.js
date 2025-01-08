console.log(5+5);
console.log(100+1000);
console.log(10+"100");
console.log(10+20+"hi");
console.log(10+"hi"+20);



console.log(10-5);
console.log("10"-5);
console.log("10"-"5");




console.log(10*5);
console.log("10"*5);
console.log("10"*"5");
 
console.log(2**5);

// increment
let a = 10;
console.log(a);
console.log(a++);
console.log(++a)
console.log(a);

// decrement
console.log(a);
console.log(a--);
console.log(--a);
console.log(a);

// relational operators
console.log(10 == 10);
console.log(10 == "10");
console.log(10 === "10");
 

console.log(10 != 10);
console.log(10 != "10");
 

console.log(10 !==10);
console.log(10 !=="10");

// logical operators
console.log((10>5 ) &&  (10>5));
console.log(10 === "10" || 10 === 10); 
console.log(!(10 === "10"));
// decision making
//if
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
// if else


if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
//else ...if
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
//switch
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("Today is not Monday, Tuesday, or Wednesday.");
}
// ternary operator

let message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message);