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
window.Boss_1 = Boss_1;