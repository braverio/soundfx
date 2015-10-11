var userTempo;

$(document).ready(function(){
    userTempo = document.getElementById("userTempo").value;
    //Not sure if that works
    var audioFiles = document.getElementById("contMusicAudio").children;
    //Or this
    for (i = 0; i < audioFiles.length; i++){
        setPlayBackRate(audioFiles[i]);
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
    var originalTempo = $(element).data('tempo');
    var playbackSpeed = userTempo/originalTempo;
    console.log(playbackSpeed);
    element.playbackRate = playbackSpeed;
}