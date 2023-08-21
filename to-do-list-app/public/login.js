document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
  
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Here is being performed authentication or validation login
      // Checks if the username and password match your records
      if (username === "teste" && password === "teste123") {
        // Redirect to the main To-Do List page
        window.location.href = "index.html"; 
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  