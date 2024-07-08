const WIDTH = 800;
const HEIGTH = 600;
const LEFT = 0;
const RIGHT = 1;
const IDLE = 2;


let config = {
    type: Phaser.AUTO,
    backgroundColor: '#00000', // Black
    width: WIDTH,
    height: HEIGTH,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            tileBias: 32,
            debug: true
        }
    },
    scene: [
        MainMenu,
        Level_1_1,
        GameOver,
        Options,
        Info,
        About,
        ControlsInfo
    ]
};

const game = new Phaser.Game(config);