'use strict'

class Player {
  constructor(canvas, player){
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.size = 35;
  this.sizeY = 25
  this.x = this.canvas.width / 2;
  this.y = this.canvas.height - 80;
  this.direction = 0;
  this.speed = 2;
  this.live = 1;
  this.move = false;
  this.character = new Image;
  this.character.src = 'Images/car5.png';
  this.characterTwo = new Image;
  this.characterTwo.src = 'Images/car610.png';
  this.collision = false;
  this.playerSelect = '';
}

  update() {
    if(this.move === true){
    this.x = this.x + this.direction * this.speed;
    }
  };


  draw() {
    this.context.fillStyle = "red";
    if(this.playerSelect === 'player one'){
    this.context.drawImage(this.character, this.x, this.y, this.size, this.size + this.sizeY);
    } else if(this.playerSelect === 'player two') {
      this.context.drawImage(this.characterTwo, this.x, this.y, this.size, this.size + this.sizeY);
    }
  };

  setDirection(direction) {
    this.direction = direction;
  }

  checkScreen() {
    if(this.x > 320) {
      this.direction = -1;
      this.collision = true;
    } else if(this.x < 2) {
      this.direction = 1;
      this.collision = true;
    }
  };

  checkCollision(car){
    const collideRight = this.x + this.size + 5 > car.x;
    const collideLeft = this.x  < car.x + car.size + 5;
    const collideTop = this.y  < car.y + car.sizeY + car.size + 5;
    const collideBottom = this.y + this.size +  this.sizeY > car.y + car.sizeY;

    if(collideRight && collideLeft && collideBottom && collideTop) {
      return true
    }

    return false;
  };

  

}