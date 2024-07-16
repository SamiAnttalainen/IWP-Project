class Knight extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 50, 3, 'enemy7', 'knightMovement');
        this.setScale(1.15);
        this.spear = this.scene.physics.add.group();
        this.scene.physics.add.collider(this.spear, this.scene.player, (player, weapon) => this.hitSpear(player, weapon), null, this.scene);
        this.spearThrow();
    }

    spearThrow() {
        this.attackTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(5000, 10000),
            callback: () => {
                if (this.alive) {
                    this.knightThrow();
                }
            },
            callbackScope: this,
            loop: true,
        });
    }

    knightThrow() {
        this.setVelocityX(0);
        this.play('knightAttack', true);
        let spear = this.spear.create(this.x, this.y, 'enemy14').setScale(0.8);
        spear.body.setAllowGravity(false);
        direction(this.scene, spear, this.x, this.y, 180);
        setTimeout(() => {
            this.play('knightMovement', true);
        }, 1000);
    }

    hitSpear(player, spear) {
        spear.disableBody(true, true);
        if (!this.scene.player.guarding) {
            damage(this.scene, player, this.attack - 2);
        }
    }
}
window.Knight = Knight;