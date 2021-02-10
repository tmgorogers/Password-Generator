// Assignment Code
var btn = document.querySelector("#generate");

var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8 characters.", "How many characters would you like your password to be?" ));

var characters = "";

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

if (uppers) characters += "QWERTYUIOPASDFGHJKLZXCVBNM";
if (lowers) characters += "qwertyuiopasdfghjklzxcvbnm";
if (numbers) characters += "1234567890";
if (symbols) characters += "!@#$%^&*(){}[]=<>/,.";


function generateNewPassword(l, char) {

  var password = "";

  for (var i = 0; i < l; i++){
    password += char.charAt(Math.floor(Math.random() * char.length))
  }

  return password
};

// Write password to the #password input
function writePassword() {
  var password = generateNewPassword(length, characters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
btn.addEventListener("click", writePassword);

