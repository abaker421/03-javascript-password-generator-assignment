//Variables

// Assignment Code
var generateBtn = document.querySelector("#generate");

//characters used to generate password

 var lowerChar= 'abcdefghijklmnopqrstuvwxyz'
 var upperChar= lowerChar.toUpperCase()
 var numChar=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
 var specialChar=['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':',',','.','<','>','/','?','"'] 
 var charType=[] //blank array, push char types when confirmed into this array, use this array to pull characters from when generating password

 //Functions

//creates prompt to enter password length
 function getPasswordLength() {
  var length= 0
  length= parseInt(
  prompt("Enter the length of the password: \n(Note: Must be between 8 and 128 characters)")) //converts the string to a numeric value so it can be used in the if statement
  alert("You have chosen "+length+" characters.")
  if (length<8 || length>128 || isNaN(length)) {
    alert("Must be between 8 and 128 characters and use only numbers") //if less than 8 or more than 128 is entered, alerts the user and restarts the function
    return getPasswordLength()
 }
 return length
}

//set which char types are included, use char variables
 function getCharTypes() {
  var lower= confirm('Use lowercase letters?')
  var upper= confirm('Use uppercase letters?')
  var num= confirm('Include numeric characters?')
  var spec= confirm('Include special characters?')

  charType=[]
 
  if (lower) {
   charType= charType.concat(lowerChar.split(''))
   alert("You have chosen to include lower case letters")//displays message if chosen
  } //should add lowerChar values to the charType array

  if (upper) {
   charType= charType.concat(upperChar.split(''))
   alert("You have chosen to include upper case letters")
  }

  if (num) {
   charType= charType.concat(numChar)
   alert("You have chosen to include numeric characters")
  }

  if (spec) {
   charType= charType.concat(specialChar)
   alert("You have chosen to include special characters")
  }

  if (charType.length === 0) {
    alert("At least one option must be selected")
    return getCharTypes()
  } //if none selected, will make user select again
 }

//function incorporating previous 2 functions and generates password based off their criteria
 function generatePassword() {
  var passLength= getPasswordLength()
  getCharTypes()
  var password= "" //blank value to be filled and display as the generated password
  
  while (password.length<passLength) {
    var randomChar= charType[Math.floor(Math.random()*charType.length)] //pulls random character from charType array
    password+=randomChar
  } //adds a random character to the password variable until the length is equal to the user selected amount from getPasswordLength
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);