function WindArrow(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 150;
    this.x = canvas.width / 2;
    this.y = canvas.height * 0.10;
}

WindArrow.prototype.draw = function() {
    
    this.imgWindArrow = new Image();   // Create new <img> element
    this.imgWindArrow.src = './images1/windRose.png';
    this.ctx.drawImage(this.imgWindArrow, this.x, this.y, this.size, this.size);
    };