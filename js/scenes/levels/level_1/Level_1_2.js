class Level_1_2 extends Level_1 {
    constructor() {
        super('Level_1_2', 'Level_1_3');
    }

    create() {
        super.create();
        this.platforms.create(300, 200, 'bottomFloor').setScale(0.75).refreshBody();
        this.platforms.create(650, 375, 'bottomFloor').setScale(0.75).refreshBody();
        this.player.setHealth(this.playerData.health);
        createEnemies(this, 200, 100, 4, 'Skull');
        updateHealth(this);
    }
}
window.Level_1_2 = Level_1_2;