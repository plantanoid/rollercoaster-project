import './style.css';

// intro screen
const introScreen = document.querySelector('#intro-screen');
const startBtn = document.querySelector('#start-btn');
const appContainer = document.querySelector('#app');

// button stuff
const counterDisplay = document.querySelector('#counter-display');
const actionBtn = document.querySelector('#action-btn');

// sfx
const hoverSfx = document.querySelector('#hover-sfx');
const clickSfx = document.querySelector('#click-sfx');
const introJingleSfx = document.querySelector('#intro-jingle-sfx');

if (hoverSfx && clickSfx) {
  hoverSfx.volume = 0.2;
  clickSfx.volume = 0.6;
  introJingleSfx.volume = 0.6;
}

if (startBtn && introScreen && appContainer) {
  startBtn.addEventListener('click', () => {
    clickSfx.currentTime = 0;
    introJingleSfx.currentTime = 0;
    clickSfx.play();
    introJingleSfx.play();

    introScreen.classList.add('intro-fade-out');
    appContainer.classList.add('app-visible');
    appContainer.classList.remove('app-hidden');

    // cleanup dom after aniamtion
    setTimeout(() => {
      introScreen.remove();
    }, 600);
  });
}

if (actionBtn && counterDisplay) {
  let count = 0;

  // listens for hover event on button
  actionBtn.addEventListener('mouseenter', () => {
    hoverSfx.currentTime = 0;
    hoverSfx.play();

    const randomDegrees = Math.floor(Math.random() *8.5 ) -3.75;
    actionBtn.style.setProperty('--random-rotation', `${randomDegrees}deg`);
  });

  // listens for click event on button
  actionBtn.addEventListener('click', () => {
    count++;
    
    clickSfx.currentTime = 0;
    clickSfx.play();

    if (count === 1) {
      counterDisplay.textContent = `you've clicked the button ${count} time`;
    } else {
      counterDisplay.textContent = `you've clicked the button ${count} times`;
    }
  });
}