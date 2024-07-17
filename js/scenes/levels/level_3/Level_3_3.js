class Level_3_3 extends Level_3 {
    constructor() {
        super('Level_3_3', 'Level_3_4');
        this.loaded = false;
    }

    create() {
        super.create();
        this.createPlatforms();
        createEnemies(this, 700, 100, 1, 'Ghost');
        createEnemies(this, 400, 460, 1, 'Knight');
        this.player.setHealth(this.playerData.health);
        updateHealth(this);
        this.loaded = true;
    }

    update() {
        super.update();

        if (this.ghosts.countActive(true) === 0 && this.knights.countActive(true) === 0 && this.loaded) {
            loadNextLevel(this, this.next);
        }
    }

    createPlatforms() {
        this.platforms.create(400, 375, 'bottomFloor').setScale(0.75).refreshBody();
        this.platforms.create(150, 205, 'bottomFloor').setScale(0.75).refreshBody();
        this.platforms.create(700, 205, 'bottomFloor').setScale(0.75).refreshBody();
        this.physics.add.collider(this.platforms, this.player);
    }
}
window.Level_3_3 = Level_3_3;