const shortcutTracking = [];
const pattern = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyAEnter";
const len = 11;
window.addEventListener('keydown', e => {
    shortcutTracking.push(e.code);
    if (shortcutTracking.length > len) {
        shortcutTracking.splice(1);
    }    
    if (shortcutTracking.length === 11) {
        let data = shortcutTracking.join('');
        if (data === pattern) {
            document.body.classList.add('pattern');
            document.body.innerHTML = "<h1> Pattern triggered </h1>";
        }
    }
});