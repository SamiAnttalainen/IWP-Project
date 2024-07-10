function loadImages(scene) {
    for (let i = 1; i <= 21; i++) {
        scene.load.image('lena' + i, 'assets/lena/lena_' + i + '.png');
    }
    for (let i = 1; i <= 97; i++) {
        scene.load.image('enemy' + i, 'assets/enemies/enemy (' + i + ').png');
    }

    scene.load.spritesheet('lena', 'assets/lenaMovementSpriteSheet.png', { frameWidth: 80, frameHeight: 120 });
    scene.load.image('platform', 'assets/screenassets/platform.png');
    scene.load.image('block', 'assets/screenassets/block.png');
    scene.load.image('heartFull', 'assets/screenassets/heartFull.png');
    scene.load.image('heartEmpty', 'assets/screenassets/heartEmpty.png');
    scene.load.image('bottomFloor', 'assets/screenassets/bottomFloor.png');
    scene.load.image('bottomTiles', 'assets/screenassets/bottomTiles.png');
    scene.load.image('pillar', 'assets/screenassets/pillar.png');
}

function loadBossOneImages(scene) {
    for (let i = 1; i <= 5; i++) {
        scene.load.image('boss' + i, 'assets/bosses/core/boss (' + i + ').png', { frameWidth: 104, frameHeight: 62 });
    }
    scene.load.image('bossThrow', 'assets/bosses/core/boss_1_throw.png');
    scene.load.image('bossWeapon', 'assets/bosses/core/boss_1_weapon.png');
}


window.loadImages = loadImages;
window.loadBossOneImages = loadBossOneImages;