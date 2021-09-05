const recognition = new SpeechRecognition();
const output = document.querySelector('.words');
recognition.lang = 'us-US';
recognition.interimResults = true;

let p = document.createElement('p');
output.appendChild(p);

try {
  recognition.start();
} catch (e) {
    console.log(e);
}


recognition.addEventListener('result', e => {
    transcript = e.results[0][0].transcript;
    p.textContent = transcript;
    
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        output.appendChild(p);
    }
});
recognition.addEventListener('end', recognition.start);
