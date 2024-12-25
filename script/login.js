// Select Element
const register = document.getElementById("signup-form");
const login = document.getElementById("login-form");

// Signup
register.addEventListener("submit", function (event) {
  event.preventDefault();

  const signupUserName = document.getElementById("signup-user-name").value;
  const signupPassword = document.getElementById("signup-password").value;

  if (signupUserName.trim() !== "" && signupPassword.trim() !== "") {
    // Save to localStorage
    localStorage.setItem("userName", signupUserName);
    localStorage.setItem("password", signupPassword);
    alert("Account created successfully!");
  } else {
    alert("Please fill out all fields.");
  }
});

// Login
login.addEventListener("submit", function (event) {
  event.preventDefault();

  const loginUserName = document.getElementById("user-name").value;
  const loginPassword = document.getElementById("password").value;

  // Get values from local storage
  const storedUserName = localStorage.getItem("userName");
  const storedPassword = localStorage.getItem("password");

  if (loginUserName === storedUserName && loginPassword === storedPassword) {
    alert("Logged in successfully!");
  } else {
    alert("The username or password is incorrect.");
  }
});
