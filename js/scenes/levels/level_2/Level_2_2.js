class Level_2_2 extends Level_2 {
    constructor() {
        super('Level_2_2', 'Level_2_3');
    }

    create() {
        super.create();
        createEnemies(this, 400, 465, 2, 'Golem');
        this.player.setHealth(this.playerData.health);
        updateHealth(this);
    }

    update() {
        super.update();

        if (this.golems.countActive(true) === 0) {
            loadNextLevel(this, this.next);
        }
    }
}
window.Level_2_2 = Level_2_2;