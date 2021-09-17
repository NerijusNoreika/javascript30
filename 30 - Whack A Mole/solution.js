const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.getElementById('start');

let lastHole;

let duration = 10;
let timeUp = false;
let score = 0;

function peek() {
    let time = randomTime(300, 1000);
    let holeLocation = randomPlace(holes);
    let hole = holes[holeLocation];
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peek();
        }
    }, time);
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomPlace(holes) {
    let length = holes.length;
    let hole = Math.floor(Math.random() * length);

    if (lastHole === hole) {
        return randomPlace(holes);
    }
    lastHole = hole;
    return hole;
}

function startGame() {
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    peek();
    setTimeout(() => {
        timeUp = true;
    }, 10000);
}

function handleMoleClick(e) {
    let moleLanding = e.target.classList.contains('landing');

    if (moleLanding || !e.isTrusted) return;

    scoreBoard.textContent = ++score;
    this.parentNode.classList.remove('up');
    this.classList.add('landing');
    setTimeout(() => {
        e.target.classList.remove('landing');
    }, 400);
}

startButton.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', handleMoleClick));
