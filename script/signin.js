function validateForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  removeMessage();
  let valid = true;

  if (email.value.length == 0) {
    email.className = "error";
    email.nextElementSibling.innerHTML = "Email can't be blank";
    valid = false;
  }

  if (password.value.length < 6) {
    password.className = "error";
    password.nextElementSibling.innerHTML = "Password cannot be less than 6";
    valid = false;
  }

  if (valid) alert("Submitted Successfully");
  return valid;
}

function removeMessage() {
  let errorinput = document.querySelectorAll(".error");
  [].forEach.call(errorinput, function (el) {
    el.classList.remove("wrong-input");
  });

  let errorpara = document.querySelectorAll(".error");
  [].forEach.call(errorinput, function (el) {
    el.innerHTML = "";
  });
}
