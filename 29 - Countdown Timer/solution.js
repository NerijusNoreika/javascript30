const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const form = document.getElementById('custom');
const buttons = document.querySelectorAll('.timer__controls button');
let id;

function timer(seconds) {
    clearInterval(id);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTime(seconds);
    displayEndTime(then);
    id = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        displayTime(secondsLeft);
        if (secondsLeft <= 0) clearInterval(id);
    }, 1000);
}

function displayTime(seconds) {
    let minutes = Math.floor(seconds / 60)
        .toString()
        .padStart(2, 0);
    seconds = seconds % 60;
    seconds = seconds.toString().padStart(2, 0);
    let currentTime = `${minutes}:${seconds}`;
    timeLeft.textContent = currentTime;
    document.title = currentTime;
}

function displayEndTime(time) {
    let end = new Date(time);
    let hours = end.getHours().toString().padStart(2, 0);
    let minutes = end.getMinutes().toString().padStart(2, 0);
    endTime.textContent = `${hours}:${minutes}`;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let minutes = form.querySelector('input');
    timer(minutes.value * 60);
    this.reset();
});

buttons.forEach(button =>
    button.addEventListener('click', () => {
        let time = button.dataset.time;
        timer(time);
    })
);
