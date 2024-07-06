// Level one of the game
class Level_1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level_1' });
    }

    preload() {
        loadImages(this);
    }

    create() {

    // Loads level 1 level assets
    loadLevelOne(this);

    // Creates and Loads player health bar
    createHealthBar(this);

    // Creates and Loads Player animations
    createAnimations(this);
    
    // Variables
    this.attacking = false;
    this.crouching = false;

    // Creates  and loads player character
    createPlayer(this);
    
    // Creates and loads skull enemies
    createSkulls(this);

    // Player movement this.cursors and ability keys
    this.cursors = this.input.keyboard.createCursorKeys();
    
    }

    update() {
        gameMovement(this);
    }
}
window.Level_1 = Level_1;