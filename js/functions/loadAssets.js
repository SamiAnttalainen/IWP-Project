function loadImages(scene) {
    for (let i = 1; i <= 21; i++) {
        scene.load.image('lena' + i, 'assets/lena/lena_' + i + '.png');
    }
    for (let i = 1; i <= 97; i++) {
        scene.load.image('enemy' + i, 'assets/enemies/enemy (' + i + ').png');
    }

    scene.load.spritesheet('lena', 'assets/lenaMovementSpriteSheet.png', { frameWidth: 80, frameHeight: 120 });
    scene.load.image('platform', 'assets/screenAssets/platform.png');
    scene.load.image('block', 'assets/screenAssets/block.png');
    scene.load.image('heartFull', 'assets/screenAssets/heartFull.png');
    scene.load.image('heartEmpty', 'assets/screenAssets/heartEmpty.png');
    scene.load.image('bottomFloor', 'assets/screenAssets/bottomFloor.png');
    scene.load.image('bottomTiles', 'assets/screenAssets/bottomTiles.png');
    scene.load.image('pillar', 'assets/screenAssets/pillar.png');
}

function createHealthBar(scene) {
    // Health bar UI inspired by Scott Westover https://www.youtube.com/watch?v=5LUDslRr-74
    scene.hearts = scene.add.group({
        classType: Phaser.GameObjects.Image
    });
    
    scene.hearts.createMultiple({
        key: 'heartFull',
        setXY: {
            x: 16,
            y: 16,
            stepX: 25
        },
        quantity: 10
    });
}

function createAnimations(scene) {
    scene.anims.create({
        key: 'movement',
        frames: [
            { key: 'lena5' },
            { key: 'lena6' },
            { key: 'lena7' },
            { key: 'lena8' },
            { key: 'lena9' },
            { key: 'lena10' },
        ],
        frameRate: 10,
        repeat: -1,
    });
    // scene.anims.create({
    //     key: 'movement',
    //     frames: scene.anims.generateFrameNumbers('lena', { start: 0, end: 5 }),
    //     frameRate: 10,
    //     repeat: -1
    // });

    scene.anims.create({
        key: 'jump',
        frames: [
            { key: 'lena2' },
            { key: 'lena4' },
            { key: 'lena3' },
        ],
        frameRate: 20,
    });

    scene.anims.create({
        key: 'fall',
        frames: [
            { key: 'lena3' },
        ],
    });

    scene.anims.create({
        key: 'crouch',
        frames: [
            { key: 'lena1' },
        ],
    });

    scene.anims.create({
        key: 'idle',
        frames: [
            { key: 'lena12' },
        ],
    });

    scene.anims.create({
        key: 'standingAttack',
        frames: [
            { key: 'lena21' },
            { key: 'lena20' },
            { key: 'lena19' },
        ],
        frameRate: 5,
    });

    scene.anims.create({
        key: 'crouchingAttack',
        frames: [
            { key: 'lena17' },
            { key: 'lena18' },
            { key: 'lena16' },
        ],
        frameRate: 5,
    });

    scene.anims.create({
        key: 'jumpingAttack',
        frames: [
            { key: 'lena15' },
            { key: 'lena14' },
            { key: 'lena13' },
        ],
        frameRate: 5,
    });

    scene.anims.create({
        key: 'skullMovement',
        frames: [
            { key: 'enemy1' },
            { key: 'enemy2' },
            { key: 'enemy3' },
            { key: 'enemy4' },
            { key: 'enemy5' },
        ],
        frameRate: 3,
        repeat: -1,
    });
}

function createPlayer(scene, posX, posY) {
    // Player
    scene.player = new Lena(scene, posX, posY);
    scene.player.setCollideWorldBounds(true);
    scene.physics.add.collider(scene.platforms, scene.player);
    scene.physics.add.overlap(scene.player, scene.platforms, () => overlapping(scene), null, scene);
}

function createSkulls(scene, posX, posY) {
    scene.skulls = scene.physics.add.group({
        classType: Skull,
        key: 'enemy1',
        repeat: 1,
        setXY: { x: posX, y: posY, stepX: 200 },
    });
    scene.physics.add.collider(scene.platforms, scene.skulls);
    scene.physics.add.collider(scene.player, scene.skulls, (player, skull) => hitSkull(scene, player, skull), null, scene);
    scene.skulls.children.iterate(function (skull) {
        skull.setCollideWorldBounds(true);
    });
}


function loadLevelOne(scene) {
    // // Platforms
    scene.platforms = scene.physics.add.staticGroup();
    scene.platforms.create(200, 568, 'bottomTiles').setScale(2).refreshBody();
    scene.platforms.create(600, 568, 'bottomTiles').setScale(2).refreshBody();

    // scene.platforms.create(400, 395, 'block').setScale(2).refreshBody();
    scene.pillars = scene.physics.add.staticGroup({
        classType: Phaser.GameObjects.Image,
        key: 'pillar',
        setXY: { x: 100, y: 235, stepX: 150 },
        quantity: 5
    });
    scene.pillars.children.iterate(function (pillar) {
        pillar.setScale(1.5);
    });
}

window.loadImages = loadImages;
window.createHealthBar = createHealthBar;
window.createAnimations = createAnimations;
window.createPlayer = createPlayer;
window.createSkulls = createSkulls;
window.loadLevelOne = loadLevelOne;