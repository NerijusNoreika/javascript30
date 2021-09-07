const voiceProps = new SpeechSynthesisUtterance();
const synth = window.speechSynthesis,
      voicesDropdown = document.querySelector('[name="voice"]'),
      options = document.querySelectorAll('[type="range"], [name="text"]'),
      speakButton = document.querySelector('#speak'),
      stopButton = document.querySelector('#stop');
      
let voices = [];

function populateVoices() {
  voices = voices = synth.getVoices();
  voicesDropdown.innerHTML = '';

  for (let voiceKey in voices) {
    voicesDropdown.innerHTML += `<option value="${voiceKey}">${voices[voiceKey].name}</option>`;
  }
}

function setOption() {
  voiceProps[this.name] = this.value;
  reset(true);
}

function reset(cancel = true) {
  synth.cancel();
  if (cancel) {
    synth.speak(voiceProps);
  }
}

voicesDropdown.addEventListener('input', e => {
  voiceProps.voice = voices[e.target.value];
  reset(true);
});

speakButton.addEventListener('click', e => {
  voiceProps.text = document.querySelector('[name="text"]').value;

  synth.paused ? synth.resume() : synth.speak(voiceProps);
});

options.forEach(option => option.addEventListener('change', setOption));

synth.addEventListener('voiceschanged', populateVoices);

stopButton.addEventListener('click', e => {
  synth.pause();
});
