const video = document.querySelector('video');
const slider = document.querySelector('.speed');
const progressBar = slider.querySelector('.speed-bar');

slider.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
    if (video.played.length === 0) return;
    let sliderHeight = slider.offsetHeight;
    let currentPos = event.offsetY;
    progressBar.style.height = currentPos + 'px';
    let percentage = (currentPos * 100) / sliderHeight;
    progressBar.textContent = calculatePLaybackRate(percentage);
}

function calculatePLaybackRate(percentage) {
    const min = 0.4;
    const max = 4;

    let height = percentage + '%';
    let playBackRate = (percentage / 100) * (max - min) + min;
    progressBar.style.height = height;

    video.playbackRate = playBackRate;
    let strRepresentation = playBackRate.toPrecision(2) + 'x';
    return strRepresentation;
}
