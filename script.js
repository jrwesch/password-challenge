
/* 
initialize variables for possible characters
used method of mapping array for the letters so I didin't have to type out every single letter
*/

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "~"];
var characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());


var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Hey! You clicked the button.");

// 1. prompt user for password criteria
//      a. password length between 8 and 128
//      b. lowercase, uppercase, numbers, special characters
// 2. validate the input
// 3. generate password based on criteria





    return "Generated password will go here.";
}

// write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
