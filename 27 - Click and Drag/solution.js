let items = document.querySelector('.items');

let mousePressedCoords = 0;
let mouseReleasedCoords;
let lastDraggedCoords;
let mouseIsDown = false;
let totalScroll = 0;

function handleMouseDown(event) {
    mouseIsDown = true;
    mousePressedCoords = event.clientX;
    items.classList.add('active');
}

function calculateScroll(pos) {
   return totalScroll + mousePressedCoords - pos;
}

function handleMouseMove(event) {
    if (!mouseIsDown) return; 

    let pixelsToScroll = calculateScroll(event.clientX);
    items.scroll(pixelsToScroll, 0, {behavior: 'smooth'});
}   

function handleMouseUp(event) {
    mouseIsDown = false;
    totalScroll += mousePressedCoords - event.clientX;
    if (totalScroll < 0) {
        totalScroll = 0;
    } else if (totalScroll > items.scrollWidth - items.clientWidth) {
        totalScroll = items.scrollWidth - items.clientWidth;
    } 
    items.classList.remove('active');
}


items.addEventListener('mousedown', handleMouseDown);
items.addEventListener('mouseup', handleMouseUp);
items.addEventListener('mousemove', handleMouseMove);
