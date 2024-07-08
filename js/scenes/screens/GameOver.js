class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOver' });
        this.selectedItemIndex = 0;
    }

    create() {

        createScene(this, 'GAME OVER', ['RESTART', 'MAIN MENU', 'OPTIONS']);

        // Function highlights the first menu item when the scene is created
        updateMenuSelection(this);

        // Menu navigation keys
        gameOverButtons(this);
    }

}
window.GameOver = GameOver;