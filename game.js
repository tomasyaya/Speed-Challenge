'use strict'

class Game {
  constructor(canvas, state){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.player;
    this.cars = [];
    this.bullets = [];
    this.isGameOver = false;
    this.score = 0;
    this.scores = [10];
    this.state = state;
    this.player = '';
    this.pauseGame = false;
    this.bulletStatus = false;
    
  }
  

   startLoop(){

    this.player = new Player(this.canvas, this.player);
    this.pushTopScore(GLOBALSCORE);

    
    const loop = ()=> {

      if(this.pauseGame === false){
      if(Math.random() > 0.98) {
        const x = Math.random() * this.canvas.width;
        if((x > 15  && x < 130) || (x > 160 && x < 290) ) 
        {this.cars.push(new Car(this.canvas, x))} 
      };

      if(GLOBALSTATE === 'hard' && this.score > 100 && this.bulletStatus === true) {
        this.bullet = new Bullet(this.canvas, this.player.x)
        this.bullets.push(this.bullet);
      };
      
      
      this.actualizarScore();
      this.scoreCount();
      this.checkCollision();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
    };
      
      if(!this.isGameOver)
      {window.requestAnimationFrame(loop);}
      
  };
    window.requestAnimationFrame(loop);
  };




  updateCanvas() {
    this.player.update();
    this.bullets.forEach(bullet => {bullet.update()});
    this.cars.forEach(car => {car.update()});
  };

  drawCanvas() {
    this.player.draw();
    this.bullets.forEach(bullet => {bullet.draw()});
    this.cars.forEach(car => {
      car.draw()
      car.removeHitCar();
    });
  };

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  checkCollision(){
    if (this.state === 'easy') {
      this.player.checkScreen();
    } else if(this.state === 'medium' || this.state === 'hard') {
      this.player.checkScreen();
      this.checkScreenCollision();
    }
    this.cars.forEach((car, index) => {
      if(this.player.checkCollision(car)){
        this.isGameOver = true;
        this.onGameOver();
      } 
      this.bullets.forEach((bullet) => {
        if(car.checkCollision(bullet)){
          this.cars.splice(index, 1);
        }
      });
    })
  };

  checkScreenCollision(){
    if(this.player.collision){
      this.isGameOver = true;
      this.onGameOver(this.state);
    }
  };

  gameOverCallback(callback){
    this.onGameOver = callback;
  };

  changeScore(callback){
    this.actualizarScore = callback;
  };


  scoreCount(){
    this.score = this.score + 1;
    GLOBALSCORE = this.score;
  };

  pushTopScore(event){
    if(event > TOPSCORES[0]){
      TOPSCORES.push(event);
    }
    if(TOPSCORES.length > 5){
      TOPSCORES.shift();
    }
    TOPSCORES.sort(function(a,b){return a - b;});
  };

}


