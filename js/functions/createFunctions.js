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
}

function createSkullAnimations(scene) {
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

function createBossOneAnimations(scene) {
    scene.anims.create({
        key: 'boss1Movement',
        frames: [
            { key: 'boss1' },
            { key: 'boss2' },
            { key: 'boss3' },
            { key: 'boss4' },
            { key: 'boss5' },
        ],
        frameRate: 10,
        repeat: -1,
    });

    scene.anims.create({
        key: 'bossThrow',
        frames: [
            { key: 'bossThrow' },
        ],
    });

}

function createPlayer(scene, posX, posY) {
    // Player
    scene.player = new Lena(scene, posX, posY);
    scene.player.setCollideWorldBounds(true);
    scene.physics.add.collider(scene.platforms, scene.player);
    scene.physics.add.overlap(scene.player, scene.platforms, () => overlapping(scene), null, scene);
}

function createSkulls(scene, posX, posY, amount) {
    scene.skulls = scene.physics.add.group({
        classType: Skull,
        key: 'enemy1',
        quantity: amount,
        setXY: { x: posX, y: posY, stepX: 200 },
    });
    scene.physics.add.collider(scene.platforms, scene.skulls);
    scene.physics.add.collider(scene.player, scene.skulls, (player, skull) => hitSkull(scene, player, skull), null, scene);
    scene.skulls.children.iterate(function (skull) {
        skull.setCollideWorldBounds(true);
    });
}

function createBoss(scene, number, posX, posY, health, image, animation) {

    if (number === 1) {
        scene.boss = new Boss_1(scene, posX, posY, health, image, animation);
    }
    scene.boss.setScale(1.75)
    scene.boss.setCollideWorldBounds(true);
    scene.physics.add.collider(scene.platforms, scene.boss);
    scene.physics.add.overlap(scene.player, scene.boss, (player, boss) => hitBoss(scene, player, boss), null, scene);

}


function createLevelOne(scene) {
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


window.createHealthBar = createHealthBar;
window.createAnimations = createAnimations;
window.createPlayer = createPlayer;
window.createSkulls = createSkulls;
window.createSkullAnimations = createSkullAnimations;
window.createBossOneAnimations = createBossOneAnimations;
window.createBoss = createBoss;
window.createLevelOne = createLevelOne;