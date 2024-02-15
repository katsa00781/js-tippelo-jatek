// ! Globális változók

let guessListContainer = document.querySelector(".js-guess-container");
let currentGuessField = document.querySelector(".js-guess-field");
let newGameButton = document.querySelector(".js-new-game-button")

let target;

function generateTarget() {
    return Math.floor(Math.random()* 100 +1)
}

function resetGame(){
    //* Törli a korábbi tippeket
    guessListContainer.innerHTML = "";

    //* input mező tartalmának törlése
    currentGuessField.innerHTML = "";


}

function startGame() {
    resetGame();
    target = generateTarget()
}

startGame();
newGameButton.addEventListener("click " , startGame )




