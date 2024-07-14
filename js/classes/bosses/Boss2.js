class Boss_2 extends Enemy {

    constructor(scene, x, y, health, attack) {
        super(scene, x, y, health, attack, 'death1', 'boss2Movement');
        this.body.setAllowGravity(false);
        this.scene = scene;
        this.blast();
        this.nova = scene.physics.add.group();
        this.scene.physics.add.collider(this.nova, scene.player, (player, weapon) => this.hitNova(player, weapon), null, scene);
    }

    blast() {
        this.attackTimer = this.scene.time.addEvent({
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
        this.anims.play('boss2Attack', true);
        let weapon = this.nova.create(this.x, this.y, 'death8').setScale(0.5);
        weapon.setScale(1.5);
        weapon.body.setAllowGravity(false);
        direction(this.scene, weapon, this.x, this.y);
        setTimeout(() => {
            this.anims.play('boss2Movement', true);
        }, 1000);
    }

    hitNova(player, spear) {
        spear.disableBody(true, true);
        if (!this.scene.player.guarding) {
            damage(this.scene, player, this.attack);
        }
    }

}
window.Boss_2 = Boss_2;