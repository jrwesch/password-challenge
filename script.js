
/* 
initialize variables for possible characters
used method of mapping array for the letters so I didin't have to type out every single letter
*/

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "~"];
var characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

