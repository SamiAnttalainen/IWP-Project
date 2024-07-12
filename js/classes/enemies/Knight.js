class Knight extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, 10, 'enemy7', 'knightMovement');
        this.movement();
    }
}
window.Knight = Knight;