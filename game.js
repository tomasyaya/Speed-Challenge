'use strict'

class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.player;
    this.cars = [];
    this.isGameOver = false;
    this.score = 0;
  }
  

   startLoop(){

    this.player = new Player(this.canvas);
    
    
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
    this.player.checkScreen();
    this.cars.forEach((car) => {
      if(this.player.checkCollision(car)){
        this.isGameOver = true;
        this.onGameOver()
      }
    })
  }

  gameOverCallback(callback){
    this.onGameOver = callback
  };

  changeScore(callback){
    this.actualizarScore = callback
  }

  scoreCount(){
    this.score = this.score + 10
    console.log(this.score)
  }

}