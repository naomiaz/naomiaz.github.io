/* TO DO
1. Keyboard commands with keyCode (on keyup)
- numbers 0-9 -> keyCode 48-57 (top) || keyCode 96-105 (numpad)
- then check if it's actually a number between 0-9 (in case of different keypads)
2. DEL = 0 if var numbers is empty */

var screenDiv = document.querySelector("p.screen-content");
var numberBtn = document.querySelectorAll(".number");
var operatorBtn = document.querySelectorAll(".operator");
var equalsBtn = document.querySelector(".equals");
var clearBtn = document.querySelector(".clear");
var delBtn = document.querySelector(".delete");
var negativeBtn = document.querySelector(".negative")
var number = "";
var newNumber = "";
var operator = "";

screenDiv.innerHTML = "0";

function testNumLength(number) {
  if (number.length > 11) {
    screenDiv.innerHTML = "Error";
  }
}


//Number Buttons -> for every numberBtn click, store number value in `var number` and preview in screenDiv.innerHTML. Then call testNumLength.
for (var i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", function() {
    number += this.innerHTML; //turns 2, 5, 0, into 250
    testNumLength(number);
    screenDiv.innerHTML = number;
  });
}

//Negative/Positive (+/-) Button -> Parse string to number, multiply by -1 and parse back to string
negativeBtn.addEventListener("click", function() {
  number = amount(number) * -1;
  number = stringify(number);
  screenDiv.innerHTML = number;
  //fix NaN when var number is empty
});


//Operator Buttons -> for every operatorBtn click, store operator value in `var operator` and store already filled in number in a newNumber variable (e.g. x + x -> 2 + x) so that var number is empty.
for (var i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", function() {
    operator = this.innerHTML;
    newNumber = number;
    number = "";
    screenDiv.innerHTML = operator;
  });
}

//Equals Button -> Parse decimal string to decimal floating point (Float allows decimals, Int doesn't), perform the calculation and convert back to decimal string.
//To keep calculating, DON'T clear number and newNumber
equalsBtn.addEventListener("click", function() {
  var result;
  if (operator === "+") {
    result = amount(number) + amount(newNumber);
  } else if (operator === "-") {
    result = amount(newNumber) - amount(number);
  } else if (operator === "x") {
    result = amount(number) * amount(newNumber);
  } else if (operator === "/") {
    result = amount(newNumber) / amount(number);
  }
  //Round off the result (15 digits behind the comma) for HTML purposes
  screenDiv.innerHTML = stringify(Math.round(result * 1e15) / 1e15);
  //Store orignal result (not rounded off) in var number
  number = stringify(result);
});

//Replace comma's with dots to calculate with decimals
//Convert string to number and return number value
function amount(value) {
  value = value.replace(",", ".");
  return parseFloat(value, 10);
}

//Convert number to string
//Replace dots with comma's for HTML purposes
//Return string value
function stringify(value) {
  value = value.toString(10);
  value = value.replace(".", ",");
  return value;
}

//Clear -> set var number to empty string "" and display a 0
clearBtn.addEventListener("click", function() {
  screenDiv.innerHTML = "0";
  number = "";
});

//Delete -> delete last character of var number
delBtn.addEventListener("click", function() {
  number = number.substring(0, number.length - 1);
  screenDiv.innerHTML = number;
});

//if number.length < 1 then screenDiv = '0'