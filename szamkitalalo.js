// ! Globális változók

let guessListContainer = document.querySelector(".js-guess-container");
let currentGuessField = document.querySelector(".js-guess-field");
let newGameButton = document.querySelector(".js-new-game-button")
let guessSubmitButton = document.querySelector(".js-submit-guess");

let target;

function generateTarget() {
    return Math.floor(Math.random()* 100 +1)
}

function resetGame(){
    //* Törli a korábbi tippeket
    guessListContainer.innerHTML = "";

     //* Invalid üzenet törlése
     currentGuessField.classList.remove("is-invalid");

    //* input mező tartalmának törlése
    currentGuessField.innerHTML = "";

   


}



// TODO : A függvénnyel a tippeket törlöm és új számot generálok
function startGame() {
    resetGame();
    target = generateTarget()
}

function submitGuess(event) {
    event.preventDefault();
    // TODO : A tippek kereseése
    let guessValue = Number.parseInt(currentGuessField.value);
    console.log(guessValue, typeof guessValue);
    if (validateGuess()) {
        alert("Helyes");
    }
}  



function removeGuessValidationt() {
    currentGuessField.classList.remove("is-invalid");
}

function addGuessValidationt() {
    currentGuessField.classList.add("is-invalid");
}

function validateGuess() {
    let guessValue = Number.parseInt(currentGuessField.value);
    currentGuessField.value = guessValue;
    if (Number.isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
        addGuessValidationt();
        return false;
    }
    else {
        removeGuessValidationt();
        return true;
    }
    }



startGame();
newGameButton.addEventListener("click " , startGame );
guessSubmitButton.addEventListener("click" , submitGuess)
currentGuessField.addEventListener('focus', removeGuessValidationt)
currentGuessField.addEventListener('change',validateGuess)




