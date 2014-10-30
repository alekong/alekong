document.addEventListener('DOMContentLoaded', function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://a.pomf.se/fgxbrl.wav');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);
});