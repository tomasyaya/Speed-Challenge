'use strict'

class Car {
  constructor(canvas, x){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.size = 15;
    this.direction = 1;
    this.speed = 2;
    this.x = x;
    this.y = 0;
  }

  update(){
    this.y = this.y + this.direction * this.speed;
  };

  draw(){
    this.context.fillStyle = "black";
    this.context.fillRect(this.x, this.y, this.size + 20, this.size);
  };

  
}