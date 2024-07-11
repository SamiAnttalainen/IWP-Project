class Level_1 extends Phaser.Scene {
    constructor(key, next, skulls){
        super({ key: key });
        this.level = 1;
        this.next = next;
        this.skulls = skulls;
    }

    init(data) {
        this.playerData = data.playerData;
    }

    preload() {
        // Loads all the image assets
        loadImages(this);
    }

    create() {
        // Creates level 1 level assets
        createLevelOne(this);

        // Creates and Loads player health bar
        createHealthBar(this);

        // Player movement this.cursors and ability keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // Create player
        createPlayer(this, 100, 470);
    }

    update() {
        gameMovement(this);

        if (this.skulls.countActive(true) === 0) {
            loadNextLevel(this, this.next);
        }

        // Checks if player health is 0, then game over
        if (this.player.getHealth() <= 0) {
            this.scene.start('GameOver');
        }
    }
}
window.Level_1 = Level_1