// Capture calls events on elements from top to bottom 
// Bubbling calls events on elements from bottom to top
// 3rd parameter can be either boolean or object.
// If boolean, we set whether we call events in capture or not in capture
// We can stop the bubbling/capturing with e.stopPropagation()
// We can trigger the event only once with {once: true} on 3rd paramter

const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this);
}

divs.forEach(div => {
    div.addEventListener('click', logText, true);
});