class Island{
    constructor (canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.size = 100;
        this.x = canvas.width * 0.9;
        this.y = canvas.height * 0.1;
    }
    draw () {
        this.imgIsland = new Image();   // Create new <img> element
        this.imgIsland.src = './images/islandTarget.png';
        this.ctx.drawImage(this.imgIsland, this.x, this.y, this.size, this.size);
    };
}
