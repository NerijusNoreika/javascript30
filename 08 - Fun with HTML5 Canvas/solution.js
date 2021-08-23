const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

let lastX = 0,
    lastY = 0,
    radius = 0.0,
    drawing = false,
    hue = 0,
    radiusIncreaseEvent = null;

[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];

ctx.lineJoin  = 'round';
ctx.lineCap  = 'round';


canvas.addEventListener('mousedown', (e) => {
    console.log(e);
    drawing  = true
    lastX = e.offsetX;
    lastY = e.offsetY;
    radiusIncreaseEvent = setInterval(() => {
        radius += 1;
        if (radius > 25) clearInterval(radiusIncreaseEvent);
    }, 100)
});


canvas.addEventListener('mouseup',   (e) => {
    clearInterval(radiusIncreaseEvent);
    radius = 1.0;
    drawing  = false 
});
canvas.addEventListener('mouseout',  () => drawing  = false);

canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    
    hue += 7; hue %= 360;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsl(${hue}, 90%, 90%)`;
    ctx.stroke();
   
    lastX = e.offsetX;
    lastY = e.offsetY;

});