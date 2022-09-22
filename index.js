{
  document.getElementById("register-button").addEventListener("click", () => {
    // alert()
    registration.style.display = "block";
    login1.style.display = "none";
  });

  document.getElementById("login-button").addEventListener("click", () => {
    // alert()
    registration.style.display = "none";
    login1.style.display = "block";
  });
}

const DB_USERS = [];

//   const resetSignupFields = () => {
// 	  document.getElementById('signup-first-name').value = ''
// 	  document.getElementById('signup-last-name').value = ''
// 	  document.getElementById('signup-phone').value = ''
// 	  document.getElementById('signup-email').value = ''
// 	  document.getElementById('signup-password').value = ''
// 	  document.getElementById('signup-confirm-password').value = ''
//   }

const resetLoginFields = () => {
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
};

const signup = () => {
  let firstName = document.getElementById("signup-first-name").value;
  let lastName = document.getElementById("signup-last-name").value;
  let phone = document.getElementById("signup-phone").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let confirmPassword = document.getElementById(
    "signup-confirm-password"
  ).value;
  let tnCInput = document.getElementById("tnC").checked;

  let error = false;

  //   console.log(password)

  let signupSuccessAlert = document.getElementById("signup-alert-success");
  //let signupFailureAlert = document.getElementById('signup-alert-failure')  //Validation failure

  if (firstName) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-valid").style.display = "none";
    document.getElementById("first-name-invalid").style.display = "block";
    error = true;
  }

  if (lastName) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-valid").style.display = "none";
    document.getElementById("last-name-invalid").style.display = "block";
    error = true;
  }

  if (
    email &&
    email.includes("@") &&
    email.includes(".") &&
    email.lastIndexOf(".") <= email.length - 3 &&
    email.indexOf("@") !== 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
    error = true;
  }

  if (phone && phone.length === 10 && parseInt(phone)) {
    document.getElementById("phone-valid").style.display = "block";
    document.getElementById("phone-invalid").style.display = "none";
  } else {
    document.getElementById("phone-invalid").style.display = "block";
    document.getElementById("phone-valid").style.display = "none";
    error = true;
  }

  if (confirmPassword && password === confirmPassword) {
    document.getElementById("valid-confirmpassword").style.display = "block";
    document.getElementById("invalid-confirmpassword").style.display = "none";
  } else {
    document.getElementById("valid-confirmpassword").style.display = "none";
    document.getElementById("invalid-confirmpassword").style.display = "block";
    error = true;
  }

  if (tnCInput) {
    document.getElementById("tnC-invalid").style.display = "none";
  } else {
    document.getElementById("tnC-invalid").style.display = "block";
    error = true;
  }

  if (!error) {
    document.getElementById("signup-first-name").value = "";
    document.getElementById("signup-last-name").value = "";
    document.getElementById("signup-phone").value = "";
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";
    document.getElementById("signup-confirm-password").value = "";

    document.getElementById("first-name-valid").style.display = "none";
    document.getElementById("last-name-valid").style.display = "none";
    document.getElementById("email-valid").style.display = "none";
    document.getElementById("phone-valid").style.display = "none";
    document.getElementById("valid-confirmpassword").style.display = "none";
    document.getElementById("tnC-invalid").style.display = "none";

    signupSuccessAlert.style.display = "block";
  }

  let userDetails = {
    firstName,
    lastName,
    email,
    password,
    phone,
  };

  DB_USERS.push(userDetails);
};

const login = () => {
  let enteredEmail = document.getElementById("login-email").value;
  let enteredPassword = document.getElementById("login-password").value;
  console.log(enteredPassword);

  let loginSuccessAlert = document.getElementById("login-alert-success");
  let loginFailureAlert = document.getElementById("login-alert-failure");

  let currentUser = DB_USERS.find(
    (user) => user.email === enteredEmail && user.password === enteredPassword
  );
  if (currentUser) {
    // loginSuccessAlert.style.display = "block";
    // loginFailureAlert.style.display = "none";
    alert("Access Granted");
  } else {
    // loginFailureAlert.style.display = "block";
    // loginSuccessAlert.style.display = "none";
    alert("Access Denied");
  }

  resetLoginFields();
};
