class Ghost extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, 3, 'enemy17', 'ghostMovement');
    this.movement();
  }
}
window.Ghost = Ghost;