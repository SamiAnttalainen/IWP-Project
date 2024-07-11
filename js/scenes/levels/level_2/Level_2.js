class Level_2 extends Phaser.Scene {
    constructor(key, next, wasps, golems){
        super({ key: key });
        this.level = 2;
        this.next = next;
        this.wasps = wasps;
        this.golems = golems;
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
        this.createLevelTwo();

        // Creates and Loads player health bar
        createHealthBar(this);

        // Player movement this.cursors and ability keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // Create player
        createPlayer(this, 100, 470);
    }

    update() {
        gameMovement(this);

        if (this.wasps.countActive(true) === 0 && this.golems.countActive(true) === 0){
            loadNextLevel(this, this.next);
        }

        // Checks if player health is 0, then game over
        if (this.player.getHealth() <= 0) {
            this.scene.start('GameOver');
        }
    }

    createLevelTwo() {
        this.background = this.add.image(400, 300, 'night');
    }

}
window.Level_2 = Level_2