'use strict'

class Player {
    constructor(canvas, lives){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.lives = lives;
        this.size = 100;
        this.x = canvas.width * 0.1;
        this.y = canvas.height * 0.9;
        this.boatAngle = 270;
        this.windAngle = 90;
        this.windSpeed = 1;
        this.anglePlayerWind = 0;
        this.score = 0;
        this.imgBoat;
    }

    // setDirection()
    setDirection (direction) {
        // +30 deg , -30 deg
        if (this.boatAngle === 0 && direction ==='left') this.boatAngle = 330;
        else if (this.boatAngle === 330 && direction ==='right') this.boatAngle = 0;
        
        else if (direction ==='left') this.boatAngle = this.boatAngle-30
        else if (direction === 'right') this.boatAngle = this.boatAngle + 30;
    };




      
      shiftWindAngle (){
          const windAnglelist = [0,30,60,90,120,150,180,210,240,270,360];

          this.windAngle = windAnglelist[Math.floor(Math.random() * windAnglelist.length)]; //to be triggered acc. to level
          return this.windAngle;
      }

      compareBoatWindAngle () {
          this.anglePlayerWind = this.boatAngle - this.windAngle;
      }

      updatePosition () {

            // Tables: cos , sin
    const cosTable = {
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

      const sinTable = {
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
      
          this.compareBoatWindAngle();
          
          switch (String(this.anglePlayerWind)) {
              case '180':
              case '-180':
                this.x = this.x + (this.windSpeed * 2) * cosTable[this.windAngle];
                this.y = this.y + (this.windSpeed * 2) * sinTable[this.windAngle];
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
                this.x = this.x + (this.windSpeed * 1,5) * cosTable[this.boatAngle];
                this.y = this.y + (this.windSpeed * 1,5) * sinTable[this.boatAngle];
                break;
                    
              case '60':
              case '-60':
              case '120':
              case '-120':
              case '-240':
              case '240':
              case '-300':
              case '300':
                this.x = this.x + (this.windSpeed * 1,7) * cosTable[this.boatAngle];
                this.y = this.y + (this.windSpeed * 1,7) * sinTable[this.boatAngle];
                break;
      
              case '90':
              case '-90':
              case '-270':
              case '270':
                this.x = this.x + (this.windSpeed * 2) * cosTable[this.boatAngle];
                this.y = this.y + (this.windSpeed * 2) * sinTable[this.boatAngle];    
                break;    
            }
      }

      didCollide (island) {
        let playerLeft = this.x;
        let playerRight = this.x + this.size;
        let playerTop = this.y;
        let playerBottom = this.y + this.size;
      
        let islandLeft = island.x;
        let islandRight = island.x + island.size;
        let islandTop = island.y;
        let islandBottom = island.y + island.size;
      
        // Check if the island intersects any of the player's sides
        let crossLeft = islandLeft <= playerRight && islandLeft >= playerLeft;
          
        let crossRight = islandRight >= playerLeft && islandRight <= playerRight;
        
        let crossBottom = islandBottom >= playerTop && islandBottom <= playerBottom;
        
        let crossTop = islandTop <= playerBottom && islandTop >= playerTop;
      
        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
          return true;
        }
        return false;
      };

      // handleScreenCollision()
      handleScreenCollision () {
          
           if (this.y + this.size > this.canvas.height || this.y < 0 || this.x < 0 || this.x + this.size > this.canvas.width) {
              this.removeLife();
              this.x = this.canvas.width * 0.1;
              this.y = this.canvas.height * 0.75;
          }
      };

      // removeLife()
      removeLife () {
          this.lives -=1;
          console.log('this.lives', this.lives);
      };

      draw () {
          
          this.imgBoat = new Image();   // Create new <img> element
          
          switch (this.boatAngle) {
              case 0:
                  this.imgBoat.src = './images1/pirate000.png'; // Set source path
                  break;
              case 30:
                  this.imgBoat.src = './images1/pirate030.png'; // Set source path
                  break;
              case 60:
                  this.imgBoat.src = './images1/pirate060.png'; // Set source path
                  break;
              case 90:
                  this.imgBoat.src = './images1/pirate090.png'; // Set source path
                  break;
              case 120:    
                  this.imgBoat.src = './images1/pirate120.png'; // Set source path
                  break;
              case 150:
                  this.imgBoat.src = './images1/pirate150.png'; // Set source path
                  break;
              case 180:
                  this.imgBoat.src = './images1/pirate180.png'; // Set source path
                  break;
              case 210:
                  this.imgBoat.src = './images1/pirate210.png'; // Set source path
                  break;
              case 240:
                  this.imgBoat.src = './images1/pirate240.png'; // Set source path
                  break;
              case 270:
                  this.imgBoat.src = './images1/pirate270.png'; // Set source path
                  break;
              case 300:    
                  this.imgBoat.src = './images1/pirate300.png'; // Set source path
                  break;
              case 330:
                  this.imgBoat.src = './images1/pirate330.png'; // Set source path
                  break;
              default:
                  this.imgBoat.src = './images1/pirate270.png'; // Set source path
          };
      
          this.ctx.drawImage(this.imgBoat, this.x, this.y, this.size, this.size);
      
      };


}







