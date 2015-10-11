var userTempo;

$(document).ready(function(){
    userTempo = document.getElementById("userTempo").value;
    delayTime = 60 / userTempo;
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
    element.playbackRate = playbackSpeed;
}

function loopAudio(id){
	var audio = document.getElementById(id);
	if (audio.paused){
		setTimeout(function play(){
            audio.currentTime = 0;
            audio.play();
        }, delayTime * 4000);
        //delayTime is one beat, * 4 beats * 1000 for ms
	}
	else{
		audio.pause();
	}
}