class ControlsInfo extends Phaser.Scene {
    constructor() {
        super({ key: 'ControlsInfo' });
    }

    create() {
        this.add.text(225, 150, 'CONTROLS', {
            fontSize: '64px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic' 
        });
        this.add.text(200, 250,
            "MOVE LEFT:  LEFT ARROW\nMOVE RIGHT:  RIGHT ARROW\nJUMP:  UP ARROW\nCROUCH:  DOWN ARROW\nATTACK:  LEFT MOUSE\nGUARD:  RIGHT MOUSE", {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        });
        this.add.text(200, 500,
            "PRESS SPACE TO  RETURN", {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        });

        this.input.keyboard.on('keydown-SPACE', () => this.scene.start('Info'));
    }
}
window.ControlsInfo = ControlsInfo;