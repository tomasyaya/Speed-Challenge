'use strict'


// --------------------- GLOBAL VARIABLES --------------------//

var GLOBALSCORE = 0;
var HIGHSCORE = 0;
var GLOBALSTATE = '';
var GLOBALPLAYER = 'player one';
var TOPSCORES = [10];

// ----------------------- MAIN FUNCTION ---------------------//

const main = () => {

  const buildDom = (html) =>{
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };  

  
// ---------------------- SPLASH SCREEN --------------------------//

  const buildSplashScreen = () => {
    const splashScreen = buildDom(`
      <section class="splash-screen">
        <h1>Speed Challenge</h1>
        <button class="start-game-button">Easy</button>
        <button class="start-game-medium">Medium</button>
        <button class="start-game-hard">Hard</button>
        <button class="select-player">Select Player</button>
      </section>
    `)
    
    const startButton = document.querySelector('.start-game-button');
    startButton.addEventListener('click', () => {
      let state = 'easy';
      GLOBALSTATE = 'easy';
      buildGameScreen(state);
    });
    const mediumButton = document.querySelector('.start-game-medium');
    mediumButton.addEventListener('click', ()=>{
       let state = 'medium';
       GLOBALSTATE = 'medium';
      buildGameScreen(state); 
    });
    const hardButton = document.querySelector('.start-game-hard');
    hardButton.addEventListener('click', ()=>{
      let state = 'hard';
      GLOBALSTATE = 'hard';
      buildGameScreen(state); 
    });
    const playerButton = document.querySelector('.select-player');
    playerButton.addEventListener('click', buildSelecPlayerScreen);

  };

  // ----------------------- PLAYER SCREEN -------------------------//

  const buildSelecPlayerScreen = (event) => {
    const playerScreen = buildDom(`
      <section class="player-container">
      <h1>Select Your Player</h1>
      <div class='main-div'>
        <div class='car-one'>
          <img id="red-car" src='Images/car5.png'>
          <button class='player-one'>RED</button>
        </div>
        <div class='car-two'>  
          <img id="gray-car" src='Images/car610.png'>
          <button class='player-two'>GRAY</button>
        </div>  
      </div>    
      </section>
    `);

    const playerOne = document.querySelector('.player-one');
    playerOne.addEventListener('click', function(){
      GLOBALPLAYER = 'player one';
      buildSplashScreen();
    });
    const playerTwo = document.querySelector('.player-two');
    playerTwo.addEventListener('click', function(){
      GLOBALPLAYER = 'player two';
      buildSplashScreen();
    });
  }

  // ------------------------ GAME SCREEN ------------------------------

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
   

    // --------------- STARTS THE GAME ------------------

    const game = new Game(canvasElement, state);
    game.gameOverCallback(buildGameOverScreen)
    game.changeScore(scoreSum)
    game.startLoop();
    game.player.playerSelect = GLOBALPLAYER;
    
    
    
    
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
        };

        document.addEventListener('keydown', setPlayerDirection)
        document.addEventListener('keyup', allowMovement)
        document.addEventListener('keydown', function(event){
          if(event.code === 'Space'){
            if(game.pauseGame === true){
              game.pauseGame = false;
            } else if(game.pauseGame === false){
              game.pauseGame = true;
            }
          } 
        });
    
    } else if(game.state === 'hard'){
        const setHardDirection = (event)=> {
          game.player.move = true;
          if(event.code === 'ArrowLeft') {
            game.player.setDirection(-1) 
          } else if(event.code === 'ArrowRight') {
            game.player.setDirection(1);
          }

          document.addEventListener('keydown', function(event){
            if(event.code === 'Space'){
              if(game.pauseGame === true){
                game.pauseGame = false;
              } else if(game.pauseGame === false){
                game.pauseGame = true;
              }
            } 
          });
      };

      document.addEventListener('keydown', setHardDirection)
      document.addEventListener('keydown', function(event){
        if(event.code === 'KeyS'){
          game.bulletStatus = true;
          console.log(event)
          console.log(game.bulletStatus);
        }
      });
      document.addEventListener('keyup', function(event){
        if(event.code === 'KeyS'){
          game.bulletStatus = false;
          console.log(event)
          console.log(game.bulletStatus);
        };
      })
    };

  };

// ------------------- GAME OVER SCREEN ----------------------------//

  const buildGameOverScreen = (state) => {
    const gameOverScreen = buildDom(`
      <section class="game-over-screen">
        <h1>Game Over</h1>
        <h2 class="score-title-gameover"></h2>
        <button class="restart-button">Restart</button>
        <button class="change-difficulty-button">Change Difficulty</button>
        <h2 class='high-score'></h2>
        <button class="high-score-button">Show High Score</button>
      </section>
    `);
    

    const scoreInGameOver = (event) => {
      let scoreTitle = document.querySelector('.score-title-gameover');
      scoreTitle.innerText = `Your score was ${event}`
    }

    scoreInGameOver(GLOBALSCORE);

    const highScore = (event) => {
      let highScore = document.querySelector('.high-score');
      highScore.innerText = `High Score ${event}`;
    }

    const checkHighScore = (event) => {
      if(event > HIGHSCORE) {
        HIGHSCORE = event;
      };
    }

    checkHighScore(GLOBALSCORE);

    highScore(HIGHSCORE);

    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', function(){
      buildGameScreen(GLOBALSTATE)
    })
    const changeButton = document.querySelector('.change-difficulty-button');
    changeButton.addEventListener('click', buildSplashScreen);


  // ----------------- HIGH SCORES ----------------------
    const buildHighScoresScreen = () =>{
      const highScoreScreen = buildDom(`
          <section class="high-score-screen">
            <ul class="high-score-ul">
            </ul>
            <h1>Hello</h1>
            
          </section>
       `);
    };

     const localStorageScores = (event) => {
        if(localStorage.getItem('Score') !== null){
          let localScores = JSON.parse(localStorage.getItem('Score'));

          localScores.push(event);

          let sortArr = localScores.sort(function(a,b){return b - a;})
            if(sortArr.length >= 5) {
              const slicedArray = sortArr.slice(0, 5)
              localStorage.setItem('Score', JSON.stringify(slicedArray));
            } else {
              localStorage.setItem('Score', JSON.stringify(sortArr));
            } 
        } 
        else {
          const numberArray = [event]
          localStorage.setItem('Score', JSON.stringify(numberArray));
        }
     }
     
     localStorageScores(GLOBALSCORE);

     const highScoresButton = document.querySelector('.high-score-button');
     highScoresButton.addEventListener('click', () => {
      buildHighScoresScreen();
      fillHighScoreUl();
     });

     const fillHighScoreUl = () => {
       let highScoreArr = JSON.parse(localStorage.getItem('Score'));
       highScoreArr.forEach(val => {
         let highScoreLi = document.createElement('li');
         let highScoreUl = document.querySelector('.high-score-ul');
         highScoreLi.innerText = `${val}`;
         highScoreUl.appendChild(highScoreLi);
       });

      }
   



  };








//// SPLASH SCREEN STARTS ////
  buildSplashScreen();
};

window.addEventListener('load', main);