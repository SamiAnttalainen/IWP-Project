class Level_2_4 extends Level_2 {
    constructor() {
        super('Level_2_4', 'Level_2_4');
    }

    create() {
        super.create();
        createBoss(this, 2, 700, 300, 100, 2);
        updateHealth(this);
    }

    update() {
        super.update();

        if (this.boss.health <= 0) {
            loadNextMap(this, this.next)
        }
    }
}
window.Level_2_4 = Level_2_4;