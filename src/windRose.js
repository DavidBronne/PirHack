function WindRose(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 800;
    this.x = canvas.width * 0.1;
    this.y = canvas.height * 0.1;
}

WindRose.prototype.draw = function() {
    
    this.imgWindRose = new Image();   // Create new <img> element
    this.imgWindRose.src = './images1/windRose.png';
    this.ctx.drawImage(this.imgWindRose, this.x, this.y, this.size, this.size);
    };