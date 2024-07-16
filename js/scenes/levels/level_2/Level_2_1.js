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

        this.wasps.children.iterate(function (wasp) { // Prevents wasp from getting pushed to the top of the screen
            if (wasp.y < 400 || wasp.y > 400) {
                wasp.y = 400;
                wasp.body.setVelocityY(0);}
            });
        }
}
window.Level_2_1 = Level_2_1;