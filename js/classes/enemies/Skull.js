// Skull enemy class
class Skull extends Enemy {

    constructor(scene, x, y, health, image, animation) {
        super(scene, x, y, 5, 'enemy1', 'skullMovement');
        this.movement();
    }
}
window.Skull = Skull;