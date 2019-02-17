'use strict'

var GLOBALSCORE = 0;

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
        <button class="start-game-button">Easy</button>
        <button class="start-game-medium">Medium</button>
        <button class="start-game-hard">Hard</button>
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
      <section class="game-container">
        <h2 class="score-title"></h2>
        <section class="game-screen">
          <canvas class="main-canvas"></canvas>
        </section>
      </section>
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
        <h2 class="score-title-gameover"></h2>
        <button class="restart-button">Restart</button>
        <button class="change-difficulty-button">Change Difficulty</button>
      </section>
    `);

    const scoreInGameOver = (event) => {
      let scoreTitle = document.querySelector('.score-title-gameover');
      scoreTitle.innerText = `Your score is ${event}`
    }

    scoreInGameOver(GLOBALSCORE);

    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', buildGameScreen);
    const changeButton = document.querySelector('.change-difficulty-button');
    changeButton.addEventListener('click', buildSplashScreen);

  };




  buildSplashScreen();
};

window.addEventListener('load', main);