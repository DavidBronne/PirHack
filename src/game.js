'use strict'

class Game {
    constructor(){
        this.canvas = null;
        this.ctx = null;
        // this.enemies = [];
        this.player = null;
        this.island = null;
        this.windRose = null;
        this.gameIsOver = false;
        this.gameScreen = null;
        this.windAngle = 90;
        this.counter = 0;
        this.score = 0;
        this.windArrow = null;
    }

    start () {
        // Save reference to canvas and container. Create ctx
        this.canvasContainer = document.querySelector('.canvas-container');
        this.canvas = this.gameScreen.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
      
        // Save reference to the score and lives elements
        this.livesElement = this.gameScreen.querySelector('.lives .value');
        this.scoreElement = this.gameScreen.querySelector('.score .value');
        this.windAngleElement = this.gameScreen.querySelector('.wind-direction .value');
      
        // Set the canvas dimensions to match the parent
        this.containerWidth = this.canvasContainer.offsetWidth;
        this.containerHeight = this.canvasContainer.offsetHeight;
        this.canvas.setAttribute('width', this.containerWidth);
        this.canvas.setAttribute('height', this.containerHeight);
      
          // Create a new player
          //              island
          //              windRose 
          this.player = new Player(this.canvas, 4);
          this.island = new Island(this.canvas);
          this.windRose = new WindRose(this.canvas);
          this.windArrow = new WindArrow(this.canvas);
      
      
            // Add event listener for moving the player
              this.handleKeyDown = (event) => {
              if (event.key === 'ArrowLeft') {
                  console.log('LEFT');
                  this.player.setDirection('left');
              }
              else if (event.key === 'ArrowRight') {
                  console.log('RIGHT');
                  this.player.setDirection('right');
              };
            };
            // Start the canvas requestAnimationFrame loop
            this.startLoop();
            
          // Add event listener for moving the player
          // Any function provided to eventListener 
          // is always called by window (this === window)!
          // So, we have to bind `this` to the `game` object,
          // to prevent it from pointing to the `window` object
          document.body.addEventListener(
              'keydown',
              this.handleKeyDown
          );
          
        };


// Create `ctx`, a `player` and start the Canvas loop


 startLoop () {
    let loop = () => {
       // console.log('inloop');
    
        // Player Position Update
        this.player.updatePosition()
        
        this.counter++;
        // Data control - console.log()
        if (this.counter % 60 === 0) {
            console.log('x',this.player.x);
            console.log('y',this.player.y);
            console.log('windAngle',this.player.windAngle);
            console.log('boatAngle',this.player.boatAngle);
            console.log('Delta',String(this.player.anglePlayerWind));
        }

        // wind shift
        if (this.counter % 120 === 0) {
            this.counter = 0;
            // this.player.shiftWindAngle();
            this.windAngle = this.player.shiftWindAngle();
            console.log('this.windAngle :', this.windAngle);
        }
        
        // Collision
        this.player.handleScreenCollision()
        this.checkCollisions()


// 2. CLEAR THE CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
// 3. UPDATE THE CANVAS

    // Draw the player
    this.island.draw();

    this.windRose.draw();

    this.player.draw();

    this.windArrow.draw(this.player.windAngle);
    console.log('this.player.windAngle',typeof this.player.windAngle);
    // Draw the enemies

//  5. Update Game data/stats
    this.updateGameStats();
    // 4. TERMINATE LOOP IF GAME IS OVER
        if (!this.gameIsOver) {
            window.requestAnimationFrame(loop);
        }


    };
        	// As loop function will be continuously invoked by
// the `window` object- `window.requestAnimationFrame(loop)`
// we have to bind the function so that value of `this` is 
// pointing to the `game` object, like this:
// var loop = (function(){}).bind(this);
    
    window.requestAnimationFrame(loop);
} 


checkCollisions  () {
    //with Island tratget
 
    if (this.player.didCollide(this.island)) {
        this.score += 1;
        this.endGameStatus = 'win';
        this.gameEnd();
    }
    //with screen frame
    else if (this.player.lives === 0) {
        this.endGameStatus = 'lost';
        this.gameEnd();
    }
};

updateGameStats () {
    //this.score += 1;
    this.livesElement.innerHTML = this.player.lives;
    this.scoreElement.innerHTML = this.player.score;
    this.windAngleElement.innerHTML = this.player.windAngle;
  };


passGameOverCallback (gameOver) {
    this.onGameOverCallback = gameOver;
};

gameEnd () {
    this.gameIsOver = true;
    if (this.endGameStatus === 'win') {
        console.log('win');
        this.onGameOverCallback(this.score,this.endGameStatus);

    }
      // Call the gameOver function from `main` to show the Game Over Screen
     else if (this.endGameStatus === 'lost') {
        console.log('lost');
        this.onGameOverCallback(this.score,this.endGameStatus);
        //console.log('this.endGameStatus :', this.endGameStatus);
    }

};

removeGameScreen () {
    this.gameScreen.remove(); // remove() is the DOM method which removes the DOM Node  
  };




}