document.addEventListener('DOMContentLoaded', (event) => {
  // Lấy các modal
  var registerModal = document.getElementById('registerModal');
  var successModal = document.getElementById('successModal');  
  var infoModal = document.getElementById('infoModal');

  // Lấy các phần tử <span> đóng modal
  var registerClose = document.getElementById('registerClose');
  var successClose = document.getElementById('successClose');
  var infoClose = document.getElementById('infoClose');

  // Lấy các phần tử mở modal
  var registerBtn = document.querySelector(".register-link");
  var infoBtn = document.querySelector(".info-link");

  // Khi người dùng nhấp vào nút, mở modal
  registerBtn.onclick = function() {
    registerModal.style.display = "block";
  }
  infoBtn.onclick = function() {
    infoModal.style.display = "block";
  }

  // Khi người dùng nhấp vào <span> (x), đóng modal
  registerClose.onclick = function() {
    registerModal.style.display = "none";
  }

  successClose.onclick = function() {
    successModal.style.display = "none";
  }
  infoClose.onclick = function() {
    infoModal.style.display = "none";
  }

  // Khi người dùng nhấp ra ngoài modal, đóng modal
  window.onclick = function(event) {
    if (event.target == registerModal) {
      registerModal.style.display = "none";
    }
    if (event.target == successModal) {
      successModal.style.display = "none";
    }
    if (event.target == infoModal) {
      infoModal.style.display = "none";
    }
  }
});

// Xử lý việc gửi form đăng ký
function handleRegister(event) {
  event.preventDefault();
  // Xử lý validate và đăng ký form nếu cần thiết
  // Giả lập quá trình đăng ký thành công
  setTimeout(function() {
    // Đóng modal đăng ký
    document.getElementById('registerModal').style.display = "none";

    // Hiển thị modal thành công
    document.getElementById('successModal').style.display = "block";
  }, 500); // Giả lập thời gian xử lý 500ms

  // Chuyển hướng đến trang khác sau khi đăng ký thành công
  //window.location.href = 'thanks.html'; // Thay đổi URL theo ý muốn của bạn
  return false; // Ngăn chặn hành động gửi form mặc định
}
