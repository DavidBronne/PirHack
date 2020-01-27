'use strict'

function Player(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.size = 50;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.direction = 0;
    this.playerSpeed = 5;
    this.windSpeed = 1;
}

// setDirection()
Player.prototype.setDirection = function(direction) {
    // +1 down -1 up
    if (direction ==='left') this.direction = -1;
    else if (direction === 'right') this.direction = 1;
};

Player.prototype.updatePosition = function() {
    console.log(this.direction, this.playerSpeed);
    this.x = this.x + this.direction * this.playerSpeed;
    this.y = this.y + this.windSpeed;
}

//Player.prototype.didCollide = function(enemy) {};

// handleScreenCollision()
Player.prototype.handleScreenCollision = function() {
    
    var screenLeft = 0;
    var screenRight = this.canvas.width - 50;

    if (this.x < screenLeft) this.direction = 0;
    else if (this.x > screenRight) this.direction = 0;
};

// removeLife()
Player.prototype.removeLife = function() {
    this.lives -=1;
};

Player.prototype.draw = function() {
    this.ctx.fillStyle = '#66D3FA';
    // fillRect(x, y, width, height)
    this.ctx.fillRect(
        this.x,
        this.y,
        this.size,
        this.size,
    );
};


