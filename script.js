// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%&'()*+,-./";
var password = "";
var char ="";
// Write password to the #password input
function generatePassword() {
  var passwordLength = (prompt("Choose a password length between 8 and 128 characters"));
  
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
  }

  var charLower = confirm("Press OK if you would like your password to contain lowercase letters.");
  var charUpper = confirm("Press OK if you would like your password to contain uppercase letters.");
  var charNum = confirm("Press OK if you would like your password to contain numbers.");
  var charSpec = confirm("Press OK if you would like your password to contain special characters.");
  
  if (charLower === true) {
    char += lowerCaseLetters;
  }

  if (charUpper === true) {
    char += upperCaseLetters;
  }

  if (charNum === true) {
    char += numbers;
  }

  if (charSpec === true) {
    char += special;
  }



  for (let i = 0; i < passwordLength.length; i++) {
    password += char.charAt(
      Math.floor(Math.random() * char.length)
    );

  }

  return password;
};

  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
