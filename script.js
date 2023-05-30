document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate username and password
  if (username === "admin" && password === "password") {
    alert("Login successful");
  } else {
    alert("Invalid username or password");
  }
});













