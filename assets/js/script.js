// Assignment Code
var generateBtn = document.querySelector("#generate");
// Possible character inputs for password
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%&'()*+,-./";
var char = "";
// Write password to the #password input
function generatePassword() {
  var password = "";
  // Prompts user to choose a password length
  var passwordLength = prompt(
    "Choose a password length between 8 and 128 characters"
  );
  // If password length is not in the given range an alert will show
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    passwordLength = prompt(
      "Choose a password length between 8 and 128 characters"
    );
  }
  // Options for what characters the user would like included in the password
  var charLower = confirm(
    "Press OK if you would like your password to contain lowercase letters."
  );
  var charUpper = confirm(
    "Press OK if you would like your password to contain uppercase letters."
  );
  var charNum = confirm(
    "Press OK if you would like your password to contain numbers."
  );
  var charSpec = confirm(
    "Press OK if you would like your password to contain special characters."
  );
  // Adds the chosen charcters
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
  // Alert will show if no character type is selected
  if (char == 0) {
    alert("You must select a character type!");
  }
  // Generates a string of random characters
  for (let i = 0; i < passwordLength; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
