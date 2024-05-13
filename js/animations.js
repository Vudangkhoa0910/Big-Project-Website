const text = "PHENIKAA TRAVEL";

const animatedText = document.getElementById('animated-text');

function typeWriter(text, i, isFirstTime) {
  if (isFirstTime) {
    animatedText.innerHTML = ''; 
  }
  if (i < text.length) {
    const charElement = document.createElement('span');
    charElement.textContent = text.charAt(i);
    animatedText.appendChild(charElement);
    setTimeout(function() {
      if (text.charAt(i) === ' ') {
        animatedText.innerHTML += ' ';
      }
      typeWriter(text, i + 1, false);
    }, 100);
  } else {
    setTimeout(function() {
      animatedText.innerHTML = ''; 
      typeWriter(text, 0, false); 
    }, 2000); 
  }
}

typeWriter(text, 0, true);



