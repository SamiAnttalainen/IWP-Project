class Golem extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 25, 'enemy52', 'golemMovement');
        this.movement();
    }
}
window.Golem = Golem;