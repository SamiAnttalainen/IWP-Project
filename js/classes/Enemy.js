class Enemy extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, health, image, animation) {
        super(scene, x, y, image);
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.anims.play(animation, true);
        this.health = health;
        this.alive = true;
        this.movement();
    }

    movement() {
        this.enemyTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(2000, 4000),
            callback: this.enemyMovement,
            callbackScope: this,
            loop: true,
        });
    }

    enemyMovement() {
        let direction;
        if (this.body.velocityX < 0) {
            direction = Phaser.Math.Between(IDLE, RIGHT);
        } else if (this.body.velocityX > 0) {
            direction = Phaser.Math.Between(IDLE, LEFT);
        } else {
            direction = Phaser.Math.Between(LEFT, RIGHT);
        }
    
        if (direction === LEFT) {
            this.setVelocityX(-50);
            this.flipX = false;
        } else if (direction === RIGHT) {
            this.setVelocityX(50);
            this.flipX = true;
        } else {
            this.setVelocityX(0);
        }
    }
}
window.Enemy = Enemy;