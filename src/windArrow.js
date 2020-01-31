function WindArrow(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size = 150;
    this.x = canvas.width / 2;
    this.y = canvas.height * 0.10;
    this.arrowImg = {};
    this.arrowImg[0] = new Image();
    this.arrowImg[0].src = './images1/windArrow000.png';
    this.arrowImg[30] = new Image();
    this.arrowImg[30].src = './images1/windArrow030.png';
    this.arrowImg[60] = new Image();
    this.arrowImg[60].src = './images1/windArrow060.png';
    this.arrowImg[90] = new Image();
    this.arrowImg[90].src = './images1/windArrow090.png';
    this.arrowImg[120] = new Image();
    this.arrowImg[120].src = './images1/windArrow120.png';
    this.arrowImg[150] = new Image();
    this.arrowImg[150].src = './images1/windArrow150.png';
    this.arrowImg[180] = new Image();
    this.arrowImg[180].src = './images1/windArrow180.png';
    this.arrowImg[210] = new Image();
    this.arrowImg[210].src = './images1/windArrow210.png';
    this.arrowImg[240] = new Image();
    this.arrowImg[240].src = './images1/windArrow240.png';
    this.arrowImg[270] = new Image();
    this.arrowImg[270].src = './images1/windArrow270.png';
    this.arrowImg[300] = new Image();
    this.arrowImg[300].src = './images1/windArrow300.png';
    this.arrowImg[330] = new Image();
    this.arrowImg[330].src = './images1/windArrow330.png';
}

WindArrow.prototype.draw = function(windAngle) {

    if(windAngle === 360) windAngle = 0;

    this.ctx.drawImage(this.arrowImg[windAngle], this.x, this.y, this.size, this.size);
    console.log('this.arrowImg[windAngle]',this.arrowImg[windAngle]);
    };