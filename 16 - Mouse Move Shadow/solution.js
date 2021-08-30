window.addEventListener('mousemove', e => {
    const multiplierX    = 0.1;
    const multiplierY    = 0.2
    const text           = document.getElementById('text');
    const coordinateY    = Math.round(e.clientY - window.innerHeight / 2) * multiplierY;
    const coordinateX    = Math.round(e.clientX - window.innerWidth / 2) * multiplierX;
    text.style.textShadow = `
    ${coordinateX}px ${coordinateY}px 0 rgba(0,0,0,0.2),
    ${-coordinateX}px ${-coordinateY}px 0 rgba(255,0,0,0.2),
    ${-coordinateY}px ${coordinateX}px 0 rgba(255,0,255,0.2),
    ${coordinateY}px ${-coordinateX}px 0 rgba(0,0,255,0.2)
    `;
});