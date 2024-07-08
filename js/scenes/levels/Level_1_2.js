class Level_1_2 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level_1_2' });
    }

    init(data) {
        this.playerData = data.playerData;
    }

    preload() {
        // Loads all the image assets
        loadImages(this);
    }

    create() {

        // Creating and loading level 1 assets
        loadLevelOne(this);
        this.platforms.create(300, 200, 'bottomFloor').setScale(0.75).refreshBody();
        this.platforms.create(650, 375, 'bottomFloor').setScale(0.75).refreshBody();


        // Creates and loads other assets
        createHealthBar(this);
        createAnimations(this); // Turn on when debugging
        createSkullAnimations(this); // Turn on when debugging
        this.cursors = this.input.keyboard.createCursorKeys();
        createPlayer(this, 100, 470);
        createSkulls(this, 200, 100, 4);
        // this.player.setHealth(this.playerData.health);
        updateHealth(this);
    }

    update() {

        gameMovement(this);

        if (this.skulls.countActive(true) === 0) {
            loadNextLevel(this, 'Level_1_3');
        }

        // Checks if player health is 0, then game over
        if (this.player.getHealth() <= 0) {
            this.scene.start('GameOver');
        }
    }

}
window.Level_1_2 = Level_1_2;