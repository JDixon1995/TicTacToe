//TicTacToe
const X_CLASS = 'x';
const O_CLASS = 'o';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let oTurn;

startGame();

function startGame() {
    oTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true})
});
    setBoardHoverClass();
}


function handleClick(e) {
    const cell = e.target;
    const currentClass = oTurn ? O_CLASS : X_CLASS;
    placeMark(cell, currentClass);

    //Check for Win

    //Check for Draw

    //Switch Turns
    swapTurn();
    setBoardHoverClass();
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurn() {
    oTurn = !oTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (oTurn) {
        board.classList.add(O_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}