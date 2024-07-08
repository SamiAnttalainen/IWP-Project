class MainMenu extends Phaser.Scene {

    constructor() {
        super({ key: 'MainMenu' });
        this.selectedItemIndex = 0;
    }


    create() {

        // Creates the main menu screen
        createScene(this, 'SUPER VALIS  X', ['START GAME', 'OPTIONS', 'INFO']);

        // Function highlights the first menu item when the scene is created
        updateMenuSelection(this);

        // Menu navigation keys
        mainMenuButtons(this);

    }
}
window.MainMenu = MainMenu;