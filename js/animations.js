const text = "PHENIKAA TRAVEL";
const animatedText = document.getElementById('animated-text');

function typeWriter(text, i, isFirstTime) {
  if (isFirstTime) {
    animatedText.innerHTML = ''; 
  }
  if (i < text.length) {
    const charElement = document.createElement('span');

    if (i < 8) { 
      charElement.className = 'phenikaa';
    } else if (i >= 9) { 
      charElement.className = 'travel';
    }

    charElement.textContent = text.charAt(i);
    animatedText.appendChild(charElement);

    setTimeout(function() {
      if (text.charAt(i) === ' ') {
        animatedText.innerHTML += ' ';
      }
      typeWriter(text, i + 1, false);
    }, 100);
  } else {
    const logoElement = document.createElement('span');
    logoElement.className = 'logo-behind'; 
    logoElement.innerHTML = '&nbsp;<img src="./images/Home/logomain.png" alt="Logo Behind Text" class="logo-image">'; // Thêm một khoảng trống trước khi chèn hình ảnh logo
    animatedText.appendChild(logoElement);

    setTimeout(function() {
      animatedText.innerHTML = ''; 
      typeWriter(text, 0, true); 
    }, 2000); 
  }
}

typeWriter(text, 0, true);
