class MainMenu extends Screen {

    constructor() {
        super('MainMenu', 'SUPER VALIS  X', 'SELECT:', ['START GAME', 'OPTIONS', 'INFO'], 225, 150, 275, 250, '64px', '32px');
    }

    selection() {
        if (this.selectedItemIndex === 0) {
            this.scene.start('Level_1_1');
        } else if (this.selectedItemIndex === 1) {
            this.scene.start('Options');
        } else if (this.selectedItemIndex === 2) {
            this.scene.start('Info');
        }
    }

}
window.MainMenu = MainMenu;