class Level_2_3 extends Level_2 {
    constructor() {
        super('Level_2_3', 'Level_2_4');
    }

    create() {
        super.create();
        createEnemies(this, 300, 400, 2, 'Wasp');
        createEnemies(this, 400, 465, 2, 'Golem');
        updateHealth(this);
    }

    update() {
        super.update();

        if (this.golems.countActive(true) === 0 && this.wasps.countActive(true) === 0) {
            loadNextLevel(this, this.next);
        }
    }
}
window.Level_2_3 = Level_2_3;