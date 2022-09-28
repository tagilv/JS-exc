//VARIABLES EXCERCISES:
//#region

// EXCERCISE 1
let myName = "Viktor";
console.log("Printing my name>>", myName);

// EXCERCISE 2
let age = 33;
console.log("Printing my age>>", age);

// EXCERCISE 3
let juliaAge = 32;
let ageDiff = age - juliaAge;
console.log("Printing age difference between Viktor and Julia>>", ageDiff);

//#endregion

//CONDITIONALS EXCERCISES:
//#region

//EXCERCISE 4
age = 33;
let otherPersonAge = 21;

if (age > otherPersonAge) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}

// EXCERCISE 5
age = 33;
juliaAge = 32;

if (juliaAge > age) {
  console.log("Julia is older than you");
} else if (age > juliaAge) {
  console.log("Julia is younger than you");
} else {
  console.log("You have the same age as Julia");
}

//#endregion

//#SORTING AND LOOPING ARRAYS EXCERCISES
//#region

// EXCERCISE 6

// 1. Create an array
let classArray = [
  "Viktor",
  "Jacobo",
  "Dickson",
  "Sebastian",
  "Heron",
  "Silvia",
];

//2 Sort Alphabeticaly and put in new variable
let sortedArray = classArray.sort();

//3. Print first element in sortedArray
console.log("First Item>>", sortedArray[0]);

//4. Print last element in sortedArray
const lastItem = classArray[classArray.length - 1];
console.log("Last Item>>", lastItem);

//5. Print all elements (Use a for loop)
for (i = 0; i < classArray.length; i++) {
  console.log("Sorted list>>", classArray[i]);
}

// EXCERCISE 7

// 1. Create array with all student ages

const ageArray = [22, 25, 26, 27, 28, 29];

// 2. Itterate over array using a While loop and print every student's age in the console

let i = 0;
while (i < ageArray.length) {
  i++;
  // if (ageArray[i] % 2 == 0)
  // console.log(ageArray[i])
  // else
  console.log(ageArray[i]);
}

// 3. Add condition to print only uneven numbers in while loop. Not possible inside the while to creating a for loop with the condition to only print the even numbers

const ageArray = [22, 25, 26, 27, 28, 29];

for (let i = 0; i < ageArray.length; i++) {
  if (ageArray[i] % 2 == 0) {
    console.log("Even numbers>>", ageArray[i]);
  }
}

//#endregion

//#FUNCTIONS THAT USES ARRAYS EXCERCISES
//#region

// EXCERCISE 9

// 1. Write function that receives an array as parameter and prints the biggest number

// Usign for loop - VERSION 1

let numbersArray = [4, 5, 200, 1, 15, 18];

function printNumber(array) {
  let max = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      // console.log(max);
    }
  }
  return max;
}

let myMaxNumber = printNumber(numbersArray);
console.log(myMaxNumber);

// QUESTION 2: Why does it matter if if I say max = array[i]; OR = array[i] = max:

// EXCERCISE 9

let numbersArray = [4, 5, 200, 1, 15, 18];
let min = numbersArray[0];

function printNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      // console.log(min);
    }
  }
  return min;
}

let myMinNumber = printNumber(numbersArray);
console.log(myMinNumber);

// EXCERCISE 10

// 1. Write funtion that recives two parameters, an array and an index

// 2. Function should print value of element at a given position, given array X and index XX the function will print 6

var array = [3, 6, 67, 6, 23, 11, 100, 8];
var index = 1;

function printIndex(givenArray, givenIndex) {
  return givenArray[givenIndex];
}

let myArrayAndIndex = printIndex(array, index);
console.log(myArrayAndIndex);

// EXCERCISE 11

// 1. Write function that recices an array and print the values that repeat

// OPTION 1
var givenArray = [3, 6, 67, 6, 23, 11, 11, 11, 11];

function printduplicates(array) {
  var duplicates = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        if (!duplicates.includes(array[i])) {
          // console.log(array[i]);
          duplicates.push(array[i]);
        }
      }
    }
  }
  return duplicates;
}
let myDuplicates = printduplicates(givenArray);
console.log(myDuplicates);
// NOTE: Since we are using let the variable is only available in the scope of function
// NOTE: If you to clean from duplicates instead, use array.splice(j, 1);

// OPTION 2 (wont work if more than 2 doubles)
var givenArray = [3, 6, 67, 6, 23, 11, 11];

function printduplicates(array) {
  const duplicates = [];
  const compare = [];

  for (let num of array) {
    if (!compare.includes(num)) {
      compare.push(num);
    } else {
      duplicates.push(num);
    }
  }
  return duplicates;
}

let myduplicates = printduplicates(givenArray);
console.log(myduplicates);

Do not use -  No forEach, filter, map

// EXCERCISE 12

// OPTION 1

// 1. Function that joins elements of an array to a string

// # Loop thru the array and concatenate the array value into string variable

var myColor = ["Red", "Green", "White", "Black"];

let myColorString = "";

function stringManipulator(myArray) {
  for (let i = 0; i < myColor.length; i++) {
    myColorString += myColor[i];
    if (i < myColor.length - 1) {
      myColorString += ", ";
    }
  }
}

let resultingString = stringManipulator(myColor);
console.log(myColorString);

// OPTION 2

var myColor = ["Red", "Green", "White", "Black"];

let myColorString = "";
function stringManipulator(myArray) {
  for (let i = 0; i < myColor.length; i++) {
    myColorString = myColor.join(", ");
  }
}

let resultingString = stringManipulator(myColor);
console.log(myColorString);

//#endregion

//JAVASCRIPT STRING
//#region

// EXCERCISE 13

// Function that reverses a number

let originalNumber = new Number(-00032443, 55);
//NOTE: Need to call JS library new Number to let JS know its a number (in order for it to be able to handle zeros in the begining). Once that is done you pass the number in the brackets new Number (here) to initialize the number

function numberReverse(number) {
  //NOTE: Create the variables you need for your function inside the function avd variables you need to call the function outside the funnction
  let reverseNumber = number.toString().split("").reverse().join("");
  // console.log(reverseNumber);

  let convertedNumber = parseFloat(reverseNumber);
  // console.log(convertedNumber);

  let signNumber = convertedNumber * Math.sign(number);

  return signNumber;
}

let reversedNumber = numberReverse(originalNumber);

console.log("Original number output >>", typeof originalNumber);
console.log(originalNumber);

console.log("Reversed number type of object>>", typeof reversedNumber);
console.log(reversedNumber);

//NOTE: Flot is a number that can be expressed in more bits than integer (about how things get allocated to memory)
//NOTE: Integer would not work as can handle negative numbers
//NOTE: Do not create a varibale if you are going to overwrite it immediatelly

// EXCERCISE 14

//Write a JavaScript function that returns a string in alphabetical order

let originalString = "webmaster";

function orderAlphabetically(input) {
  let createdArray = input.split("");
  let sortedArray = createdArray.sort();
  let sortedArrayJoined = sortedArray.join("");
  return sortedArrayJoined;
}

let result = orderAlphabetically(originalString);
console.log("Original string>>", originalString);
console.log("Reversed string in alphabetical order>>", result);

// EXTRA EXCERCISE - Reverse a string with looping

let originalString = "Viktor";
let newString = "";

function stringReversal(string) {
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

let finalString = stringReversal(originalString);
console.log(finalString);

// EXTRA EXCERCISE - Needs further work

let givenString = "webmaster";

function orderAlphabetically(input) {
  let unSortedArray = input.split("");
  console.log("unSortedArray>>", unSortedArray);

  let sortedLettersArray = [];
  for (let i = 0; i < input.length; i++) {
    // console.log("outerloop", input[i]);
    for (let j = 0; j < input.length; j++) {
      // console.log("innerLoop", input[j]);
      if (unSortedArray[i] < unSortedArray[j]) {
        // if (!sortedLettersArray.includes(unSortedArray[i]))
        sortedLettersArray.push(unSortedArray[i]);
      }
    }
  }
  console.log("sortedLettersArray", sortedLettersArray);
  return unSortedArray.join("");
}

let result = orderAlphabetically(givenString);
console.log(result);

// EXCERCISE 15

// 1. Function that converts first letter of each word to uppercase

let exampleString = "prince of persia";

function stringConversion(string) {
  let createdArray = string.split(" ");
  // console.log(newArray);
  for (let i = 0; i < createdArray.length; i++) {
    createdArray[i] =
      createdArray[i].charAt(0).toUpperCase() + createdArray[i].slice(1);
  }
  return createdArray.join(" ");
}

let newString = stringConversion(exampleString);
console.log(newString);

//QUESTION: I cannot count the words in string?

// EXCERCISE 16

//1. Write a JavaScript function that finds the longest word in a phrase
// Use split(" ") to turn string into array of strings. The " " is to mark the separator between each word, ie how to split it up in strings)

let sentence = "five or 1000000";

function findLongestWord(input) {
  var splitString = input.split(" ");
  var longestWord = "";
  // console.log(splitString[0].length);
  // console.log(splitString);
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > longestWord.length) {
      longestWord = splitString[i];
    }
  }
  return longestWord;
}

let longestWord = findLongestWord(sentence);
console.log("Original Sentence>>", sentence);
console.log("Longest word>>", longestWord);

//NOTE: .length on an array gives you the number of elements, on a string it gives you the number of characters in the string

//#endregion

//EXTRA FUNCTION EXCERCISES
//#region

// EXCERCISE 19

// Write function that returns nothing and has no parameters. Should console.log/print the multiplication of the two numbers

function noInputs() {
  console.log(2 * 5);
}
noInputs();
NOTE: No return statement inside the function, so does not return anything

// EXCERCISE 20
// Write function that returns nothing and has no parameters. Should console.log/print the multip of two numbers. Should print the result in your main program?

function noInputs() {
  return 2 * 5;
}
let myOutput = noInputs();
console.log(myOutput);

// EXCERCISE 21
// Function with two parameters. These should be multiplied. Function should return the result

function noInputs(a, b) {
  let result = a * b;
  return result;
}

let myOutout = noInputs(5, 5);
console.log(myOutout);

// EXCERCISE 22
// 1. Function that determines the type of a the triangle given the length of its three sides

let a = 5;
let b = 10;
let c = 100;

function determineTriangle(a, b, c) {
  if (a * a + b * b > c * c || a + b > c) {
    type = "acute";
  } else if (a * a + b * b < c * c || a + c > b) {
    type = "obtuse";
  } else {
    type = "right";
  }
  return type;
}

let shape = determineTriangle(a, b, c);
console.log("The triangle is>>", shape);

// QUESTION: Do I need the 2nd condition after the ||?

// Excercise 23
// Function that takes an array as a parameter. Should Replace all 1's with a's in the array

let word = "Javascript";
function replacingNumberOne(array) {
  let createdArray = word.split("");
  // console.log(createdArray);
  for (let i = 0; i < array.length; i++) {
    if (createdArray[i] == "a") {
      createdArray[i] = createdArray[i].replace("a", 1);
    }
  }
  return createdArray;
}
// console.log(createdArray);

let modifiedString = replacingNumberOne(word);
console.log("Original word>>", modifiedString);
console.log("Modified string>>", modifiedString);

// EXCERCISE 24
// 1. Two functions
// 2. First should return the sum of all the elements of an array
// 3. Second should return smallest number in the array
// 4. Print the result in the main program

// OPTION 1 - Sum elements with "for loop"

let givenArray = [11, 12];
function sumOfArrayElements(array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
  // console.log(sum);
}

let totalNumber = sumOfArrayElements(givenArray);
console.log(totalNumber);

// QUESTION: How can I refactor so I dont start with the sum = 0

// OPTION 2 - Sum elements with "for..in loop"

let givenArray = [11, 12];
function sumOfArrayElements(array) {
  sum = 0;
  for (let i in givenArray) {
    sum = sum + array[i];
    // or sum += array[i];
  }
  return sum;
}

let totalNumber = sumOfArrayElements(givenArray);
console.log(totalNumber);

let givenArray = [11, 12, 100, 2];

function smallestArrayElement(array) {
  let smallest = array[0];
  // NOTE: Remember that you need to initiate at array[0] and not 0 for the loop to start
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
}

let lowestNumber = smallestArrayElement(givenArray);
console.log(lowestNumber);

// EXCERCISE 25
// 1. Function that find the even numbers and print add them together
// Note: Needs to return the result

let givenArray = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = 0;

function addingEvenNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    if (givenArray[i] % 2 == 0) {
      evenNumbers += givenArray[i];
    }
  }
  return evenNumbers;
}

let sumOfEvens = addingEvenNumbers(givenArray);
console.log(sumOfEvens);

// EXCERCISE 26
// 1. Function that adds even positions of array
// Note sum the numbers that are in the even index positions, so index 2,4,6 etc

let givenArray = [1, 3, 5, 8, 10, 12, 15];
let evenIndexSum = 0;
// If you wanted it as an array you would do evenIndexSum = [] and then use evenIndexSum.push(input[i])
function addingEvenIndexes(input) {
  for (let i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
      evenIndexSum += input[i];
      // QUESTION: Why doesnt the other way around work (line above)?
    }
  }
  return evenIndexSum;
}

let evenIndexes = addingEvenIndexes(givenArray);
console.log(evenIndexes);

EXCERCISE 27
1. Write function that by sending a number as paramter tells you the even numbers before it
Note: If you send 9 as parameter it should return 2,4,6,8

// OPTION 1 - Count from index 0

let givenNumber = 10;
function returnEvenNumbersComingBefore(input) {
  let evenNumbersArray = [];
  let i = input - 1;
  while (i > 0) {
    // console.log("evenNumbersArray", evenNumbersArray);

    if (i % 2 == 0) {
      evenNumbersArray.push(i);
    }
    i--;
  }
  return evenNumbersArray;
}

let evenNumbersBefore = returnEvenNumbersComingBefore(givenNumber);
console.log(evenNumbersBefore);

// OPTION 2 - Count from index - 1 backwards

let givenNumber = 10;
function returnEvenNumbersComingBefore(input) {
  let evenNumbersArray = [];
  for (let i = input - 1; i > 0; i--) {
    if (i % 2 == 0) {
      evenNumbersArray.push(i);
    }
  }
  return evenNumbersArray;
}

let evenNumbersBefore = returnEvenNumbersComingBefore(givenNumber);
console.log(evenNumbersBefore);

// OTHER:
for (let i = 1; i <= 10; i++) {
  console.log("i", i);
}

// EXCERCISE 28
// 1. Function that by sending two numbers as paramters tells you the numbers between these

let a = 3;
let b = 20;

function numbersBetween(numberA, numberB) {
  let numbersArray = [];
  for (let i = a; i < b; i++) {
    if (i % 2 !== 0) {
      numbersArray.push(i);
    }
  }
  return numbersArray;
}

let numbers = numbersBetween(a, b);
console.log(numbers);

//#endregion
