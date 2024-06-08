
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('background-audio');
  var muteButton = document.getElementById('mute-button');
  var muteImage = muteButton.querySelector('img'); 
  var muteSrc = './images/Home/mute.png';
  var unmuteSrc = './images/Home/unmute.png';
  audio.volume = 0.1; 

  muteButton.addEventListener('click', function() {
    if (audio.muted) {
      audio.muted = false;
      muteImage.src = unmuteSrc; 
    } else { 
      audio.muted = true;
      muteImage.src = muteSrc; 
    }
  });
});
