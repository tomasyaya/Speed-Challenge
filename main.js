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
        <button class="start-game-button">Go Easy!</button>
        <button class="start-game-medium">I can do it!</button>
        <button class="start-game-hard">Do me and call me Martha</button>
      </section>
    `)
    
    const startButton = document.querySelector('.start-game-button');
    startButton.addEventListener('click', () => {
      let state = 'easy';
      buildGameScreen(state);
    });
    const mediumButton = document.querySelector('.start-game-medium');
    mediumButton.addEventListener('click', ()=>{
       let state = 'medium';
      buildGameScreen(state); 
    });
    const hardButton = document.querySelector('.start-game-hard');
    hardButton.addEventListener('click', ()=>{
      let state = 'hard';
      buildGameScreen(state); 
    })

  };

  const buildGameScreen = (state) =>{
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


    const game = new Game(canvasElement, state);
    game.gameOverCallback(buildGameOverScreen)
    game.changeScore(scoreSum)
    game.startLoop();
    
    
    if(game.state === 'easy' || game.state === 'medium'){
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
    
  }  else if(game.state === 'hard'){
      const setHardDirection = (event)=> {
        game.player.move = true;
        if(event.code === 'ArrowLeft') {
          game.player.setDirection(-1) 
        } else if(event.code === 'ArrowRight') {
          game.player.setDirection(1);
        }
        
      }
      document.addEventListener('keydown', setHardDirection)
    };

    
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