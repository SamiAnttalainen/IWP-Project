class Boss_3 extends Enemy {
    constructor(scene, x, y, health, attack) {
        super(scene, x, y, health, attack, 'gallagher1', 'boss3Movement');
        this.air = false;
        this.shoot();
        this.bolts = scene.physics.add.group();
        this.scene.physics.add.collider(this.bolts, scene.player, (player, weapon) => this.hitBolt(player, weapon), null, scene);
        this.bursts = scene.physics.add.group();
        this.scene.physics.add.collider(this.bursts, scene.player, (player, weapon) => this.hitBurst(player, weapon), null, scene);
        this.blast();
    }

    shoot() {
        this.attackTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(4000, 10000),
            callback: () => {
                if (this.alive && !this.air) {
                    this.fireBolt();
                }
            },
            callbackScope: this,
            loop: true,
        });
    }

    fireBolt() {
        this.setVelocityX(0);
        this.anims.play('boss3Attack', true);
        let bolt = this.bolts.create(this.x, this.y, 'ball_1').setScale(1.5);
        bolt.body.setAllowGravity(false);
        bolt.play('boss3Projectile');
        direction(this.scene, bolt, this.x, this.y);
        setTimeout(() => {
            this.anims.play('boss3Movement', true);
        }, 1000);
    }

    hitBolt(player, bolt) {
        bolt.disableBody(true, true);
        if (!this.scene.player.guarding) {
            damage(this.scene, player, this.attack - 1);
        }
    }

    blast() {
        this.attackTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(15000, 30000),
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
        this.air = true;
        this.body.setAllowGravity(false);
        this.x = 400;
        this.y = 100;
        this.setVelocityX(0);
        this.anims.play('boss3Attack', true);
        let burst = this.bursts.create(this.x, this.y, 'projectile_7').setScale(2.5);
        burst.body.setAllowGravity(false);
        burst.play('boss3Burst');
        direction(this.scene, burst, this.x, this.y, 0);
        setTimeout(() => {
            this.body.setAllowGravity(true);
            this.air = false;
            this.anims.play('boss3Movement', true);
        }, 5000);
    }

    hitBurst(player, burst) {
        burst.disableBody(true, true);
        damage(this.scene, player, this.attack);
    }
}
window.Boss_3 = Boss_3;