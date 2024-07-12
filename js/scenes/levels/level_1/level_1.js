class Level_1 extends Phaser.Scene {
    constructor(key, next){
        super({ key: key });
        this.level = 1;
        this.next = next;
    }

    init(data) {
        this.playerData = data.playerData;
    }

    preload() {
        // Loads all the image assets
        loadImages(this);
        loadBossOneImages(this);
    }

    create() {

        if (!this.anims.exists('movement')) {
            createAnimations(this);
        }
        if (!this.anims.exists('skullMovement')) {
            createSkullAnimations(this);
        }
        if (!this.anims.exists('boss1Movement')) {
            createBossOneAnimations(this);
        }

        // Creates level 1 level assets
        this.createLevelOne();

        // Creates and Loads player health bar
        createHealthBar(this);

        // Player movement this.cursors and ability keys
        this.cursors = this.input.keyboard.createCursorKeys();
        this.altKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ALT);

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
            this.physics.pause();
            this.scene.start('GameOver', {levelData: this.level});
            // loadGameOver(this, this.level);
        }
    }

    createLevelOne() {
        // // Platforms
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(200, 568, 'bottomTiles').setScale(2).refreshBody();
    this.platforms.create(600, 568, 'bottomTiles').setScale(2).refreshBody();

    // this.platforms.create(400, 395, 'block').setScale(2).refreshBody();
    this.pillars = this.physics.add.staticGroup({
        classType: Phaser.GameObjects.Image,
        key: 'pillar',
        setXY: { x: 100, y: 235, stepX: 150 },
        quantity: 5
    });
    this.pillars.children.iterate(function (pillar) {
        pillar.setScale(1.5);
    });
    }
}
window.Level_1 = Level_1