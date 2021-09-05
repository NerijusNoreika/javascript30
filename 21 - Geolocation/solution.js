const loc = navigator.geolocation;
speedIndicator = document.querySelector('.speed-value');
arrow = document.querySelector('.arrow');

loc.watchPosition(successCallback, failureCallback);

function successCallback(e) {
  let data = e.coords,
      speed = data.speed,
      direction = data.heading;
  if (speed) {
    speedIndicator.textContent = parseFloat(speed * 3.6).toFixed(2);
  }
  if (direction) {
    arrow.style.transform = `rotate(${direction}deg)`;
  }
}

function failureCallback(e) {
  console.log(e);
}
