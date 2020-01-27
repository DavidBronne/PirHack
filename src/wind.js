'use strict';

function Wind(canvas, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    //this.angle = angle;
    this.speed = 0;
}

// Wind rose to be drawn
// Wind.prototype.draw = function() {
//     this.ctx.fillStyle = '#FF6F27';
//     // fillRect(x, y, width, height)
//     this.ctx.fillRect(
//         this.x,
//         this.y,
//         this.size,
//         this.size,
//     );
// };
