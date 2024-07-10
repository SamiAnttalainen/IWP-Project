class GameOver extends Screen {
    constructor() {
        super('GameOver', 'GAME OVER', 'SELECT:', ['RESTART', 'MAIN MENU', 'OPTIONS'], 225, 150, 275, 250, '64px', '32px');
    }

    selection() {
        if (this.selectedItemIndex === 0) {
            this.scene.start('Level_1_1');
        } else if (this.selectedItemIndex === 1) {
            this.scene.start('MainMenu');
        } else if (this.selectedItemIndex === 2) {
            this.scene.start('Options');
        }
    }
}
window.GameOver = GameOver;