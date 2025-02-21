document.querySelector(".playerChoice").addEventListener("click", () => {
    document.querySelector(".choice").style.display = "flex"
})

let playerScore = 0, computerScore = 0

function checkForRock() {
    let ranNum = Math.floor(Math.random()*3)
    document.querySelector(".playerChoice > .innerRing").innerHTML = `<img src="rockSVG.svg" alt="Rock">`
    document.querySelector(".choice").style.display = "none"
    if (ranNum === 0){
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="rockSVG.svg" alt="Rock">`
        document.querySelector(".result").innerHTML = "Draw"
    }
    else if (ranNum === 1) {
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="paperSVG.svg" alt="Paper">`
        document.querySelector(".result").innerHTML = "You Lose"
        computerScore++
        document.querySelector(".computerScore").innerHTML = `${computerScore}`
    }
    else if (ranNum === 2) {
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="scissorSVG.svg" alt="Scissor">`
        document.querySelector(".result").innerHTML = "You Win"
        playerScore++
        document.querySelector(".playerScore").innerHTML = `${playerScore}`
    }
}

function checkForPaper() {
    let ranNum = Math.floor(Math.random()*3)
    document.querySelector(".playerChoice > .innerRing").innerHTML = `<img src="paperSVG.svg" alt="Paper">`
    document.querySelector(".choice").style.display = "none"
    if (ranNum === 0){
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="rockSVG.svg" alt="Rock">`
        document.querySelector(".result").innerHTML = "You Win"
        playerScore++
        document.querySelector(".playerScore").innerHTML = `${playerScore}`
    }
    else if (ranNum === 1) {
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="paperSVG.svg" alt="Paper">`
        document.querySelector(".result").innerHTML = "Draw"
    }
    else if (ranNum === 2) {
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="scissorSVG.svg" alt="Scissor">`
        document.querySelector(".result").innerHTML = "You Lose"
        computerScore++
        document.querySelector(".computerScore").innerHTML = `${computerScore}`
    }
}

function checkForScissor() {
    let ranNum = Math.floor(Math.random()*3)
    document.querySelector(".playerChoice > .innerRing").innerHTML = `<img src="scissorSVG.svg" alt="Scissor">`
    document.querySelector(".choice").style.display = "none"
    if (ranNum === 0){
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="rockSVG.svg" alt="Rock">`
        document.querySelector(".result").innerHTML = "You Lose"
        computerScore++
        document.querySelector(".computerScore").innerHTML = `${computerScore}`
    }
    else if (ranNum === 1) {
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="paperSVG.svg" alt="Paper">`
        document.querySelector(".result").innerHTML = "You Win"
        playerScore++
        document.querySelector(".playerScore").innerHTML = `${playerScore}`
    }
    else if (ranNum === 2) {
        document.querySelector(".computerChoice > .innerRing").innerHTML = `<img src="scissorSVG.svg" alt="Scissor">`
        document.querySelector(".result").innerHTML = "Draw"
    }
}

function resetGame() {
    document.querySelector(".playerScore").innerHTML = 0
    document.querySelector(".computerScore").innerHTML = 0
    document.querySelector(".result").innerHTML = ""
    document.querySelector(".playerChoice > .innerRing").innerHTML = "Choose"
    document.querySelector(".computerChoice > .innerRing").innerHTML = ""
}