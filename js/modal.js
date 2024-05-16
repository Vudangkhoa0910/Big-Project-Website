document.addEventListener('DOMContentLoaded', (event) => {
  // Get the modals
  var registerModal = document.getElementById("registerModal");

  // Get the button that opens the modal
  var registerBtn = document.querySelector(".register-section a");

  // Get the <span> element that closes the modal
  var registerClose = document.getElementById("registerClose");

  // When the user clicks on the button, open the modal
  registerBtn.onclick = function() {
    registerModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  registerClose.onclick = function() {
    registerModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == registerModal) {
      registerModal.style.display = "none";
    }
  }
});

// Handle register form submission
function handleRegister(event) {
  event.preventDefault();
  // Validate the form if necessary
  // Perform the registration action (e.g., AJAX request)
  
  // Redirect to another page after registration
  window.location.href = 'welcome.html'; // Change this to your desired page
  return false; // Prevent the default form submission
}
