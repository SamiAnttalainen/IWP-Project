class Level_2_4 extends Level_2 {
    constructor() {
        super('Level_2_4', 'Level_3_1');
        this.changing = false;
    }

    create() {
        super.create();
        createBoss(this, 2, 700, 300, 250, 2);
        updateHealth(this);
    }

    update() {
        super.update();

        if (this.boss.health <= 0 && !this.changing) {
            this.changing = true;
            loadNextMap(this, this.next, this.music)
        }
    }
}
window.Level_2_4 = Level_2_4;