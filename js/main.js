const WIDTH = 800;
const HEIGTH = 600;
const LEFT = 0;
const RIGHT = 1;
const IDLE = 2;
const DEGREE = 180;
let game;

const musicState = {
    musicOn: true
}


window.onload = function() {
    let config = {
        type: Phaser.AUTO,
        backgroundColor: '#00000', // Black
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: WIDTH,
            height: HEIGTH,
        }, 
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                tileBias: 16,
                debug: false
            }
        },
        scene: [
            Attention,
            MainMenu,
            Level_1_1,
            Level_1_2,
            Level_1_3,
            Level_1_4,
            Level_2_1,
            Level_2_2,
            Level_2_3,
            Level_2_4,
            Level_3_1,
            Level_3_2,
            Level_3_3,
            Level_3_4,
            Ending,
            SelecLevel,
            GameOver,
            Options,
            Info,
            About,
            ControlsInfo
        ]
    };
    
    game = new Phaser.Game(config);
}