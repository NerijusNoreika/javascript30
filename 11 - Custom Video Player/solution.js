const 
    video               = document.querySelector('video'),
    progress            = document.querySelector('.progress'),
    progressFilled      = document.querySelector('.progress__filled');
    playButton          = document.querySelector('.player__button.toggle'),
    volumeSlider        = document.querySelector('input[name="volume"]'),
    playbackRateSlider  = document.querySelector('input[name="playbackRate"]'),
    skipButtons         = document.querySelectorAll('.player__button.skip');

video.addEventListener('click', handlePlayAndPause);
progress.addEventListener('input', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', handleSkip));
playbackRateSlider.addEventListener('input', handlePlayback);
volumeSlider.addEventListener('input', handleVolume);
playButton.addEventListener('click', handlePlayAndPause);





let mousedown = false;
progress.addEventListener('mousedown', function(e) {
    video.pause();
    mousedown = true;
    let progressWidth = progress.clientWidth;
    let currentOffsetX = e.offsetX
    console.log(currentOffsetX);

    progressFilled.classList.add('active');
   
});

progress.addEventListener('mousemove', function(e) {
    if (!mousedown) return;
    let progressWidth = progress.clientWidth;
    let currentOffsetX = e.offsetX

    progressFilled.style.flexBasis = currentOffsetX * 100 / progressWidth + "%";
});

progress.addEventListener('mouseup', function(e) {
   let  clickedOffsetX     = e.offsetX;
        progressWidth      = progress.clientWidth,
        percentages        = clickedOffsetX * 100 / progressWidth,
        totalVideoDuration = video.duration;


   video.currentTime = totalVideoDuration * percentages / 100;
   progressFilled.classList.remove('active');
   mousedown = false;
   video.play();
})

video.addEventListener('timeupdate', function(e) {
    progressFilled.style.flexBasis = video.currentTime * 100 / video.duration + "%";
});


function handlePlayAndPause() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = '❚❚';
    } else {
        video.pause();
        playButton.innerHTML = '►';
    }
}


function handleProgress(e) {
    console.log(e);
};

function handleSkip(e) {
    // if (video.paused) return;

    let time = video.currentTime;
    let skipTime = e.target.dataset.skip;
    console.log(video.currentTime = parseFloat(time)+ parseFloat(skipTime));
}

function handleVolume(e) {
    video.volume = e.target.value;
}

function handlePlayback(e) {
    video.playbackRate = e.target.value;
}