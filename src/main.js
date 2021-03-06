'use strict';

function buildDom(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
};

function main() {
    var game;
    var splashScreen;
    var gameOverScreen;

        // -- splash screen
    function createSplashScreen() {
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

        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', startGame);
    };

    function removeSplashScreen() {
        splashScreen.remove();
    };

        // -- game screen
    function createGameScreen() {
        var gameScreen = buildDom(`
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
    function removeGameScreen() {
        game.removeGameScreen();
    };

        // -- game over screen
        function createGameOverScreen(score,endGameStatus) {
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
          
            var button = gameOverScreen.querySelector('button');
            button.addEventListener('click', startGame);
          
            var span = gameOverScreen.querySelector('span');
            span.innerText = score;
          
            document.body.appendChild(gameOverScreen);
          }

          function removeGameOverScreen() {
            if (gameOverScreen !== undefined) {
              gameOverScreen.remove();
            }
          }
          

        // -- Setting the game start
    function startGame() {
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
    
        function gameOver(score,endGameStatus) {           
            removeGameScreen();
            createGameOverScreen(score,endGameStatus);
          }
    

        // -- initialize Splash screen on initial start
    createSplashScreen();

}

// Runs the function `main` once all resources are loaded
window.addEventListener('load', main);




