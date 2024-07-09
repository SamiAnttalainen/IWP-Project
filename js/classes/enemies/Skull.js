// Enemy classes inspired by SUPERTOMMY https://www.youtube.com/watch?v=IFt_YwDVFNY 
// Skull enemy class
class Skull extends Enemy {

    constructor(scene, x, y, health, image, animation) {
        super(scene, x, y, 5, 'enemy1', 'skullMovement');
        this.movement();
    }
}
// class Skull extends Phaser.Physics.Arcade.Sprite {

//     constructor(scene, x, y) {
//         super(scene, x, y, 'enemy1');
//         scene.add.existing(this);
//         scene.physics.world.enableBody(this);
//         this.anims.play('skullMovement', true);
//         this.movement();
//     }

//     movement() {
//         this.enemyTimer = this.scene.time.addEvent({
//             delay: Phaser.Math.Between(2000, 4000),
//             callback: this.skullMovement,
//             callbackScope: this,
//             loop: true,
//         });
//     }

//     skullMovement() {
//         let direction;
//         if (this.body.velocityX < 0) {
//             direction = Phaser.Math.Between(IDLE, RIGHT);
//         } else if (this.body.velocityX > 0) {
//             direction = Phaser.Math.Between(IDLE, LEFT);
//         } else {
//             direction = Phaser.Math.Between(LEFT, RIGHT);
//         }
    
//         if (direction === LEFT) {
//             this.setVelocityX(-50);
//             this.flipX = false;
//         } else if (direction === RIGHT) {
//             this.setVelocityX(50);
//             this.flipX = true;
//         } else {
//             this.setVelocityX(0);
//         }
//     }
// }
window.Skull = Skull;