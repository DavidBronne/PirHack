'use strict';

const buildDom = (htmlString) => {
    let div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
};

const main = () => {
    let game;
    let splashScreen;
    let gameOverScreen;

        // -- splash screen
    const createSplashScreen = () => {
        splashScreen = buildDom(`
        <main class="fill">
            <h1>PirHack</h1>
            <p>A Pirate adventure<p>
            <h2>Plot<h2>
            <p>Description<p>
            <button>start</button>
        </main>
        `);
        document.body.appendChild(splashScreen);

        const startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', startGame);
    };

    const removeSplashScreen = () => {
        splashScreen.remove();
    };

        // -- game screen
    const createGameScreen = () => {
        const gameScreen = buildDom(`
            <main class="game container">
                <header>
                    <div class="lives">
                        <span class="label">Lives:</span>
                        <span class="value"></span>
                    </div>
                    <div class="score">
                        <span class="label">Score:</span>
                        <span class="value"></span>
                    </div>
                    <div class="wind-direction">
                    <span class="label">wind Angle:</span>
                    <span class="value"></span>
                </div>
                </header>
                <div class="canvas-container">
                    <canvas></canvas>
                </div>
            </main>
        `);
        document.body.appendChild(gameScreen);
        return gameScreen;
        }
    
        // removeGameScreen()
    const removeGameScreen = () => {
        game.removeGameScreen();
    };

        // -- game over screen
        const createGameOverScreen = (score,endGameStatus) => {
            gameOverScreen = buildDom(`
              <main>
                <div class=${endGameStatus}>
                    <h1>Game over</h1>
                    <p>Your score: <span>${score}</span></p>
                    <p class="you">You <span>${endGameStatus}</span></p>
                    <button>Restart</button>
                </div>
            </main>
            `);
          
            const button = gameOverScreen.querySelector('button');
            button.addEventListener('click', startGame);
          
            const span = gameOverScreen.querySelector('span');
            span.innerText = score;
          
            document.body.appendChild(gameOverScreen);
          }

          const removeGameOverScreen = () => {
            if (gameOverScreen !== undefined) {
              gameOverScreen.remove();
            }
          }
          

        // -- Setting the game start
      const startGame = () => {
        removeSplashScreen();
        // we also need to add clearing of the gameOverScreen
        game = new Game();
        game.gameScreen = createGameScreen();
        removeGameOverScreen();
        game.start();
          // End the game
        game.passGameOverCallback(function() {
            console.log('GO_check');		// <-- UPDATE
            gameOver(game.player.score,game.endGameStatus);					// <-- UPDATE
          });
    };
    
        const gameOver = (score,endGameStatus) => {           
            removeGameScreen();
            createGameOverScreen(score,endGameStatus);
          }
    

        // -- initialize Splash screen on initial start
    createSplashScreen();

}

// Runs the function `main` once all resources are loaded
window.addEventListener('load', main);




