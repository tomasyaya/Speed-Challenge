'use strict'


const main = () => {

  const buildDom = (html) =>{
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplashScreen = () => {
    const splashScreen = buildDom(`
      <section class="splash-screen">
        <h1>Speed Challenge</h1>
        <button class="start-game-button">Start!</button>
      </section>
    `)

    const startButton = document.querySelector('.start-game-button');
    startButton.addEventListener('click', buildGameScreen);
  };

  const buildGameScreen = () =>{
    const gameScreen = buildDom(`
      <section class="game-screen">
      <canvas></canvas>
      </screen>
    `);

    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

  };


  const buildGameOverScreen = () => {
    const gameOverScreen = buildDom(`
      <section class="game-over-screen">
        <h1>Game Over</h1>
        <button class="restart-button">Restart</button>
      </section>
    `);

    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', buildGameScreen);

  };




  buildSplashScreen();
};

window.addEventListener('load', main);