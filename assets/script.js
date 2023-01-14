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

// Global variables logging prompt answers
var lengthValue = 0;
var lowerValue = 0;
var upperValue = 0;
var numValue = 0;
var specialValue = 0;

// Function to prompt user for password options
function getPasswordOptions() {
    var length = prompt('Please select a Password length between 10 & 64!');
  if (length >= 10 && length <= 64){
    lengthValue = length;
    var lower = prompt('Would you like lowercase? enter y or n');
    lowerValue = lower;
  } else {
    alert('WARNING! if you did not enter prompt values as requested your password will not be generated correctly! Please refresh and restart if so');
   };
  if (lowerValue === 'y' || lowerValue === 'n') {
    var upper = prompt('Would you like uppercase? enter y or n');
    upperValue = upper;
   } else {
    alert('WARNING! if you did not enter prompt values as requested your password will not be generated correctly! Please refresh and restart if so');
   };
    if (upperValue === 'y' || upperValue === 'n') {
    var numeric = prompt('Would you like numbers? enter y or n');
    numValue = numeric;
    } else {
      alert('WARNING! if you did not enter prompt values as requested your password will not be generated correctly! Please refresh and restart if so');
    };
  if (numValue === 'y' || numValue === 'n') {
    var special = prompt('Would you like special characters? enter y or n');
    specialValue = special;
  } else {
    alert('WARNING! if you did not enter prompt values as requested your password will not be generated correctly! Please refresh and restart if so');
}
alert('WARNING! if you did not enter prompt values as requested your password will not be generated correctly! Please refresh and restart if so');
};

// Function for getting a random element from an array
  function getRandom(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomNumber];
    return randomItem;
};

// Function to generate password with user input
let passwordArray = [];
function generatePassword() {
do {
  if (lowerValue === 'y' && passwordArray.length < lengthValue){
passwordArray.push(getRandom(lowerCasedCharacters));  } 
  if (upperValue === 'y' && passwordArray.length < lengthValue){
passwordArray.push(getRandom(upperCasedCharacters));  } 
if (numValue === 'y' && passwordArray.length < lengthValue){
  passwordArray.push(getRandom(numericCharacters));  } 
  if (specialValue === 'y' && passwordArray.length < lengthValue){
    passwordArray.push(getRandom(specialCharacters));  } 
} while (passwordArray.length < lengthValue);
// Below code randomises the built array so we do not get the prompted values in order of selection
passwordArray.sort(() => Math.random() - 0.5);

return passwordArray.join('');
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  passwordArray = [];
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

