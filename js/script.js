

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //This will stop the function from running all together. Error checking
    audio.currentTime = 0; //Rewinds to the start of the audio
    audio.play();
    key.classList.add('playing');
  };

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //Skips it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
