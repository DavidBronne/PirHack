# PirHack

## Description
A pirate wants to reach a Treasure Island located upwind. To do so, he needs to manage the boat direction and the sail setting according to the wind direction.

If he doesn't manage them well, his best enemy would reach the island before him or the wind would make him drift up to the army located downwind. 


## MVP
*CANVAS*, update the boat position according to wind, boat and settings. 

## Backlog
- Wind shift
- Water stream (incl. shift)
- Level acc. to wind & water shift
- Sharks


## Data structure

### main.js
```

buildSplashScreen(){
}

buildGameScreen(){
}

buildGameOverScreen(){
}
```

### game.js
```
Game(){
  this.canvas;
}

Game.prototype.startLoop(){
}

Game.prototype.checkCollisions{
}

// Game.prototype.checkOverFlow = function(){}

// Game.prototype.displayNextSquare{}

Game.prototype.clearCanvas = function(){
}

Game.prototype.updateCanvas = function(){
}

Game.prototype.drawCanvas = function(){ 
}

Game.prototype.setGameOver = function(){
}
```

### boat.js
```
Boat(){
  this.canvas;
  this.x;
  this.y;
  this.size;
  this.boatDirection;
  this.sailSetting;
  this.efficiency
  this.speed;
  
}

- addEventListener(boatDirection)
- addEventListener(sailSetting)

boat.prototype.draw{
}

boat.prototype.setDirection(){
}

boat.prototype.setSail(){
}

boat.prototype.calculEfficiency(){
}

```

### wind.js
```
Wind(){
  //this.canvas;
  this.direction;
  this.intensity;

}

//wind.prototype.draw{}

wind.prototype.shift{

}



```


## States & States Transitions
```
- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - buildGameOver()
  - addEventListener(startGame) 
```

## Task
- Main - buildDom
- Main - buildSplashScreen
- Main - addEventListener
- Main - buildGameScreen
- Main - buildGameOverScreen
- Game - buildCanvas
- Game - clearCanvas
- Game - updateCanvas
- Game - drawCanvas
- Game - setGameOver
- Game - collision
- Game - addEventListener(startGame)
- Boat - create
- Boat - setDirection
- Boat - setSail
- Boat - calculEfficiency
- Boat - addEventListener(boatDirection)
- Boat - addEventListener(sailSetting)
- Wind - create
- Wind - setDirection


## Links


### Trello
[Link url](https://trello.com/b/62qGRGQr/pirhack)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/chloeleteinturier/Tetris)
[Link Deploy](xxxxxx)


### Slides
URls for the project presentation (slides)
