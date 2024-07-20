class Golem extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 50, 2, 'enemy52', 'golemMovement');
    }
}
window.Golem = Golem;