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
const completeAlinea = document.querySelector('#complete-alinea');
const textArea = document.querySelector('textArea');
let counter = 0;
let buttonIsDragged = false;

function activateSpeech() {
    if (buttonIsDragged === false) {
        statusBar.classList.add('active');
        recognition.start();
        startButton.style.opacity = 1;
        startButton.style.backgroundColor = '#FFF';
    } else {
        buttonIsDragged = false;
    }
};

recognition.onresult = function(e) {
    let currentSpeech = '';

    for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
            counter += 1;
            console.log(counter)
            console.log('final', e.results[i][0].transcript)
            currentSpeech += e.results[i][0].transcript;
            if (counter > 3) {
                counter = 0;
            };

            if (counter === 0) {
                output.innerText = 'U kunt spreken (begin van de tekst die u wil selecteren)';
            } else if (counter === 1) {
                document.documentElement.style.setProperty("--output-background-color", 'rgba(255,0,0,0)');
                output.innerText = 'U kunt spreken (tot waar u wil selecteren)';
            } else if ((counter === 2 && e.results[i][0].transcript === ' weer gevuld zijn') || (counter === 2 && e.results[i][0].transcript === ' wel weer gevuld zijn')) {
                console.log(e.results[i][0].transcript)
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
                output.innerText = 'U kunt spreken (begin van de tekst die u wil selecteren)';
            }

        } else {
            currentSpeech += e.results[i][0].transcript;
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
            } else if (e.results[i][0].transcript === 'opdracht overnieuw' || e.results[i][0].transcript === ' opdracht overnieuw') {
                document.documentElement.style.setProperty("--het-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--duurt-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--output-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-zijn-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--complete-alinea-background-color", 'rgba(255,0,0,0)');
                counter = -1;
            } else if (e.results[i][0].transcript === 'plak opdracht' || e.results[i][0].transcript === ' plak opdracht' || e.results[i][0].transcript === ' lock opdracht' || e.results[i][0].transcript === 'lock opdracht') {
                console.log('jiero')
                navigator.clipboard.readText()
                    .then(text => textArea.innerText = text);
                document.documentElement.style.setProperty("--het-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--duurt-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--output-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-zijn-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--complete-alinea-background-color", 'rgba(255,0,0,0)');
                statusBar.classList.remove('active');
                recognition.stop();
                counter = 0;
            } else if (e.results[i][0].transcript === 'annuleer opdracht' || e.results[i][0].transcript === ' annuleer opdracht') {
                document.documentElement.style.setProperty("--het-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--duurt-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--output-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--weer-gevuld-zijn-background-color", 'rgba(255,0,0,0)');
                document.documentElement.style.setProperty("--complete-alinea-background-color", 'rgba(255,0,0,0)');
                counter = -1;
                statusBar.classList.remove('active');
                recognition.stop();
            }
            output.innerText = currentSpeech;
        }
    }
}

recognition.onspeechend = function() {
    recognition.stop();
    startButton.style.opacity = 0.3;
    startButton.style.backgroundColor = '#cecece';
}

recognition.onerror = function(e) {
    output.textContent = 'Er heeft een error plaatsgevonden: ' + e.error;
    listenIcon.style.opacity = '0';
}

startButton.addEventListener('click', activateSpeech);