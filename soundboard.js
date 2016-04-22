var audio;

function playAudio(id){
    audio = document.getElementById(id);
    if(audio.paused){
        audio.currentTime = 0;
        audio.play();
    }
    else {
        audio.pause();
    }
}

function stopAudio(){
    audio.pause();
}