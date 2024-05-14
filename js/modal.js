document.addEventListener('DOMContentLoaded', (event) => {
  // Get the modals
  var loginModal = document.getElementById("loginModal");
  var registerModal = document.getElementById("registerModal");

  // Get the buttons that open the modals
  var loginBtn = document.querySelector(".login-section a");
  var registerBtn = document.querySelector(".register-section a");

  // Get the <span> elements that close the modals
  var loginClose = document.getElementById("loginClose");
  var registerClose = document.getElementById("registerClose");

  // When the user clicks on the button, open the modal
  loginBtn.onclick = function() {
    loginModal.style.display = "block";
  }

  registerBtn.onclick = function() {
    registerModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  loginClose.onclick = function() {
    loginModal.style.display = "none";
  }

  registerClose.onclick = function() {
    registerModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
      registerModal.style.display = "none";
    }
  }
});

// Handle login form submission
function handleLogin(event) {
  event.preventDefault();
  // Validate the form if necessary
  // Perform the login action (e.g., AJAX request)
  
  // Redirect to another page after login
  window.location.href = 'dashboard.html'; // Change this to your desired page
  return false; // Prevent the default form submission
}

// Handle register form submission
function handleRegister(event) {
  event.preventDefault();
  // Validate the form if necessary
  // Perform the registration action (e.g., AJAX request)
  
  // Redirect to another page after registration
  window.location.href = 'welcome.html'; // Change this to your desired page
  return false; // Prevent the default form submission
}
