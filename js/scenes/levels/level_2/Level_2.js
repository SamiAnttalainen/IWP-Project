class Level_2 extends Phaser.Scene {
    constructor(key, next){
        super({ key: key });
        this.level = 2;
        this.next = next;
    }

    init(data) {
        this.playerData = data.playerData;
    }

    preload() {
        // Loads all the image assets
        loadImages(this);
        loadBossTwoImages(this);
    }

    create() {

        if (!this.anims.exists('movement')) {
            createAnimations(this);
        }
        if (!this.anims.exists('waspMovement')) {
            createWaspAnimations(this);
        } 
        if (!this.anims.exists('golemMovement')) {
            createGolemAnimations(this);
        }
        if (!this.anims.exists('boss2Movement')) {
            createBossTwoAnimations(this);
        }

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

        // Checks if player health is 0, then game over
        if (this.player.getHealth() <= 0) {
            this.scene.start('GameOver', {levelData: this.level});
        }
    }

    createLevelTwo() {
        // Creates background for level 2.
        this.background = this.add.image(400, 300, 'night');
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(200, 568, 'bottomTiles').setScale(2).refreshBody();
        this.platforms.create(600, 568, 'bottomTiles').setScale(2).refreshBody();
    }

}
window.Level_2 = Level_2