"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.querySelector(".form button");

//
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid !");
  }
}
// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//  show input success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// UpperCase factor
function getUpperCase(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check required function
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getUpperCase(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// check Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getUpperCase(input)} must be greater than ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getUpperCase(input)} must be less than ${max} characters `
    );
  } else {
    showSuccess(input);
  }
}

// check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, " Passwords do not match !");
  }
}

//Event Listeners - MODREN WAY
button.addEventListener("click", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 5, 20);
  isValidEmail(email);
  checkPasswordsMatch(password, password2);
});

//Event Listeners - OLD WAY
// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (username.value === "") {
//     showError(username, "User is required !");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "Email is required !");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Email is not valid");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is required !");
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Password confirmation is required !");
//   } else {
//     showSuccess(password2);
//   }
// });
