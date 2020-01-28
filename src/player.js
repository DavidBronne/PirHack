'use strict'

function Player(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.size = 50;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.direction = 0;
    this.apparentSpeed = 0;
    this.score = 0;
    
}

// setDirection()
Player.prototype.setDirection = function(direction) {
    // +1 down -1 up
    if (direction ==='left' && this.direction > -90 ) this.direction = this.direction-30
    else if (direction === 'right' && this.direction < 90) this.direction = this.direction + 30;

};

Player.prototype.updateApparentSpeed = function() {
    switch (this.direction) {
        case 0:
            this.apparentSpeed = 1;
            break;
        case -30:
            this.apparentSpeed = -1;
            break;
        case 30:
            this.apparentSpeed = -1;
            break;
        case -90:
            this.apparentSpeed = -1;
            break;
        case 90:    
            this.apparentSpeed = -1;
            break;
        case -60:
            this.apparentSpeed = -2;
            break;
        case 60:
            this.apparentSpeed = -2;
            break;

    }
    console.log('this.apparentSpeed', this.apparentSpeed);
}

Player.prototype.updatePosition = function() {
    
    switch (this.direction) {
        case 0:
            this.x = this.x;
            this.y = this.y + this.apparentSpeed;
            break;
        case -30:
            this.x = this.x + this.apparentSpeed * 1;
            this.y = this.y + this.apparentSpeed * 2;
            break;
        case 30:
            this.x = this.x + this.apparentSpeed * -1;
            this.y = this.y + this.apparentSpeed * 2;
            break;
        case -90:
            this.x = this.x + this.apparentSpeed * 2;
            this.y = this.y;
            break;
        case 90:    
            this.x = this.x + this.apparentSpeed * -2;
            this.y = this.y;
            break;
        case -60:
            this.x = this.x + this.apparentSpeed * 2;
            this.y = this.y + this.apparentSpeed * 1;
            break;
        case 60:
            this.x = this.x + this.apparentSpeed * -2;
            this.y = this.y + this.apparentSpeed * 1;
            break;
    }
}

//Player.prototype.didCollide = function(enemy) {};

// handleScreenCollision()
Player.prototype.handleScreenCollision = function() {
    
    var screenLeft = 0;
    var screenRight = this.canvas.width - 50;

    if (this.x < screenLeft) this.direction = 90;
    else if (this.x > screenRight) this.direction = -90;

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


