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
const listenIcon = document.querySelector('#listening-icon');
const woordHet = document.querySelectorAll('.het');
const completeAlinea = document.querySelector('#complete-alinea')
let counter = 0;

function activateSpeech() {
    statusBar.classList.add('active');
    recognition.start();
};

recognition.onresult = function(e) {
    let currentSpeech = '';

    for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
            counter += 1;
            currentSpeech += e.results[i][0].transcript;
            console.log(counter)
            if (counter === 1) {
                document.documentElement.style.setProperty("--output-background-color", 'rgba(255,0,0,0)');
                output.innerText = 'U kunt spreken (tot waar u wil selecteren)';
            } else if (counter === 2) {
                document.documentElement.style.setProperty("--duurt-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-zijn-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--output-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--complete-alinea-background-color", '#BEE0FF');
                output.innerText = 'Zeg “Kopieer” om te kopieëren';
            } else if (counter === 3) {
                statusBar.classList.remove('active');
                document.documentElement.style.setProperty("--complete-alinea-background-color", 'rgba(255,0,0,0)');
                recognition.stop();
            }

        } else {
            currentSpeech += e.results[i][0].transcript;
            console.log(e.results[i][0].transcript)
            if (e.results[i][0].transcript === 'het') {
                document.documentElement.style.setProperty("--het-background-color", '#BEE0FF');
                document.documentElement.style.setProperty("--output-background-color", '#BEE0FF');
            } else if (e.results[i][0].transcript === 'duurt' || e.results[i][0].transcript === ' duurt' || e.results[i][0].transcript === 'het duurt') {
                document.documentElement.style.setProperty("--het-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--duurt-background-color", '#BEFFC0');
                document.documentElement.style.setProperty("--output-background-color", '#BEFFC0');
            } else if (e.results[i][0].transcript === 'weer' || e.results[i][0].transcript === ' weer') {
                document.documentElement.style.setProperty("--weer-background-color", '#BEE0FF');
                document.documentElement.style.setProperty("--output-background-color", '#BEE0FF');
            } else if (e.results[i][0].transcript === ' weer gevuld' || e.results[i][0].transcript === 'weer gevuld' || e.results[i][0].transcript === ' zijn' || e.results[i][0].transcript === 'zijn') {
                document.documentElement.style.setProperty("--weer-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-background-color", '#BEFFC0');
                document.documentElement.style.setProperty("--output-background-color", '#BEFFC0');
            } else if (e.results[i][0].transcript === ' weer gevuld zijn') {
                document.documentElement.style.setProperty("--weer-gevuld-zijn-background-color", '#BEFFC0');
            } else if (e.results[i][0].transcript === 'kopieer' || e.results[i][0].transcript === ' kopieer') {
                navigator.clipboard.writeText(completeAlinea.textContent);
                listenIcon.style.opacity === '0';
            }
            output.innerText = currentSpeech;
        }
    }
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onerror = function(e) {
  output.textContent = 'Error occurred in recognition: ' + e.error;
}

startButton.addEventListener('click', activateSpeech);