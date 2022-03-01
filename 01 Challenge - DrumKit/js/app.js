
function playSound (e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key = document.querySelector(`.key[data-key=${e.key}]`);
    if(!audio) return; // detiene la función si no hay pista de audio asociada al elemento
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound );
