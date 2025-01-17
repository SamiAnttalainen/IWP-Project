// Function loads all the basic images for the game
function loadImages(scene) {
    for (let i = 1; i <= 23; i++) {
        scene.load.image('lena' + i, 'assets/lena/lena_' + i + '.png');
    }
    for (let i = 1; i <= 97; i++) {
        scene.load.image('enemy' + i, 'assets/enemies/enemy (' + i + ').png');
    }
    for (let i = 1; i <= 28; i++) {
        scene.load.image('projectile_' + i, 'assets/projectiles/projectile (' + i + ').png');
    }

    scene.load.image('platform', 'assets/screenassets/platform.png');
    scene.load.image('block', 'assets/screenassets/block.png');
    scene.load.image('bomb', 'assets/screenassets/bomb.png');
    scene.load.image('potion', 'assets/screenassets/potion.png');
    scene.load.image('heartFull', 'assets/screenassets/heartFull.png');
    scene.load.image('heartEmpty', 'assets/screenassets/heartEmpty.png');
    scene.load.image('bottomFloor', 'assets/screenassets/bottomFloor.png');
    scene.load.image('bottomTiles', 'assets/screenassets/bottomTiles.png');
    scene.load.image('pillar', 'assets/screenassets/pillar.png');
    scene.load.image('night', 'assets/screenassets/night.png');
    scene.load.image('hell', 'assets/screenassets/hell.png');
}

function loadBossOneImages(scene) {
    for (let i = 1; i <= 5; i++) {
        scene.load.image('boss' + i, 'assets/bosses/core/boss (' + i + ').png', { frameWidth: 104, frameHeight: 62 });
    }
    scene.load.image('bossThrow', 'assets/bosses/core/boss_1_throw.png');
    scene.load.image('bossWeapon', 'assets/bosses/core/boss_1_weapon.png');
}

function loadBossTwoImages(scene) {
    for (let i=1; i<=12; i++) {
        scene.load.image('death' + i, 'assets/bosses/death/death (' + i + ').png');
    }
}

function loadBossThreeImages(scene) {
    for (let i=1 ; i<=7; i++) {
        scene.load.image('gallagher' + i, 'assets/bosses/gallagher/gallagher (' + i + ').png');
    }
    scene.load.image('ball_1', 'assets/bosses/gallagher/ball (1).png');
    scene.load.image('ball_2', 'assets/bosses/gallagher/ball (2).png');
}

// When the player clears a level, this function is called to load the next level
function loadNextLevel(scene, level, music) {
    scene.add.text(50, 150, 'STAGE CLEARED.\nPREPARE FOR NEXT STAGE!',
        {
        fontSize: '64px',
        fill: '#fff',
        fontFamily: 'ArcadeClassic' 
    });
    scene.time.delayedCall(5000, () => {
        scene.scene.start(level, { playerData: scene.player.getLena(), musicData: music});
    }, [], scene);
    
}

// When the player clears a map, this function is called to load the next map
function loadNextMap(scene, level, music) {
    music.stop();
    scene.victory = scene.sound.add('victory', {volume: 0.25});
    scene.victory.play();
    scene.add.text(50, 150, 'MAP CLEARED.\nPREPARE FOR NEXT MAP!',
        {
        fontSize: '64px',
        fill: '#fff',
        fontFamily: 'ArcadeClassic' 
    });
    scene.time.delayedCall(5000, () => {
        scene.scene.start(level, { playerData: scene.player.getLena() });
    }, [], scene);
}

// When the player beats the game, this function is called to load the ending scene
function loadEnding(scene, music) {
    music.stop();
    scene.victory = scene.sound.add('victory', {volume: 0.25});
    scene.victory.play();
    scene.add.text(50, 150, 'MAP CLEARED!\nYOU BEAT THE GAME!',
        {
        fontSize: '64px',
        fill: '#fff',
        fontFamily: 'ArcadeClassic' 
    });

    scene.time.delayedCall(5000, () => {
        scene.scene.start('Ending');
    }, [], scene);
}




window.loadImages = loadImages;
window.loadBossOneImages = loadBossOneImages;
window.loadBossTwoImages = loadBossTwoImages;
window.loadBossThreeImages = loadBossThreeImages;
window.loadNextLevel = loadNextLevel;
window.loadNextMap = loadNextMap;
window.loadEnding = loadEnding;
