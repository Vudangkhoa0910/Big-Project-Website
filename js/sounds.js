document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');
    var muteButton = document.getElementById('mute-button');
    audio.volume = 0.5; // Chỉnh âm lượng về 50%

    muteButton.addEventListener('click', function() {
      if (audio.muted) {
        audio.muted = false;
        muteButton.textContent = 'Mute';
      } else {
        audio.muted = true;
        muteButton.textContent = 'Unmute';
      }
    });
  });