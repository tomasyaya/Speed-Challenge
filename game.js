'use strict'

class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.cars = [];
    this.isGameOver = false;

  }

   StartLoop(){

    this.player = new Player(canvas);

    const loop = ()=> {


      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  };


  updateCanvas() {
    this.player.update();
  };

  drawCanvas() {
    this.player.draw();
  };

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  gameOver(){

  };

}