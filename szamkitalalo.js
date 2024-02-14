let guessListConatiner = document.querySelector(".js-guess-container");
let currentGueassField = document.querySelector(".js-current-guess");
let newGameButton = document.querySelector(".js-new-game-button");
let guessSubmitButton = document.querySelector(".js-submit-guess");

let target ;
let gameOver;
let guessList = [];

const guessResult = {
    KISEBB : "a keresett szám kisebb",
    NAGYOB : "a keresett szám nagyobb",
    HELYES : "eltaláltad",
}

function guessResult() {
    return Math.floor(Math.random() * 100) + 1;
}