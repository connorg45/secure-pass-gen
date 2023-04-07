// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password based on user input
function generatePassword() {
  // Prompt user for password criteria
  var passwordLength = parseInt(prompt("How many characters should the password be? (Please enter a number between 8 and 128)"));

  // Checks if number is between 8 and 128
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid input. Please enter a number between 8 and 128."));
  }

  var useLowercase = confirm("Do you want to use lowercase letters?");
  var useUppercase = confirm("Do you want to use uppercase letters?");
  var useNumeric = confirm("Do you want to use numbers?");
  var useSpecial = confirm("Do you want to use special characters?");

  // Checks if user hit cancel on all prompts
  while (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type.");
    useLowercase = confirm("Do you want to use lowercase letters?");
    useUppercase = confirm("Do you want to use uppercase letters?");
    useNumeric = confirm("Do you want to use numbers?");
    useSpecial = confirm("Do you want to use special characters?");
  }

  // Generate password based on selected criteria
  var charset = "";
  var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharset = "0123456789";
  var specialCharset = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  if (useLowercase) {
    charset += lowercaseCharset;
  }
  if (useUppercase) {
    charset += uppercaseCharset;
  }
  if (useNumeric) {
    charset += numericCharset;
  }
  if (useSpecial) {
    charset += specialCharset;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);