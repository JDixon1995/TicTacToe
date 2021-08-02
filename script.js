//TicTacToe
const X_CLASS = 'x';
const O_CLASS = 'o';
const cellElements = document.querySelectorAll('[data-cell]');
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
document.querySelector('[data-winning-message-text]');
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
    if(checkBoardWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurn();
        setBoardHoverClass();
    };
};

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "Draw.";
    } else {
        winningMessageTextElement.innerText = `${oTurn ? "O " : "X " } Wins!`;
    }
    winningMessageElement.classList.add("show");
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(O_CLASS)
    })
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

function checkBoardWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}