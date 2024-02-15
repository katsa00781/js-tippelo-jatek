let target;

function generateTarget() {
    return Math.floor(Math.random()* 100 +1)
}

function startGame() {
    target = generateTarget()
}

startGame();



