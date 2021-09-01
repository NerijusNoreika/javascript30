const times = [];
let videos = document.querySelectorAll('.videos li').
    forEach(video => times.push(video.dataset.time));


let ans = times.reduce((total, val) => {
    let time = val.split(':');
    let minutes = parseFloat(time[0]);
    let seconds = parseFloat(time[1]);
    return total + (minutes * 60) + seconds;
}, 0);

function parseTime(time) {
    let hours = Math.floor(time / 3600).toString().padStart(2, '0');
    time = time % 3600;
    let minutes = Math.floor(time / 60).toString().padStart(2, '0');
    time = time % 60;
    let seconds = Math.floor(time).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

console.log(parseTime(ans));
