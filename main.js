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
      <h2 class="score-title"></h2>
      <canvas class="main-canvas"></canvas>
      </screen>
    `);

    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);


    const scoreSum = () => {
      let scoreTitle = document.querySelector('.score-title');
      scoreTitle.innerText = `Your score is ${game.score}`
    }

    


    const game = new Game(canvasElement);
    game.gameOverCallback(buildGameOverScreen)
    game.changeScore(scoreSum)
    game.startLoop();
    
    

    const setPlayerDirection = (event)=> {
      if(event.code === 'ArrowLeft') {
        game.player.setDirection(-1)
        game.player.move = true;
      } else if(event.code === 'ArrowRight') {
        game.player.setDirection(1);
        game.player.move = true;
      }
    };

    const allowMovement = (event) => {
      if(event.code === 'ArrowLeft'){
        game.player.move = false;
      } else if(event.code === 'ArrowRight'){
        game.player.move = false;
      }
    }
    document.addEventListener('keydown', setPlayerDirection)
    document.addEventListener('keyup', allowMovement)
    
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