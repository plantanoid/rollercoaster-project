import './style.css';

// button stuff
const counterDisplay = document.querySelector('#counter-display');
const actionBtn = document.querySelector('#action-btn');

// sfx
const hoverSfx = document.querySelector('#hover-sfx');
const clickSfx = document.querySelector('#click-sfx');

hoverSfx.volume = 1;
clickSfx.volume = 1;

if (actionBtn && counterDisplay) {
  let count = 0;

  // listens for hover event on button
  actionBtn.addEventListener('mouseenter', () => {
    hoverSfx.currentTime = 0;
    hoverSfx.play();

    const randomDegrees = Math.floor(Math.random() *16 ) -7.5;

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