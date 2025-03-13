function makeSound(key){
    const soundMap = {
        "w" : "sounds/crash.mp3",
        "a" : "sounds/kick-bass.mp3",
        "s" : "sounds/snare.mp3",
        "d" : "sounds/tom-1.mp3",
        "j" : "sounds/tom-2.mp3",
        "k" : "sounds/tom-3.mp3",
        "l" : "sounds/tom-4.mp3",
    }

    const soundFile = soundMap[key]

    if (soundFile){
        new Audio (soundFile).play()
    } else alert("No Drum Found!")

}

function buttonAnimation(key){
    let buttonSelected = document.querySelector(`.${key}`)
    buttonSelected.classList.add("pressed")
    setTimeout(function(){
        buttonSelected.classList.remove("pressed")
    }, 90)
}

document.querySelectorAll(".drum").forEach((button)=>{
    button.addEventListener("click", (e)=>{
        makeSound(e.target.innerText)
        buttonAnimation(e.target.innerText)
    })
})

document.addEventListener("keydown", function(e){
    makeSound(e.key)
    buttonAnimation(e.key)
})