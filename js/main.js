const worldWidth = 800;
const worldHeight = 600;
const LEFT = 0;
const RIGHT = 1;
const IDLE = 2;


let config = {
    type: Phaser.AUTO,
    backgroundColor: '#00000', // Black
    width: worldWidth,
    height: worldHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            tileBias: 32,
            debug: true
        }
    },
    scene: Level_1
};

const game = new Phaser.Game(config);