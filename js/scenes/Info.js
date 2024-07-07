class Info extends Phaser.Scene {

    constructor() {
        super({ key: 'Info' });
        this.selectedItemIndex = 0;
    }

    create() {

        // Creates the info screen
        createScene(this, 'INFO', ['ABOUT', 'CONTROLS', 'BACK']);

        // Function highlights the first menu item when the scene is created
        updateMenuSelection(this);

        // Menu navigation keys
        infoButtons(this);

    }
}
window.Info = Info;