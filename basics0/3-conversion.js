let userInput = "saugat";

console.log(typeof userInput);
//console.log(typeof(userInput));

let valueInNumber = Number(userInput);
console.log(valueInNumber); //NaN because saugat lai number ma convert garna mildaina
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "saugat";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "saugat" => true

let myNumber = 42;

let stringNumber = String(myNumber);
console.log(myNumber, stringNumber);
// console.log(typeof stringNumber);
//42=>'42'
// *********************** Operations ***********************

let initialValue = 5;
let negValue = -initialValue;
let isTure = true;
console.log(!isTure);
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
console.log(2 ** 3);
console.log(2 / 3);
const input = 11; //= value assign garne
console.log(input % 2); // moudulus

if (input % 2 === 0) {
  //=== means type and value both check garxa == value check garcha
  console.log("Even number");
} else {
}

// 10/2 => 5 remainder 0
//10/3 => 3 remainder 1

let str1 = "namaste";
let str2 = " saugat";

let str3 = str1 + str2;
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(2 + 1 + "1" + 2 + 1);
console.log(((3 + 4) * 5) % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
//single value to multiple variable assign garna sakinxa
let scoreCounter = 200;
++scoreCounter;
--scoreCounter;
console.log(scoreCounter);
