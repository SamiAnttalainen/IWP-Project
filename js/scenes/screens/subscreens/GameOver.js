class GameOver extends Screen {
    constructor() {
        super('GameOver', 'GAME OVER', 'SELECT:', ['RESTART', 'MAIN MENU', 'OPTIONS'], 225, 150, 275, 250, '64px', '32px');
    }
    
    init(data) {
        this.levelData = data.levelData;
        data.musicData.stop();
    }

    preload() {
        this.load.audio('gameover', 'assets/audio/sound/Death.mp3');
    }

    create() {
        super.create();
        this.sound.add('gameover', {volume: 0.25}).play();
        this.add.text(200, 50, 'YOU DIED', { fontSize: '96px', fill: '#f00', fontFamily: 'ArcadeClassic' });
    }

    selection() {

        this.scene.stop('GameOver');

        if (this.selectedItemIndex === 0) {
            if (this.levelData === 1) {
                this.scene.start('Level_1_1');
            } else if (this.levelData === 2) {
                this.scene.start('Level_2_1');
            } else if (this.levelData === 3) {
                this.scene.start('Level_3_1');
            }
        } else if (this.selectedItemIndex === 1) {
            this.scene.start('MainMenu');
        } else if (this.selectedItemIndex === 2) {
            this.scene.start('Options');
        }
    }
}
window.GameOver = GameOver;