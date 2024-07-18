class SelecLevel extends Screen {

    constructor() {
        super('SelectLevel', 'SELECT LEVEL', 'SELECT:', ['LEVEL 1', 'LEVEL 2', 'LEVEL 3', 'BACK'], 200, 150, 275, 250, '64px', '32px');
    }

    selection() {
        if (this.selectedItemIndex === 0) {
            this.scene.start('Level_1_1');
        } else if (this.selectedItemIndex === 1) {
            this.scene.start('Level_2_1');
        } else if (this.selectedItemIndex === 2) {
            this.scene.start('Level_3_1');
        } else if (this.selectedItemIndex === 3) {
            this.scene.start('MainMenu');
        }
    }
}
window.SelectLevel = SelecLevel;