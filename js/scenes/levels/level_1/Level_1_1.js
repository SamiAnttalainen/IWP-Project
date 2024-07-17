// Level one of the game
class Level_1_1 extends Level_1 {
    constructor() {
        super('Level_1_1', 'Level_1_2');
    }

    create() {

        super.create();
        this.music = this.sound.add('vecanti', { loop: true, volume: 0.25});
        if (!this.music.isPlaying) {
            this.music.play();
        }
        createEnemies(this, 400, 500, 2, 'Skull');
        this.player.setHealth(10);
        updateHealth(this);
    }
}

window.Level_1_1 = Level_1_1;