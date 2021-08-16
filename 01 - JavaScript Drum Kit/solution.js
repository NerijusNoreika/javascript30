let keys = document.querySelectorAll('.key');

window.addEventListener('keydown', function(e) {
    let ascii = e.keyCode;
    let elm = document.querySelector(`.key[data-key="${ascii}"]`);
    if (elm) {
        elm.classList.add('playing');
        let audio = document.querySelector(`audio[data-key="${ascii}"]`);
        if (audio) audio.play();
        
        this.setTimeout(() => {
            elm.classList.remove('playing');
        }, 200)
    }
});


