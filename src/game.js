'use strict'

function Game() {
    this.canvas = null;
    this.ctx = null;
    // this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.wind = null;
    
}

// Create `ctx`, a `player` and start the Canvas loop

Game.prototype.start = function () {
  // Save reference to canvas and container. Create ctx
  this.canvasContainer = document.querySelector('.canvas-container');
  this.canvas = this.gameScreen.querySelector('canvas');
  this.ctx = this.canvas.getContext('2d');

  // Save reference to the score and lives elements
  this.livesElement = this.gameScreen.querySelector('.lives .value');
  this.scoreElement = this.gameScreen.querySelector('.score .value');

  // Set the canvas dimensions to match the parent
  this.containerWidth = this.canvasContainer.offsetWidth;
  this.containerHeight = this.canvasContainer.offsetHeight;
  this.canvas.setAttribute('width', this.containerWidth);
  this.canvas.setAttribute('height', this.containerHeight);

    // Create a new player and the wind for the current game
    this.player = new Player(this.canvas, 3);
    this.wind = new Wind(this.canvas, 1);

      // Add event listener for moving the player
    this.handleKeyDown = function(event) {
        if (event.key === 'ArrowLeft') {
            console.log('LEFT');
            this.player.setDirection('left');
        }
        else if (event.key === 'ArrowRight') {
            console.log('RIGHT');
            this.player.setDirection('right');
        };
    };
    
    // Add event listener for moving the player
    // Any function provided to eventListener 
    // is always called by window (this === window)!
    // So, we have to bind `this` to the `game` object,
    // to prevent it from pointing to the `window` object
    document.body.addEventListener(
        'keydown',
        this.handleKeyDown.bind(this)
    );
    
    // Start the canvas requestAnimationFrame loop
    this.startLoop();
};

Game.prototype.startLoop = function () {
    var loop = function() {
        console.log('in loop');

// 1. UPDATE THE STATE OF PLAYER AND ENEMIES
  
// WIND SPEED
    // 0.0.0 Wind speed Update
        // this.wind.speedUpdate() --> THIS WILL UPDATE this.wind.speed
    //0.0.1 pass the wind speed to the player
        // this.player.windSpeed (initialise and assign the player wind property) = this.wind.speed
            


// WIND ANGLE ---------------
    // 0.0.0 Wind angle Update
        // this.wind.angleUpdate() --> THSI WILL UPDATE this.wind.angle
    //0.0.1 pass the wind angle to the player
        // this.player.windAngle (initialise and assign the wind property) = this.wind.angle
    
        // 0.1. Player Position Update
    

    this.player.updatePosition();
    this.player.handleScreenCollision()
    // 1. Create new enemies randomly
    
    // 2. Check if player had hit any enemy (check all enemies)
    
    // 3. Check if player is going off the screen

    // 4. Move existing enemies

    // 5. Check if any enemy is going of the screen


// 2. CLEAR THE CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    



// 3. UPDATE THE CANVAS
    // Draw the player
    this.player.draw();
    console.log(this.player.x, this.player.y);
    // Draw the enemies





        if (!this.gameIsOver) {
            window.requestAnimationFrame(loop);
        }
    }.bind(this);
        	// As loop function will be continuously invoked by
// the `window` object- `window.requestAnimationFrame(loop)`
// we have to bind the function so that value of `this` is 
// pointing to the `game` object, like this:
// var loop = (function(){}).bind(this);
    
    window.requestAnimationFrame(loop);
} 


Game.prototype.checkCollisions = function () {};

Game.prototype.updatyeGameStats = function () {};

Game.prototype.pasGameOverCallback = function () {};

Game.prototype.gameOver = function () {};

Game.prototype.removeGameScreen = function () {};