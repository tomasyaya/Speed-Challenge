'use strict'

class Player {
  constructor(canvas){
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.size = 20;
  this.x = this.canvas.width / 2;
  this.y = this.canvas.height - this.size/2;
  this.direction = 0;
  this.speed = 5;
  this.live = 1;
}

  update() {
    this.x = this.x + this.direction * this.speed;
    console.log(this.x)
  };

  draw() {
    this.context.fillStyle = "red";
    this.context.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
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