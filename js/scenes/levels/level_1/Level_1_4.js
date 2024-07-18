class Level_1_4 extends Level_1 {
    constructor() {
        super('Level_1_4', 'Level_2_1');
        this.changing = false;
    }

    create() {
        super.create();
        createBoss(this, 1, 700, 475, 200, 1);
        updateHealth(this);
    }

    update() {
        gameMovement(this);

        if (this.boss.health === 0 && !this.changing) {
            this.changing = true;
            loadNextMap(this, this.next, this.music)
        }

        if (this.player.getHealth() <= 0) {
            this.physics.pause();
            this.scene.start('GameOver', {levelData: this.level, musicData: this.music });
        }
    }
}
window.Level_1_4 = Level_1_4;