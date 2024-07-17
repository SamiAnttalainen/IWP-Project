class Attention extends Phaser.Scene {
    constructor() {
        super({ key: 'Attention' });
    }


    create() {

        this.add.text(215, 150, 'ATTENTION!',
            {
            fontSize: '64px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic' 
        });
        this.add.text(10, 250,
            "This game is a course project and it is only for\neducational purposes and not for commercial use." +
            "\nThis game uses music from SNES Street Fighter II,\nCastlevania: Dracula X and Super Valis IV games and\nsome assets from SNES Super Valis IV.",
            {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        });
        this.add.text(200, 500,
            "PRESS SPACE TO  CONTINUE",
            {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        });

        this.input.keyboard.on('keydown-SPACE', () => this.scene.start('MainMenu'));
    }
}
window.Attention = Attention;