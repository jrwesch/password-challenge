
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

var inputLength = prompt("Choose a password length between 8 and 128 characters");
    while (inputLength < 8 || inputLength > 128) {
        alert("Password length must be between 8 and 128");
        inputLength = prompt("Please choose a password length between 8 and 128");
    }
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

// 2. validate the input

while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
}

// log to see what info is being stored
console.log(inputLength,confirmSpecialCharacter,confirmNumericCharacter,confirmLowerCase,confirmUpperCase);

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
