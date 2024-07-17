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
        key: 'guard',
        frames: [
            { key: 'lena11' },
        ]
    })

    scene.anims.create({
        key: 'idle',
        frames: [
            { key: 'lena12' },
        ],
    });

    scene.anims.create({
        key: 'victory',
        frames: [
            {key: 'lena22'}
        ]
    });

    scene.anims.create({
        key: 'death',
        frames: [
            {key: 'lena23'}
        ]
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

function createWaspAnimations(scene) {
    scene.anims.create({
        key: 'waspMovement',
        frames: [
            { key: 'enemy15' },
            { key: 'enemy16' },
        ],
        frameRate: 3,
        repeat: -1,
    });
}

function createGolemAnimations(scene) {

    scene.anims.create({
        key: 'golemMovement',
        frames: [
            { key: 'enemy52' },
            { key: 'enemy53' },
            { key: 'enemy54' },
            { key: 'enemy55' },
        ],
        frameRate: 3,
        repeat: -1,
    });
}

function createGhostAnimations(scene) {

    scene.anims.create({
        key: 'ghostMovement',
        frames: [
            { key: 'enemy17' },
            { key: 'enemy18' },
            { key: 'enemy19' },],
        frameRate: 3,
        repeat: -1,
    });

    scene.anims.create({
        key: 'ghostBolt',
        frames: [
            { key: 'projectile_2'},
            { key: 'projectile_3'},],
        frameRate: 10,
        repeat: -1,
    });
}

function createKnightAnimations(scene) {
    
        scene.anims.create({
            key: 'knightMovement',
            frames: [
                { key: 'enemy7' },
                { key: 'enemy8' },
                { key: 'enemy9' },
                { key: 'enemy10' },
            ],
            frameRate: 3,
            repeat: -1,
        });

        scene.anims.create({
            key: 'knightAttack',
            frames: [
                { key: 'enemy11' },
                { key: 'enemy12' },
                { key: 'enemy13' },
            ],
            frameRate: 3,
        });

        scene.anims.create({
            key: 'knightProjectile',
            frames: [
                { key: 'enemy14' },
            ],
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

function createBossTwoAnimations(scene) {
    scene.anims.create({
        key: 'boss2Movement',
        frames: [
            { key: 'death1' },
            { key: 'death2' },
            { key: 'death3' },
        ],
        frameRate: 10,
        repeat: -1,
    });

    scene.anims.create({
        key: 'boss2Attack',
        frames: [
            { key: 'death4' },
            { key: 'death5' },
            { key: 'death6' },
            { key: 'death7' },
            { key: 'death9' },
        ],
    });

    scene.anims.create({
        key: 'boss2Projectile',
        frames: [
            { key: 'death10' },
            { key: 'death11' },
            { key: 'death12' },
        ],
    });

    scene.anims.create({
        key: 'boss2Burst',
        frames: [
            { key: 'projectile_10' },
            { key: 'projectile_11' },
        ],
        frameRate: 10,
        repeat: -1,
    })

    scene.anims.create({
        key: 'boss2Flame',
        frames: [
            { key: 'projectile_21' },
            { key: 'projectile_22' },
        ],
        frameRate: 10,
        repeat: -1,
    });
}

function createBossThreeAnimations(scene) {

    scene.anims.create({
        key: 'boss3Movement',
        frames: [
            // { key: 'gallagher1' },
            { key: 'gallagher2' },
            { key: 'gallagher3' },
            { key: 'gallagher4' },
            { key: 'gallagher5' },
        ],
        frameRate: 3,
        repeat: -1,
    });

    scene.anims.create({
        key: 'boss3Attack',
        frames: [
            { key: 'gallagher6' },
            { key: 'gallagher7' },
        ],
        frameRate: 3,
    });

    scene.anims.create({
        key: 'boss3Projectile',
        frames: [
            { key: 'ball_1' },
            {key: 'ball_2'},
        ],
        frameRate: 10,
        repeat: -1,    
    });

    scene.anims.create({
        key: 'boss3Burst',
        frames: [
            { key: 'projectile_7' },
            {key: 'projectile_8'},
            {key: 'projectile_9'},
        ],
        frameRate: 10,
        repeat: -1,
    });
    
    scene.anims.create({
        key: 'boss3Pyro',
        frames: [
            { key: 'projectile_18' },
            {key: 'projectile_19'},
            {key: 'projectile_20'},
        ],
        frameRate: 10,
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


function createEnemies(scene, posX, posY, amount, type) {

    if (type === 'Skull') {
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
    } else if (type === 'Wasp') {
        scene.wasps = scene.physics.add.group({
            classType: Wasp,
            key: 'enemy15',
            quantity: amount,
            setXY: { x: posX, y: posY, stepX: 200 },
        });
        scene.physics.add.collider(scene.platforms, scene.wasps);
        scene.physics.add.collider(scene.player, scene.wasps, (player, wasp) => hitWasp(scene, player, wasp), null, scene);
        scene.wasps.children.iterate(function (wasp) {
            wasp.setCollideWorldBounds(true);
            wasp.body.setAllowGravity(false);
        });
    } else if (type === 'Golem') {
        scene.golems = scene.physics.add.group({
            classType: Golem,
            key: 'enemy52',
            quantity: amount,
            setXY: { x: posX, y: posY, stepX: 200 },
        });
        scene.physics.add.collider(scene.platforms, scene.golems);
        scene.physics.add.collider(scene.player, scene.golems, (player, golem) => hitGolem(scene, player, golem), null, scene);
        scene.golems.children.iterate(function (golem) {
            golem.setCollideWorldBounds(true);
        });
    } else if (type === 'Ghost') {
        scene.ghosts = scene.physics.add.group({
            classType: Ghost,
            key: 'enemy17',
            quantity: amount,
            setXY: { x: posX, y: posY, stepX: 200 },
        });
        scene.physics.add.collider(scene.platforms, scene.ghosts);
        scene.physics.add.collider(scene.player, scene.ghosts, (player, ghost) => hitGhost(scene, player, ghost), null, scene);
        scene.ghosts.children.iterate(function (ghost) {
            ghost.setCollideWorldBounds(true);
            ghost.body.setAllowGravity(false);
        });
    } else if (type === 'Knight') {
        scene.knights = scene.physics.add.group({
            classType: Knight,
            key: 'enemy7',
            quantity: amount,
            setXY: { x: posX, y: posY, stepX: 200 },
        });
        scene.physics.add.collider(scene.platforms, scene.knights);
        scene.physics.add.collider(scene.player, scene.knights, (player, knight) => hitKnight(scene, player, knight), null, scene);
        scene.knights.children.iterate(function (knight) {
            knight.setCollideWorldBounds(true);
        });
    }
}

function createBoss(scene, number, posX, posY, health, attack) {

    if (number === 1) {
        scene.boss = new Boss_1(scene, posX, posY, health, attack);
    } else if (number === 2) {
        scene.boss = new Boss_2(scene, posX, posY, health, attack);
    } else if (number === 3) {
        scene.boss = new Boss_3(scene, posX, posY, health, attack);
    }
    scene.boss.setScale(1.75)
    scene.boss.setCollideWorldBounds(true);
    scene.physics.add.collider(scene.platforms, scene.boss);
    scene.physics.add.overlap(scene.player, scene.boss, (player, boss) => hitBoss(scene, player, boss), null, scene);
}


window.createHealthBar = createHealthBar;
window.createAnimations = createAnimations;
window.createPlayer = createPlayer;
window.createEnemies = createEnemies;
window.createSkullAnimations = createSkullAnimations;
window.createWaspAnimations = createWaspAnimations;
window.createGolemAnimations = createGolemAnimations;
window.createGhostAnimations = createGhostAnimations;
window.createKnightAnimations = createKnightAnimations;
window.createBossOneAnimations = createBossOneAnimations;
window.createBossTwoAnimations = createBossTwoAnimations;
window.createBossThreeAnimations = createBossThreeAnimations;
window.createBoss = createBoss;