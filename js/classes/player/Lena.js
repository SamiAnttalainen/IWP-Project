// Player class
class Lena extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'lena12');
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.anims.play('idle', true);
        this.health = 10;
        this.maxHealth = 10;
        this.crouching = false;
        this.attacking = false;
    }

    getHealth() {
        return this.health;
    }

    getMaxHealth() {
        return this.maxHealth;
    }

    setHealth(health) {
        this.health = health;
    }

    getLena() {
        return this;
    }

    
}
window.Lena = Lena;