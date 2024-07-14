class Level_2_1 extends Level_2 {
    
    constructor() {
        super('Level_2_1', 'Level_2_2');
        this.loaded = false;
    }

    create() {

        super.create();
        createEnemies(this, 200, 400, 3, 'Wasp');
        updateHealth(this);
        this.loaded = true;
    }


    update() {
        super.update();

        if (this.wasps.countActive(true) === 0 && this.loaded) {
            loadNextLevel(this, this.next);
        }
    }
}
window.Level_2_1 = Level_2_1;