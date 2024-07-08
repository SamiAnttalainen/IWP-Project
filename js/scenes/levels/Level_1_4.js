class Level_1_4 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level_1_4' });
    }

    init(data) {
        this.playerData = data.playerData;
    }

    preload() {
        // Loads all the image assets
        loadImages(this);
        for (let i=1; i <= 5; i++) {
            this.load.image('boss'+i, 'assets/bosses/core/boss (' + i + ').png', { frameWidth: 104, frameHeight: 62 });
        }
        this.load.image('bossThrow', 'assets/bosses/core/boss_1_throw.png');
        this.load.image('bossWeapon', 'assets/bosses/core/boss_1_weapon.png');

    }

    create() {

        // Creating and loading level 1 assets
        loadLevelOne(this);


        // Creates and loads other assets
        createHealthBar(this);
        createAnimations(this); // Turn on when debugging
        createBossOneAnimations(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        createPlayer(this, 100, 470);
        createBossOne(this, 700, 400);
        // this.player.setHealth(this.playerData.health);
        updateHealth(this);
    }

    update() {

        gameMovement(this);

        // if (this.skulls.countActive(true) === 0) {
        //     // loadNextLevel(this, 'Level_1_3');
        // }

        // Checks if player health is 0, then game over
        if (this.player.getHealth() <= 0) {
            this.scene.start('GameOver');
        }
    }




}
window.Level_1_4 = Level_1_4;