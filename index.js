const buttonPlay = document.querySelector("#play");
const buttonPause = document.getElementById("pause");
const ProgressBar = document.getElementById("progressBar");
const tempoTotal = document.getElementById("tempoTotal");

const music = new Audio('./assets/Agust D AMYGDALA.mp3');
let intervalo;


function formatarTempo(segundos){
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2, '0')}`;
}

function updateMusicTime() {
    const tempoAtual = document.getElementById("tempoAtual");
    const progressBar = document.getElementById("progressBar");
    const Progresso = (music.currentTime / music.duration) * 100;
    progressBar.value = Progresso
    tempoAtual.textContent = formatarTempo(music.currentTime);
}

music.addEventListener('loadedmetadata', function(){
    const tempoTotal = document.getElementById('tempoTotal');
   tempoTotal.textContent = formatarTempo(music.duration);
});



function play() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    music.play();

    intervalo = setInterval(updateMusicTime, 1000); 
}
function pause() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    music.pause();
}

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
