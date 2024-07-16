class Level_1_4 extends Level_1 {
    constructor() {
        super('Level_1_4', 'Level_2_1');
    }

    create() {
        super.create();
        // this.player.setHealth(this.playerData.health);
        createBoss(this, 1, 700, 475, 200, 1);
        updateHealth(this);
    }

    update() {
        gameMovement(this);

        if (this.boss.health === 0) {
            loadNextMap(this, this.next)
        }

        if (this.player.getHealth() <= 0) {
            this.physics.pause();
            this.scene.start('GameOver', {levelData: this.level});
        }
    }
}
window.Level_1_4 = Level_1_4;