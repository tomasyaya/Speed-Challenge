'use strict'

class Car {
  constructor(canvas, x){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.size = 10;
    this.direction = 1;
    this.speed = 5;
    this.x = x;
    this.y = this.canvas.height;
  }

  update(){
    this.y = this.y + this.direction * this.speed;
  };

  draw(){
    this.context.fillStyle = "black";
    this.context.fillRect(this.x, this.y + this.size / 2, this.size, this.size);
  };

  
}