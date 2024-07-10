class Boss_1 extends Enemy {

    constructor(scene, x, y, health) {
        super(scene, x, y, health, 'boss1', 'boss1Movement');
        this.scene = scene;
        this.throw();
        this.spear = scene.physics.add.group();
        this.scene.physics.add.collider(this.spear, scene.player, (player, weapon) => this.hitSpear(player, weapon), null, scene);
    }

    throw() {
        this.weaponTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(2000, 10000),
            callback: () => {
                if (this.alive) { // Check if the boss is alive before throwing
                    this.bossThrow();
                }
            },
            callbackScope: this,
            loop: true,
        });
    }

    bossThrow() {
        this.setVelocityX(0);
        this.anims.play('bossThrow', true);
        this.attacking = true;
        let weapon = this.spear.create(this.x, this.y, 'bossWeapon').setScale(0.5);
        weapon.setScale(1.5);
        weapon.body.setAllowGravity(false);
        if (this.x < this.scene.player.x) {
            weapon.setVelocityX(100);
            weapon.flipX = true;
        } else {
            weapon.setVelocityX(-100);
            weapon.flipX = false;
        }
        setTimeout(() => {
            this.anims.play('boss1Movement', true);
            this.attacking = false;
        }, 1000);
    }

    hitSpear(player, spear) {
        spear.disableBody(true, true);
        let health = player.getHealth() - 1;
        player.setHealth(health);
        updateHealth(this.scene);
        player.setTint(0xff0000);
        if (player.flipX) {
            player.x += 100;
        } else {
            player.x -= 100;
        }
        setTimeout(() => {
            player.clearTint();
        }, 1000);
    }
}

// class Boss_1 extends Phaser.Physics.Arcade.Sprite {

//     constructor(scene, x, y) {
//         super(scene, x, y, 'boss1');
//         scene.add.existing(this);
//         scene.physics.world.enableBody(this);
//         this.anims.play('boss1Movement', true);
//         this.health = 100;
//         this.alive = true;
//         this.movement();
//         this.throw();
//         this.spear = scene.physics.add.group();
//     }

//     movement() {
//         this.enemyTimer = this.scene.time.addEvent({
//             delay: Phaser.Math.Between(2000, 4000),
//             callback: this.bossMovement,
//             callbackScope: this,
//             loop: true,
//         });
//     }

//     throw() {
//         this.weaponTimer = this.scene.time.addEvent({
//             delay: Phaser.Math.Between(2000, 10000),
//             callback: () => {
//                 if (this.alive) { // Check if the boss is alive before throwing
//                     this.bossThrow();
//                 }
//             },
//             callbackScope: this,
//             loop: true,
//         });
//     }

//     bossMovement() {
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

//     bossThrow() {
//         this.setVelocityX(0);
//         this.anims.play('bossThrow', true);
//         this.attacking = true;
//         let weapon = this.spear.create(this.x, this.y, 'bossWeapon').setScale(0.5);
//         weapon.setScale(1.5);
//         weapon.body.setAllowGravity(false);
//         if (this.x < this.scene.player.x) {
//             weapon.setVelocityX(100);
//             weapon.flipX = true;
//         } else {
//             weapon.setVelocityX(-100);
//             weapon.flipX = false;
//         }
//         setTimeout(() => {
//             this.anims.play('boss1Movement', true);
//             this.attacking = false;
//         }, 1000);
//     }
        
// }
window.Boss_1 = Boss_1;