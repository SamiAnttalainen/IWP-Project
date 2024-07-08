// Level one of the game
class Level_1_1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level_1' });
    }

    preload() {
        // Loads all the image assets
        loadImages(this);
    }

    create() {

    // Loads level 1 level assets
    loadLevelOne(this);

    // Creates and Loads player health bar
    createHealthBar(this);

    // Creates and Loads Player animations
    createAnimations(this);

    // Creates and loads skull animations
    createSkullAnimations(this);
    
    // Creates  and loads player character
    createPlayer(this, 100, 470);
    
    // Creates and loads skull enemies
    createSkulls(this, 400, 500, 2);
    
    // Player movement this.cursors and ability keys
    this.cursors = this.input.keyboard.createCursorKeys();
    
    }

    update() {
        gameMovement(this);

        if (this.skulls.countActive(true) === 0) {
            loadNextLevel(this, 'Level_1_2');
        }

        // Checks if player health is 0, then game over
        if (this.player.getHealth() <= 0) {
            this.scene.start('GameOver');
        }
    }
}
window.Level_1_1 = Level_1_1;