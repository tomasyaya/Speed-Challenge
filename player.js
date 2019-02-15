'use strict'

class Player {
  constructor(canvas){
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.size = 20;
  this.x = this.canvas.width / 2;
  this.y = this.canvas.height - this.size / 2;
  this.direction = 0;
  this.speed = 5;
  this.live = 1;
  this.character = new Image;
  this.character.src = 'Images/car5.png';
  
}

  update() {
    this.x = this.x + this.direction * this.speed;
    
  };

  draw() {
    this.context.fillStyle = "red";
    this.context.drawImage(this.character, this.x, this.y, this.size, this.size);
    this.context.fillRect(this.x - this.size / 2, this.y, this.size, this.size);
  };

  setDirection(direction) {
    this.direction = direction;
  }

  checkScreen() {
    if(this.x > 298) {
      this.direction = -1;
    } else if(this.x < 2) {
      this.direction = 1;
    }
  };

  checkCollision(car){
    const collideRight = this.x + this.size / 2 > car.x - car.size / 2;
    const collideLeft = this.x - this.size / 2 < car.x + car.size / 2;
    const collideTop = this.y - this.size / 2 < car.y + car.size / 2;
    const collideBottom = this.y + this.size / 2 > car.y - car.size / 2;

    if(collideRight && collideLeft && collideBottom && collideTop) {
      return true
    }

    return false;
  };

  

}