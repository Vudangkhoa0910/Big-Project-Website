document.addEventListener('DOMContentLoaded', (event) => {
  var loginModal = document.getElementById("loginModal");
  var registerModal = document.getElementById("registerModal");

  var loginClose = document.getElementById("loginClose");
  var registerClose = document.getElementById("registerClose");

  // When the user clicks on <span> (x), close the modal
  loginClose.onclick = function() {
    loginModal.style.display = "none";
  }

  registerClose.onclick = function() {
    registerModal.style.display = "none";
  }

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
  window.location.href = '/html/index.html';
  return false; 
}

function handleRegister(event) {
  event.preventDefault();
  window.location.href = '/html/index.html'; 
  return false; 
}
