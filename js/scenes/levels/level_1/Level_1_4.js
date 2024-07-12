class Level_1_4 extends Level_1 {
    constructor() {
        super('Level_1_4', 'Level_2_1');
    }

    create() {
        super.create();
        // this.player.setHealth(this.playerData.health);
        createBoss(this, 1, 700, 475, 100);
        updateHealth(this);
    }

    update() {
        gameMovement(this);

        if (this.boss.health === 0) {
            loadNextMap(this, this.next)
        }

        // Checks if player health is 0, then game over
        if (this.player.getHealth() <= 0) {
            this.scene.start('GameOver');
        }
    }
}
window.Level_1_4 = Level_1_4;