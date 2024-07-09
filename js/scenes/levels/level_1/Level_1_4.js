class Level_1_4 extends Level_1 {
    constructor() {
        super('Level_1_4', 'Level_1_5', 0);
    }

    preload() {
        super.preload();
        for (let i=1; i <= 5; i++) {
            this.load.image('boss'+i, 'assets/bosses/core/boss (' + i + ').png', { frameWidth: 104, frameHeight: 62 });
        }
        this.load.image('bossThrow', 'assets/bosses/core/boss_1_throw.png');
        this.load.image('bossWeapon', 'assets/bosses/core/boss_1_weapon.png');
    }

    create() {
        createBossOneAnimations(this);
        super.create();
        // this.player.setHealth(this.playerData.health);
        createBoss(this, 1, 700, 475, 100);
        updateHealth(this);
    }

    update() {
        gameMovement(this);
        // Checks if player health is 0, then game over
        if (this.player.getHealth() <= 0) {
            this.scene.start('GameOver');
        }
    }
}
window.Level_1_4 = Level_1_4;