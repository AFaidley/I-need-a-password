// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%&'()*+,-./";
var password = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");

  while (passwordLength < 8 || passwordLength > 128) {
    

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
