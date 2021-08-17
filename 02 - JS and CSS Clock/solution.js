let 
    hourHand = document.querySelector('.hour-hand'),
    minuteHand = document.querySelector('.min-hand'),
    secondHand = document.querySelector('.second-hand');

function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return { hours, minutes , seconds };
}

function getHourRotation(hour) {
    return 360 / 12 * hour;
}

function getSecondRotation(second) {
    return 360 / 60 * second;
}

function getMinuteRotation(minute) {
    return 360 / 60 * minute;
}


setInterval(function() {
    let { hours, minutes, seconds } = getTime();
    hours = getHourRotation(hours);
    minutes = getMinuteRotation(minutes);
    seconds = getSecondRotation(seconds);

    secondHand.style.transform = `rotate(${seconds}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
}, 1000);
