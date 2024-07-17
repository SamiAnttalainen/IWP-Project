class Level_3_2 extends Level_3 {
    constructor() {
        super('Level_3_2', 'Level_3_3');
        this.loaded = false;
    }

    create() {
        super.create();
        createEnemies(this, 400, 470, 2, 'Knight');
        this.player.setHealth(this.playerData.health);
        updateHealth(this);
        this.loaded = true;
    }

    update() {
        super.update();

        if (this.knights.countActive(true) === 0 && this.loaded) {
            loadNextLevel(this, this.next, this.music);
        }
    }
}
window.Level_3_2 = Level_3_2;