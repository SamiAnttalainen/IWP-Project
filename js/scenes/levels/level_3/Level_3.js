class Level_3 extends Phaser.Scene {
    constructor(key, next) {
        super({ key: key });
        this.level = 3;
        this.next = next;
    }

    init(data) {
        this.playerData = data.playerData;
    }

    preload() {
        // Loads all the image assets
        loadImages(this);
        loadBossThreeImages(this);
    }

    create() {
            
        if (!this.anims.exists('movement')) {
            createAnimations(this);
        }
        if (!this.anims.exists('ghostMovement')) {
            createGhostAnimations(this);
        }
        if (!this.anims.exists('knightMovement')) {
            createKnightAnimations(this);
        }
        if (!this.anims.exists('boss3Movement')) {
            createBossThreeAnimations(this);
        }
    
        // Creates level 3 level assets
        this.createLevelThree();

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
            this.scene.start('GameOver', { levelData: this.level });
        }
    }

    createLevelThree() {
        // Creates background for level 2.
        this.background = this.add.image(400, 300, 'hell');
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(200, 568, 'bottomTiles').setScale(2).refreshBody();
        this.platforms.create(600, 568, 'bottomTiles').setScale(2).refreshBody();
    }
}
window.Level_3 = Level_3