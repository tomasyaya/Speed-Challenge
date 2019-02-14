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

    const loop = ()=> {

      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  };


  updateCanvas() {

  };

  drawCanvas() {

  };

  clearCanvas() {

  };

  gameOver(){

  };

}