function playAudio(id){
    var audio = document.getElementById(id);
    if(audio.paused) audio.play();
    else audio.pause();
}