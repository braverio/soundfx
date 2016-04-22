var audio;

var HIT = 0;
var RUM = 1;
var SIR = 2;

function initAudio(){
    audio = [document.getElementById('hit'),document.getElementById('rumble'),document.getElementById('siren')];
    
    audio[HIT].volume = 0.2;
    audio[SIR].volume = 0.4;
}

function playAudio(id){
        
    var i;
    
    switch(id){
        case 'hit': i = HIT; break;
        case 'rumble': i = RUM; break;
        case 'siren': i = SIR; break;
        default: i = -1;
    }
    
    
    var currAudio = audio[i];
    if(currAudio.paused){
        currAudio.currentTime = 0;
        currAudio.play();
    }
    else {
        currAudio.pause();
    }
}

function stopAudio(){
    audio.forEach(function(obj, index){
        if(!obj.paused){
            obj.pause();
        }
    });
    
}

$(document).ready(function(){
    initAudio();
    
    $('button').focus(function() {
        this.blur();
    });
    
    $(document).keyup(function(e){
        if(e.keyCode == 32){
            stopAudio();
        }else if(e.keyCode == 72){//hit
            playAudio('hit');
        }else if(e.keyCode == 82){ //rumble
            playAudio('rumble');
        }else if(e.keyCode == 83){ //siren
            playAudio('siren');
        }
    });
});