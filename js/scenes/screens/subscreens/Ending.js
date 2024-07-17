class Ending extends Screen {
    constructor() {
        super('Ending', 'CONGRATULATIONS!\nYOU HAVE DEFEATED THE FINAL BOSS!', 'SELECT:', ['RESTART GAME', 'MAIN MENU'], 100, 150, 275, 250, '42px', '32px');
    }

    selection() {
        if (this.selectedItemIndex === 0) {
            this.scene.start('Level_1_1');
        } else if (this.selectedItemIndex === 1) {
            this.scene.start('MainMenu');
        }
    }
}
window.Ending = Ending;