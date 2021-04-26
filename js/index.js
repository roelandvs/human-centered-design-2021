var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'nl-NL';
recognition.interimResults = true;
recognition.continuous = true;
recognition.maxAlternatives = 1;

const startButton = document.querySelector('#start-button');
const statusBar = document.querySelector('#status-bar');
const output = document.querySelector('#output');
const woordHet = document.querySelectorAll('.het');
// let finalSpeech;

function activateSpeech() {
    statusBar.classList.add('active');
    recognition.start();
};

recognition.onresult = function(e) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
    let currentSpeech = '';

    for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
            // finalSpeech += e.results[i][0].transcript;
            currentSpeech += e.results[i][0].transcript;
            recognition.stop();
        } else {
            currentSpeech += e.results[i][0].transcript;
            // console.log(e.results[i][0].transcript)
            if (e.results[i][0].transcript === 'het') {
                document.documentElement.style.setProperty("--het-background-color", '#BEE0FF');
                document.documentElement.style.setProperty("--output-background-color", '#BEE0FF');
            } else if (e.results[i][0].transcript === 'duurt' || e.results[i][0].transcript === ' duurt' || e.results[i][0].transcript === 'het duurt') {
                document.documentElement.style.setProperty("--het-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--duurt-background-color", '#BEFFC0');
                document.documentElement.style.setProperty("--output-background-color", '#BEFFC0');
            }
            // console.log(e.results[i][0].transcript)
        }
    }
    
    // console.log(finalSpeech)
    output.innerText = currentSpeech;

    // const words = event.results[0][0].transcript;
    // output.textContent = words;
    // console.log(event);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  output.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  output.textContent = 'Error occurred in recognition: ' + event.error;
}

startButton.addEventListener('click', activateSpeech);