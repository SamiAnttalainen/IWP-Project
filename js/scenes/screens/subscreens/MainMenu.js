class MainMenu extends Screen {

    constructor() {
        super('MainMenu', 'SUPER VALIS  X', 'SELECT:', ['NEW GAME', 'LEVEL SELECTION', 'OPTIONS', 'INFO'], 225, 150, 275, 250, '64px', '32px');
    }

    preload() {
        this.load.audio('menu', 'assets/audio/music/Start.mp3');
    }

    create() {
        super.create();
        this.music = this.sound.add('menu', { loop: true, volume: 0.25});
        if (!this.music.isPlaying) {
            this.music.play();
        }
    }

    selection() {
        this.music.stop();
        if (this.selectedItemIndex === 0) {
            this.scene.start('Level_1_1');
        }
        else if (this.selectedItemIndex === 1) {
            this.scene.start('SelectLevel');
        }
        else if (this.selectedItemIndex === 2) {
            this.scene.start('Options');
        }
        else if (this.selectedItemIndex === 3) {
            this.scene.start('Info');
        }
    }

}
window.MainMenu = MainMenu;