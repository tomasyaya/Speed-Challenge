'use strict'

class Player {
  constructor(canvas){
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.size = 20;
  this.x;
  this.y;
  this.direction = 0;
  this.speed;
  this.live = 1;
}

  update() {
    this.x = this.x + this.direction * this.speed;
  };

  draw() {
    this.context.fillStyle = "red";
    this.context.fillRect(this.canvas.width / 2, this.canvas.height - 10, this.size, this.size);
  };

  setDirection(direction) {
    this.direction = direction;
  }

  checkScreen() {
    if(this.x > this.canvas.width / 2 + 150) {
      this.direction = -1;
    } else if(this.x < this.canvas.width / 2 - 150) {
      this.direction = 1;
    }
  };

  checkCollision(){

  };

  

}