// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
let lengthValue = 0;
let lowerValue = 0;
let upperValue = 0;
let numValue = 0;
let specialValue = 0;

// let lower = prompt('Would you like lowercase? enter y or n');
// let upper = prompt('Would you like uppercase? enter y or n');

function getPasswordOptions() {
  let length = prompt('Please select a Password length between 10 & 64?');
  if (length >= 10 && length <= 64){
    lengthValue = length;
    let lower = prompt('Would you like lowercase? enter y or n');
    lowerValue = lower;
  } else {
    let length = prompt('Please select a Password length between 10 & 64?');
  };
  if (lowerValue === 'y' || lowerValue === 'n') {
    let upper = prompt('Would you like uppercase? enter y or n');
    upperValue = upper;
   } else {
      let lower = prompt('Would you like lowercase? enter y or n');
   };
    if (upperValue === 'y' || upperValue === 'n') {
    let numeric = prompt('Would you like numbers? enter y or n');
    numValue = numeric;
    } else {
      let upper = prompt('Would you like uppercase? enter y or n');
    };
  if (numValue === 'y' || numValue === 'n') {
    let special = prompt('Would you like special characters? enter y or n');
    specialValue = special;
  } else {
    let numeric = prompt('Would you like numbers? enter y or n');
  };
  if (specialValue === 'y' || specialValue === 'n') {
    specialValue = special;
  } else {
    let special = prompt('Would you like special characters? enter y or n');
}};


function test (){
console.log(lengthValue);
console.log(lowerValue);
console.log(upperValue);
console.log(numValue);
console.log(specialValue);
}

// Function for getting a random element from an array

  // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues

function getRandom(arr) {
// get a random item from Array

}

// Function to generate password with user input
function generatePassword() {
// passwordArray = [];
//   while passwordArray <= lengthValue {
//     if value variable === y {
//       do getRandom(relevantArr)
//     }
// push to passwordArray;
// return passwordArray

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  test ();
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

