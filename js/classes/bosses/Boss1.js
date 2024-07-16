class Boss_1 extends Enemy {

    constructor(scene, x, y, health, attack) {
        super(scene, x, y, health, attack, 'boss1', 'boss1Movement');
        this.scene = scene;
        this.throw();
        this.spear = scene.physics.add.group();
        this.scene.physics.add.collider(this.spear, scene.player, (player, weapon) => this.hitSpear(player, weapon), null, scene);
        this.bombs = scene.physics.add.group();
        this.scene.physics.add.collider(this.bombs, scene.player, (player, weapon) => this.hitBomb(player, weapon), null, scene);
        this.spawnBomb();
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
        let weapon = this.spear.create(this.x, this.y, 'bossWeapon').setScale(0.5);
        weapon.setScale(1.5);
        weapon.body.setAllowGravity(false);
        direction(this.scene, weapon, this.x, this.y, 180);
        setTimeout(() => {
            this.anims.play('boss1Movement', true);
        }, 1000);
    }

    hitSpear(player, spear) {
        spear.disableBody(true, true);
        if (!this.scene.player.guarding) {
            damage(this.scene, player, this.attack)
        }
    }

    spawnBomb() {
        this.weaponTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(5000, 10000),
            callback: () => {
                if (this.alive && this.health < 100) {
                    this.dropBomb();
                }
            },
            callbackScope: this,
            loop: true,
        });
    }

    dropBomb() {
        let bomb = this.bombs.create(Phaser.Math.Between(0, 800), 0, 'bomb').setScale(1);
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.scene.physics.add.collider(bomb, this.scene.platforms);
    }

    hitBomb(player, bomb) {
        bomb.disableBody(true, true);
        if (!this.scene.player.guarding) {
            damage(this.scene, player, this.attack);
        }
    }
        
}
window.Boss_1 = Boss_1;