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
        <main>
            <h1>PirHack</h1>
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
    function createGameOverScreen() {};
    function removeGameOverScreen() {};

        // -- Setting the game state
    function startGame() {
        removeSplashScreen();
        // we also need to add clearing of the gameOverScreen
        game = new Game();
        game.gameScreen = createGameScreen();
        game.start();
          // End the game
    };
    function gameOver() {};

        // -- initialize Splash screen on initial start
    createSplashScreen();

}

// Runs the function `main` once all resources are loaded
window.addEventListener('load', main);



