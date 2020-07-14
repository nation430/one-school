let email = document.forms["form"]["email"];
let password = document.forms["form"]["password"];

let email_error = document.getElementById("email_error");
let pass_error = document.getElementById("pass_error");

email.addEventListener("keyup", email_verify);
password.addEventListener("keyup", pass_verify);

function validated() {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }

  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}

function email_verify() {
  if (email.value.length >= 8) {
    email.style.border = "1px solid green";
    email_error.style.display = "none";
    return true;
  }
}

function pass_verify() {
  if (password.value.length >= 5) {
    password.style.border = "1px solid green";
    pass_error.style.display = "none";
    return true;
  }
}
