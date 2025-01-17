class Boss_2 extends Enemy {

    constructor(scene, x, y, health, attack) {
        super(scene, x, y, health, attack, 'death1', 'boss2Movement');
        this.body.setAllowGravity(false);
        this.scene = scene;
        this.blast();
        this.nova = scene.physics.add.group();
        this.scene.physics.add.collider(this.nova, scene.player, (player, weapon) => this.hitNova(player, weapon), null, scene);
        this.burst();
        this.bursts = scene.physics.add.group();
        this.scene.physics.add.collider(this.bursts, scene.player, (player, weapon) => this.hitBurst(player, weapon), null, scene);
        this.bursting = false;
        this.flames = scene.physics.add.group();
        this.scene.physics.add.collider(this.flames, scene.player, (player, weapon) => this.hitFlames(player, weapon), null, scene);
        this.spawnFlames();
    }

    blast() {
        this.attackTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(3500, 10000),
            callback: () => {
                if (this.alive && !this.bursting) {
                    this.blastNova();
                }
            },
            callbackScope: this,
            loop: true,
        });
    }

    blastNova() {
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

    burst() {
        this.burstTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(10000, 15000),
            callback: () => {
                if (this.alive) {
                    this.fireBurst();
                }
            },
            callbackScope: this,
            loop: true,
        });
    }

    fireBurst() {
        this.bursting = true;
        this.anims.play('boss2Attack', true);
        let burst = this.bursts.create(this.x, this.y, 'projectile_10').setScale(1.5);
        burst.body.setAllowGravity(false);
        if (this.x < this.scene.player.x) {
            direction(this.scene, burst, this.x, this.y, 0);
            burst.flipX = false;
        } else {
            burst.flipX = true;
            direction(this.scene, burst, this.x, this.y);
        }
        burst.play('boss2Burst');
        setTimeout(() => {
            this.bursting = false;
            this.anims.play('boss2Movement', true);
        }, 3000);
    }

    hitBurst(player, burst) {
        burst.disableBody(true, true);
        if (!this.scene.player.guarding) {
            damage(this.scene, player, this.attack);
        }
    }


    spawnFlames() {
        this.flameTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(4000, 8000),
            callback: () => {
                if (this.alive && this.health < 150) {
                    this.fireFlames();
                }
            },
            callbackScope: this,
            loop: true,
        });
    }

    fireFlames() {
        let flame = this.flames.create(Phaser.Math.Between(50, 750), 0, 'projectile_21').setScale(1.25);
        flame.body.setAllowGravity(false);
        flame.setVelocityY(100);
        flame.play('boss2Flame');
        flame.setAngle(90);
    }

    hitFlames(player, flame) {
        flame.disableBody(true, true);
        if (!this.scene.player.guarding) {
            damage(this.scene, player, this.attack);
        }
    }

}
window.Boss_2 = Boss_2;