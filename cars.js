'use strict'

class Car {
  constructor(canvas, x){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.size = 35;
    this.sizeY = 25;
    this.direction = 1;
    this.speed = 5;
    this.x = x;
    this.y = 0;
    this.policeCar = new Image();
    this.policeCar.src = 'Images/car4.png';
    this.taxiCar = new Image();
    this.taxiCar.src = 'Images/car1.png';
    this.blueCar = new Image();
    this.blueCar.src = 'Images/car2.png';
    this.grayCar = new Image();
    this.grayCar.src = 'Images/car3.png';
    this.whiteCar = new Image();
    this.whiteCar.src = 'Images/car6.png'
    this.cars = [this.policeCar, this.taxiCar, this.blueCar, this.grayCar, this.whiteCar];
    this.img = this.images(this.cars)
  }

  update(){
    this.y = this.y + this.direction * this.speed;
  };

  draw(){
    this.context.fillStyle = "black";
    this.context.drawImage(this.img, this.x, this.y, this.size, this.size + this.sizeY);
    
  };

  images(img){
    return img[Math.floor(Math.random()* (img.length - 1))]
  }
  
}