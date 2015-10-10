$(document).ready(function(){
    var userTempo = document.getElementById("userTempo");
    var tempo = userTempo.getAttribute("value");
    console.log(tempo);
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