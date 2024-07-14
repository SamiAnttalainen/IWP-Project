// Skull enemy class
class Skull extends Enemy {

    constructor(scene, x, y) {
        super(scene, x, y, 5, 1, 'enemy1', 'skullMovement');
    }
}
window.Skull = Skull;