class About extends Phaser.Scene {

    constructor() {
        super({ key: 'About' });
        this.selectedItemIndex = 0;
    }

    create() {

        this.add.text(275, 150, 'ABOUT',
            {
            fontSize: '64px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic' 
        });
        this.add.text(10, 250,
            "This game is a course project and it is only for\neducational purposes and not for commercial use." +
            "\nThis game uses music from various SNES games and\nsome assets from SNES Super Valis IV.",
            {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        });
        this.add.text(200, 500,
            "PRESS SPACE TO  RETURN",
            {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        });

        this.input.keyboard.on('keydown-SPACE', () => this.scene.start('Info'));
    }
}
window.About = About;