document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');
    var muteButton = document.getElementById('mute-button');
    var muteImage = muteButton.querySelector('img');
    var muteSrc = './images/Home/mute.png';
    var unmuteSrc = './images/Home/unmute.png';

    audio.volume = 0.1;

    function playAudio() {
        audio.play().then(function() {
            console.log('Audio is playing automatically.');
        }).catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    }

    playAudio();

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