// SELECTING ALL TEXT ELEMENTS
let name = document.forms["vform"]["name"];
let email = document.forms["vform"]["email"];
let password = document.forms["vform"]["password"];
let password_confirm = document.forms["vform"]["password_confirm"];

// SELECTING ALL ERROR DISPLAY ELEMENTS
let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let password_error = document.getElementById("password_error");

// SETTING ALL EVENT LISTENERS
name.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);

// validation function
function Validate() {
  // validate name
  if (name.value == "") {
    name.style.border = "1px solid red";
    document.getElementById("name_div").style.color = "red";
    name_error.textContent = "name is required";
    name.focus();
    return false;
  }
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById("email_div").style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate password
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById("password_div").style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // check if the two passwords match
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById("pass_confirm_div").style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
}
// event handler functions

function nameVerify() {
  if (name.value != "") {
    name.style.border = "1px solid #5e6e66";
    document.getElementById("name_div").style.color = "#5e6e66";
    name_error.innerHTML = "";
    return true;
  }
}

function emailVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById("email_div").style.color = "#5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    password.style.border = "1px solid #5e6e66";
    document.getElementById("pass_confirm_div").style.color = "#5e6e66";
    document.getElementById("password_div").style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }
  if (password.value === password_confirm.value) {
    password.style.border = "1px solid #5e6e66";
    document.getElementById("pass_confirm_div").style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }
  if (valid) alert("Submitted Successfully");
  return valid;
}
