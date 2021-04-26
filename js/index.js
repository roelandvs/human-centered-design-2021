// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// const recognition = new SpeechRecognition();
// recognition.continuous = false;
// recognition.lang = 'nl-NL';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// const output = document.querySelector('.output');
// const bg = document.querySelector('html');

// document.body.onclick = function() {
//   recognition.start();
//   console.log('Ready to receive a color command.');
// }

// recognition.onresult = function(event) {
//   // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
//   // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
//   // It has a getter so it can be accessed like an array
//   // The first [0] returns the SpeechRecognitionResult at the last position.
//   // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
//   // These also have getters so they can be accessed like arrays.
//   // The second [0] returns the SpeechRecognitionAlternative at position 0.
//   // We then return the transcript property of the SpeechRecognitionAlternative object
//   const color = event.results[0][0].transcript;
//   output.textContent = 'Result received: ' + color + '.';
//   bg.style.backgroundColor = color;
//   console.log('Confidence: ' + event.results[0][0].confidence);
// }

// recognition.onspeechend = function() {
//   recognition.stop();
// }

// recognition.onnomatch = function(event) {
//   output.textContent = "I didn't recognise that color.";
// }

// recognition.onerror = function(event) {
//   output.textContent = 'Error occurred in recognition: ' + event.error;
// }

const startButton = document.querySelector('#start-button');
const statusBar = document.querySelector('#status-bar');

function activateSpeech() {
    statusBar.classList.add('active');
};

startButton.addEventListener('click', activateSpeech);