'use strict'

class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.player;
    this.cars = [];
    this.isGameOver = false;

  }

   startLoop(){

    this.player = new Player(this.canvas);

    const loop = ()=> {

      if(Math.random() > 0.95) {
        const x = Math.random() * (this.canvas.width + 150);
        if(x > this.canvas.width / 2 - 150 && x < this.canvas.width / 2 + 150)
        {this.cars.push(new Car(this.canvas, x))}
        
      };

      this.checkCollision();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      window.requestAnimationFrame(loop);
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
  }

  gameOver(){

  };

}