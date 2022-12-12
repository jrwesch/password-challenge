var symbols = ["!", "@", "#", "$", "%", "&", "*", "~"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

/* 
1. prompt user for password criteria:
    a. password length between 8 and 128
    b. lowercase, uppercase, numbers, special characters
    c. includes validation if input is outside of parameters
*/

var inputLength = prompt("Choose a password length between 8 and 128 characters");
    while (inputLength < 8 || inputLength > 128) {
        alert("Password length must be between 8 and 128");
        inputLength = prompt("Please choose a password length between 8 and 128");
    }
var confirmSymbols = confirm("Click OK to confirm if you would like to include special characters");
var confirmNumbers = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmLowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmUppercase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
// Loop if answer is outside the parameters  

    while (confirmUppercase === false && confirmLowercase === false && confirmSymbols === false && confirmNumbers === false) {
        alert("You must choose at least one parameter");
        var confirmSymbols = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumbers = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowercase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUppercase = confirm("Click OK to confirm if you would like to include uppercase characters"); 
    }

console.log(inputLength,confirmSymbols,confirmNumbers,confirmLowercase,confirmUppercase);

function createPassword(/*inputLength, confirmNumericCharacter, confirmNumericCharacter, confirmLowerCase, confirmUpperCase*/) {
    const availableCharacters = [
        ...(confirmSymbols ? symbols : []),
        ...(confirmNumbers ? numbers :[]),
        ...(confirmLowercase ? lowercaseLetters : []),
        ...(confirmUppercase ? uppercaseLetters : [])
    ];
    
/* 
check if availableCharacters is correct:
console.log(availableCharacters); 
*/

let password = " ";

for (let i = 0; i < inputLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
}
    return password;
}

// generate password based on criteria

var generateBtn = document.querySelector("#generate");

function generatePassword() {
    
// check to see that button works: console.log("Hey! You clicked the button.");

    return createPassword();
}

// write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
