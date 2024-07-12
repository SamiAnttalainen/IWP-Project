class Level_1_3 extends Level_1 {
    constructor() {
        super('Level_1_3', 'Level_1_4');
    }

    create() {
        super.create();
        this.platforms.create(300, 200, 'bottomFloor').setScale(0.75).refreshBody();
        this.platforms.create(650, 375, 'bottomFloor').setScale(0.75).refreshBody();
        this.platforms.create(100, 350, 'bottomFloor').setScale(0.5).refreshBody();
        this.player.setHealth(this.playerData.health);
        createEnemies(this, 100, 100, 6, 'Skull');
        updateHealth(this);
    }
}
window.Level_1_3 = Level_1_3;