// Assignment Code
var charset ="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()?/<>:;-=-+{}[];
var passwordLength=8
var password="";
for(var i=0;i<passwordLength;i++){
  var randonnum = Math.floor(Math.random() *charset.lenght);
  password += charset.substring(randomnum, random+1); 
}
document.getElementById("input").vaule=password;



var generateBtn = document.querySelector("#generate");

};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const password = generateBtn()
