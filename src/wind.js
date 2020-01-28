'use strict';

function Wind(canvas, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    //this.angle = angle;
    this.speed = speed;
}

Wind.prototype.upadteSpeed = function(speed) {
    this.speed = speed;
}


