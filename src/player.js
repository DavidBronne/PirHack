'use strict'

function Player(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.size = 100;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.boatAngle = 270;
    this.windAngle = 90;
    this.windSpeed = 1;
    this.anglePlayerWind = 0;
    this.score = 0;
    this.imgBoat;
}



// setDirection()
Player.prototype.setDirection = function(direction) {
    // +30 deg , -30 deg
    if (this.boatAngle === 0 && direction ==='left') this.boatAngle = 330;
    else if (this.boatAngle === 330 && direction ==='right') this.boatAngle = 0;
    
    else if (direction ==='left') this.boatAngle = this.boatAngle-30
    else if (direction === 'right') this.boatAngle = this.boatAngle + 30;

};

var cosTable = {
    // -30: 0.866,
    // -60: 0.5,
    // -90: 0,
    // -120: -0.5,
    // -150: -0.866,
    // -180: -1,
    // -210: -0.866,
    // -240: -0.5,
    // -270: 0,
    // -300: 0.5,
    // -330: 0.866,
    0: 1,
    30: 0.866,
    60: 0.5,
    90: 0,
    120: -0.5,
    150: -0.866,
    180: -1,
    210: -0.866,
    240: -0.5,
    270: 0,
    300: 0.5,
    330: 0.866,
    360: 1
  }
  
  var sinTable = {
    // -30: -0.5,
    // -60: -0.866,
    // -90: -1,
    // -120: -0.866,
    // -150: -0.5,
    // -180: 0,
    // -210: 0.5,
    // -240: 0.866,
    // -270: 1,
    // -300: 0.866,
    // -330: 0.5,
    0: 0,
    30: 0.5,
    60: 0.866,
    90: 1,
    120: 0.866,
    150: 0.5,
    180: 0,
    210: -0.5,
    240: -0.866,
    270: -1,
    300: -0.866,
    330: -0.5,
    360: 0
  }
  
var windAnglelist = [0,30,60,90,120,150,180,210,240,270,360];

Player.prototype.shiftWindAngle = function(){
    this.windAngle = windAnglelist[Math.floor(Math.random() * windAnglelist.length)]; //to be triggered acc. to level

  }

Player.prototype.compareBoatWindAngle = function() {
    this.anglePlayerWind = this.boatAngle - this.windAngle;
}
 
Player.prototype.updatePosition = function() {

    this.compareBoatWindAngle();
    
    switch (String(this.anglePlayerWind)) {
        case '180':
        case '-180':
          this.x = this.x + (this.windSpeed/2) * cosTable[this.windAngle];
          this.y = this.y + (this.windSpeed/2) * sinTable[this.windAngle];
          break;
        case '0':
        case '360':
          this.x = this.x + (this.windSpeed) * cosTable[this.windAngle];
          this.y = this.y + (this.windSpeed) * sinTable[this.windAngle];
          break;
          
        case '30':
        case '-30':
        case '150':
        case '-150':
        case '-330':
        case '330':
        case '-210':
        case '210':
          this.x = this.x + (this.windSpeed/1,2) * cosTable[this.boatAngle];
          this.y = this.y + (this.windSpeed/1,2) * sinTable[this.boatAngle];
          break;
              
        case '60':
        case '-60':
        case '120':
        case '-120':
        case '-240':
        case '240':
        case '-300':
        case '300':
          this.x = this.x + (this.windSpeed/1,4) * cosTable[this.boatAngle];
          this.y = this.y + (this.windSpeed/1,4) * sinTable[this.boatAngle];
          break;

        case '90':
        case '-90':
        case '-270':
        case '270':
          this.x = this.x + (this.windSpeed/1,6) * cosTable[this.boatAngle];
          this.y = this.y + (this.windSpeed/1,6) * sinTable[this.boatAngle];    
          break;    
      }
}

//Player.prototype.didCollide = function(enemy) {};

// handleScreenCollision()
Player.prototype.handleScreenCollision = function() {
    
    var screenLeft = 0;
    var screenRight = this.canvas.width - 50;

    if (this.x < screenLeft) this.boatAngle = 90;
    else if (this.x > screenRight) this.boatAngle = -90;

    var screenTop = 0;
    var screenBottom = this.canvas.height;

    if (this.y < screenTop) {
        this.score++;
        console.log('this.score', this.score);
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
    }

    else if (this.y > screenBottom) {
        this.removeLife();
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
    }
};

// removeLife()
Player.prototype.removeLife = function() {
    this.lives -=1;
    console.log('this.lives', this.lives);
};

// Player.prototype.draw = function() {
//     this.ctx.fillStyle = '#66D3FA';
//     // fillRect(x, y, width, height)
//     this.ctx.fillRect(
//         this.x,
//         this.y,
//         this.size,
//         this.size,
//     );
// };

Player.prototype.draw = function() {
    
    this.imgBoat = new Image();   // Create new <img> element
    
    switch (this.boatAngle) {
        case 0:
            this.imgBoat.src = './images/Pirate0.png'; // Set source path
            break;
        case -30:
            this.imgBoat.src = './images/Pirate-30.png'; // Set source path
            break;
        case 30:
            this.imgBoat.src = './images/Pirate+30.png'; // Set source path
            break;
        case -90:
            this.imgBoat.src = './images/Pirate-90.png'; // Set source path
            break;
        case 90:    
            this.imgBoat.src = './images/Pirate+90.png'; // Set source path
            break;
        case -60:
            this.imgBoat.src = './images/Pirate-600.png'; // Set source path
            break;
        case 60:
            this.imgBoat.src = './images/Pirate+600.png'; // Set source path
            break;
        default:
            this.imgBoat.src = './images/Pirate0.png'; // Set source path
    };

    this.ctx.drawImage(this.imgBoat, this.x, this.y, this.size, this.size);

};




