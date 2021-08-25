let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
let checked = false; 
let shiftPressed = false; 
let lastChecked;


function handleCheck(e) {
    let inBetween = false; 
    let shiftPressed = e.shiftKey;
    if (shiftPressed && this.checked) {
        checkBoxes.forEach(box => {
            if (box === this || box === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                box.checked = true;
            }
        })
    } 

    lastChecked = this;
}


checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));