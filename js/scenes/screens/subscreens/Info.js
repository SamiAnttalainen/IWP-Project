class Info extends Screen {
    constructor() {
        super('Info', 'INFO', 'SELECT:', ['ABOUT', 'CONTROLS', 'BACK'], 225, 150, 275, 250, '64px', '32px');
    }

    selection() {
        if (this.selectedItemIndex === 0) {
            this.scene.start('About');
        } else if (this.selectedItemIndex === 1) {
            this.scene.start('ControlsInfo');
        } else if (this.selectedItemIndex === 2) {
            this.scene.start('MainMenu');
        }
    }
}
window.Info = Info;