'use strict'

class Game {
  constructor(canvas, state){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.player;
    this.cars = [];
    this.isGameOver = false;
    this.score = 0;
    this.state = state;
  }
  

   startLoop(){

    this.player = new Player(this.canvas);
    
    console.log(this.state)
    const loop = ()=> {

      if(Math.random() > 0.98) {
        const x = Math.random() * this.canvas.width;
        if((x > 15  && x < 130) || (x > 160 && x < 290) ) 
        {this.cars.push(new Car(this.canvas, x))}
        
      };

      
      this.actualizarScore()
      this.scoreCount();
      this.checkCollision();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      if(!this.isGameOver)
      {window.requestAnimationFrame(loop);}
    };

    window.requestAnimationFrame(loop);
  };


  updateCanvas() {
    this.player.update();
    this.cars.forEach(car => {car.update()});
  };

  drawCanvas() {
    this.player.draw();
    this.cars.forEach(car => {car.draw()});
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
    this.cars.forEach((car) => {
      if(this.player.checkCollision(car)){
        this.isGameOver = true;
        this.onGameOver()
      }
    })
  }
  checkScreenCollision(){
    if(this.player.collision){
      this.isGameOver = true;
      this.onGameOver(this.state)
      console.log(this.state);
    }
  };

  gameOverCallback(callback){
    this.onGameOver = callback
  };

  changeScore(callback){
    this.actualizarScore = callback
  }


  scoreCount(){
    this.score = this.score + 10
    console.log(this.score)
    GLOBALSCORE = this.score;
  }
}


