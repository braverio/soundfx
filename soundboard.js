$(document).ready(function(){
    var userTempo = document.getElementById("userTempo");
    var GlobalTempo = userTempo.getAttribute("value");
    //Not sure if that works
    var audioFiles = document.getElementById("continuousMusic").children;
    //Or this
    for (audio in audioFiles){
        setPlayBackRate(audio);
    }
});

function playAudio(id){
    var audio = document.getElementById(id);
    if(audio.paused){
        audio.currentTime = 0;
        audio.play();
    }
    else {
        audio.pause();
    }
}

function setPlayBackRate(element){
    var audio = element;
    var originalTempo = audio.dataset.tempo;
    var playbackSpeed = GlobalTempo/originalTempo;
    audio.playbackRate = playbackSpeed;
}