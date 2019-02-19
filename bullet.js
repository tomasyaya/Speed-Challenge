'use strict'

class Bullet {
  constructor(canvas, x){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.size = 5;
    this.x = x + 5;
    this.y = this.canvas.height - 80;
    this.direction = -1;
    this.speed = 5;
    this.blast = new Image();
    this.blast.src = 'Images/blast.png';
  }

  update(){
    this.y = this.y + this.direction * this.speed;
  }

  draw() {
    
    this.context.drawImage(this.blast,this.x, this.y, this.size, this.size);
    
  }

  
}