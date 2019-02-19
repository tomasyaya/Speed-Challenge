'use strict'

class Bullet {
  constructor(canvas, x){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.size = 2;
    this.x = x;
    this.y = this.canvas.height - 80;
    this.direction = -1;
    this.speed = 5;
  }

  update(){
    this.y = this.y + this.direction * this.speed;
  }

  draw() {
    this.context.fillStyle = "white";
    this.context.fillRect(this.x ,this.y, this.size, this.size);
  }

  
}