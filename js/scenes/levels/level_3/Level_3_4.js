class Level_3_4 extends Level_3 {
    constructor() {
        super('Level_3_4', 'Level_3_4');
        this.loaded = false;
    }

    create() {
        super.create();
        createBoss(this, 3, 700, 450, 300, 3)
        updateHealth(this);
        this.loaded = true;
    }

    update() {
        super.update();

        if (this.boss.health <= 0 && this.loaded) {
            loadNextMap(this, this.next);
        }
    }
}