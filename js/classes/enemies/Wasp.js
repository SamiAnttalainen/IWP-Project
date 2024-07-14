class Wasp extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 2, 2, 'enemy15', 'waspMovement');
    }
}
window.Wasp = Wasp;