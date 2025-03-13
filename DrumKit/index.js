const numberOfButtons = document.querySelectorAll(".drum").length

function makeSound(drumType){
    switch (drumType) {
        case "w":
                new Audio("sounds/crash.mp3").play()
            break;
        case "a":
                new Audio("sounds/kick-bass.mp3").play()
            break;
        case "s":
                new Audio("sounds/snare.mp3").play()
            break;
        case "d":
                new Audio("sounds/tom-1.mp3").play()
            break;
        case "j":
                new Audio("sounds/tom-2.mp3").play()
            break;
        case "k":
                new Audio("sounds/tom-3.mp3").play()
            break;
        case "l":
                new Audio("sounds/tom-4.mp3").play()
            break;
        default: allert("No Drum Found!!")
            break;
    }
}

for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        const drumType = this.innerText
        makeSound(drumType)
    })
}

document.addEventListener("keydown", function(e){
    makeSound(e.key)
})