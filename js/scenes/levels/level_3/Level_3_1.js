class Level_3_1 extends Level_3 {
    constructor() {
        super('Level_3_1', 'Level_3_2');
        this.loaded = false;
    }

    create() {
        super.create();
        this.music = this.sound.add('divine', { loop: true, volume: 0.25});
        if (!this.music.isPlaying) {
            this.music.play();
        }
        createEnemies(this, 400, 200, 2, 'Ghost');
        updateHealth(this);
        this.loaded = true;
    }

    update() {
        super.update();

        if (this.ghosts.countActive(true) === 0 && this.loaded) {
            loadNextLevel(this, this.next, this.music);
        }

        this.ghosts.children.iterate(function (ghost) { // Prevents ghost from getting pushed to the top of the screen
            if (ghost.y < 350 || ghost.y > 350) {
                ghost.y = 350;
                ghost.body.setVelocityY(0);}
            });
        }
        
}
window.Level_3_1 = Level_3_1;