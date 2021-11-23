
//sub menu
var dropdown = document.getElementsByClassName("c-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//form register
var emailInput = document.getElementById('email');
var emailValidInput = document.getElementById('validEmail')

var fullNameInput = document.getElementById('fullName');
var fullNameValidInput = document.getElementById('validFullName')

var passwordlInput = document.getElementById('password');
var passwordValidInput = document.getElementById('validPassword')

var confirmPasswordInput = document.getElementById('confirmPassword');
var confirmPasswordValidInput = document.getElementById('validConfirmPassword')

var submitButton = document.getElementById('register')
var signUpForm = document.getElementById('signUpForm')

var checkRemember = document.getElementById('rememberMe')

const ERROR = {
  INVALID_EMAIL : 'Invalid email address',
  EMPTY : 'Can not empty',
  MATCH_PASSWORD: 'Password do not match',
  LOGIN_FAILSE: 'Email or Password incorrect'
};

//Show valid input
function showHideValidInput(input, errorMessage, isValid){
  if(isValid){
    input.style.display = 'block';
    input.innerHTML = errorMessage;
  } else {
    input.style.display = 'none';
    input.innerHTML = '';
  }

  return isValid
}
//check valid email
function checkValidEmail(email){
  var valid = false;

  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email.match(emailFormat)){
    valid = true;
  }
  return valid;
}

//Check empty
function checkValidEmpty(inputValue){
  var valid = false;
  if(inputValue.length == 0){
    valid = true;
  }
  return valid;
}

//check match
function checkValidMatch(inputValueFirst, inputValueSecond){
  var valid = false;
  if(inputValueFirst !== inputValueSecond && inputValueSecond !== ' '){
    valid = true;
  }  
  return valid;
}

//check valid form
function checkValidForm(){
  var valid = false;
   //valid full name
   if(showHideValidInput(fullNameValidInput, ERROR.EMPTY, checkValidEmpty(fullNameInput.value))){
     valid = true;
   }

   //valid email
   if(showHideValidInput(emailValidInput, ERROR.INVALID_EMAIL, checkValidEmail(emailInput.value))){
     valid = true;
   };
 
   //valid password
   if(showHideValidInput(passwordValidInput, ERROR.EMPTY, checkValidEmpty(passwordlInput.value))){
     valid = true;
   }
 
   //valid confirm password
   if(showHideValidInput(confirmPasswordValidInput, ERROR.EMPTY, checkValidEmpty(confirmPasswordInput.value))){
     valid = true;
   }
   if(showHideValidInput(confirmPasswordValidInput, ERROR.MATCH_PASSWORD, checkValidMatch(passwordlInput.value, confirmPasswordInput.value))){
     valid = true;
   }

   return valid;
}

// function sign up
function signUp(){
  if(!checkValidForm()){
    //sign up susscessful
    //store into localStorage
    localStorage.setItem('emailUser', emailInput.value)
    localStorage.setItem('password',passwordlInput.value)
    localStorage.setItem('isRemember', checkRemember.checked)
    localStorage.setItem('fullName', fullNameInput.value)

    location.href = '../pages/index.html'
  }
}

function signIn(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value
  var rememberMe = document.getElementById('remember').checked

  var loginMessage = document.getElementById('loginMessage')

  if(email == localStorage.getItem('emailUser') && password == localStorage.getItem('password')){
    if(rememberMe){
      localStorage.setItem('Isremember',rememberMe)
    }
    location.href = '../pages/index.html';
  }else{
    showHideValidInput(loginMessage, ERROR.LOGIN_FAILSE, true)
  }
}

//form index.html
var userName = document.getElementById("fullName")

//set localStorage
debugger
userName.innerHTML = 'Welcome, ' + localStorage.getItem('fullName')
console.log('aaaa')



