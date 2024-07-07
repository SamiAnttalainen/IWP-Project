class Options extends Phaser.Scene {
    constructor() {
        super({ key: 'Options' });
        this.selectedItemIndex = 0;
        this.title = 'OPTIONS';
        this.items = ['MUSIC  ON', 'SOUND  ON', 'BACK'];
    }

    create() {

        // Creates the options screen
        createScene(this, this.title, this.items);

        // Function highlights the first menu item when the scene is created
        updateMenuSelection(this);

        // Menu navigation keys
        optionsButtons(this);


    }
}
window.Options = Options;