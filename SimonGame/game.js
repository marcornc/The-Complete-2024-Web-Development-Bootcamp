const buttonColors = ["red", "blue", "green", "yellow"]
const gamePattern = []

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4)
    return randomNumber
}

const randomChosenColor = buttonColors[nextSequence()]
gamePattern.push(randomChosenColor)

$(`#${randomChosenColor}`).click().fadeOut(100).fadeIn(100)
