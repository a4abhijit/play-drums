var allDrumBtns = document.querySelectorAll("button.drum") ;

// Listening to Mouse Click Event
for(var i = 0 ; i < allDrumBtns.length ; i++){
    allDrumBtns[i].addEventListener("click", playDrumByClick) ;
}

function playDrumByClick() {
    playDrumMusic(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

//Listening to Keyboard events
document.addEventListener("keydown", playDrumByKeyBoard)

function playDrumByKeyBoard(event){
    playDrumMusic(event.key);
    buttonAnimation(event.key);
}


//Playing Drum music for the event occured
function playDrumMusic(keyboardLetter){
    switch (keyboardLetter) {
        case "w" : var audio = new Audio("sounds/w.mp3");
                 audio.play();
                 break;
        case "a" : var audio = new Audio("sounds/a.mp3");
                 audio.play();
                 break;
        case "s" : var audio = new Audio("sounds/s.mp3");
                 audio.play();
                 break;
        case "d" : var audio = new Audio("sounds/d.mp3");
                 audio.play();
                 break;
        case "j" : var audio = new Audio("sounds/j.mp3");
                 audio.play();
                 break;
        case "k" : var audio = new Audio("sounds/k.mp3");
                 audio.play();
                 break;
        case "l" : var audio = new Audio("sounds/l.mp3");
                 audio.play();
                 break;
        default: console.log(this.innerHTML);
                break;
    }
}

// Animate the button which is playing drum
function buttonAnimation(keyboardLetter){
    var activeDrumBtn = document.querySelector("." + keyboardLetter);
    activeDrumBtn.classList.add("pressed");
    //Add delay and remove the CSS animation
    setTimeout(function(){
                            activeDrumBtn.classList.toggle("pressed");
                         }, 100) ;
}

    // function playDrumMusic() {
    
    //     this.style.color = "white" ;
    //     var drum = this.innerHTML;
    //     var audioLoaction  = "sounds/" + drum + ".mp3" ;
    //     var audio = new Audio(audioLoaction);
    //     audio.play();
        
    //     }
