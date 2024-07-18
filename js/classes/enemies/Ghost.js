class Ghost extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, 150, 3, 'enemy17', 'ghostMovement');
    this.bolts = this.scene.physics.add.group();
    this.scene.physics.add.collider(this.bolts, this.scene.player, (player, weapon) => this.hitBolt(player, weapon), null, this.scene);
    this.shoot();
  }


  shoot() {
    this.attackTimer = this.scene.time.addEvent({
      delay: Phaser.Math.Between(5000, 10000),
      callback: () => {
        if (this.alive) {
          this.ghostShoot();
        }
      },
      callbackScope: this,
      loop: true,
    });
  }

  ghostShoot() {
    let bolt = this.bolts.create(this.x, this.y, 'projectile_2')
    bolt.body.setAllowGravity(false);
    bolt.play('ghostBolt', true);
    direction(this.scene, bolt, this.x, this.y, 0);
  }

  hitBolt(player, bolt) {
    bolt.disableBody(true, true);
    if (!this.scene.player.guarding) {
      damage(this.scene, player, this.attack - 2);
    }
  }

}
window.Ghost = Ghost;