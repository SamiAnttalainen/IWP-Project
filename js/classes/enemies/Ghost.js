class Ghost extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy17', 'ghostMovement');
    this.movement();
  }
}
window.Ghost = Ghost;