const worldWidth = 800;
const worldHeight = 600;


// Enemy movement inspired by https://www.youtube.com/watch?v=IFt_YwDVFNY

let config = {
    type: Phaser.AUTO,
    backgroundColor: '#222222', // Dark grey #
    width: worldWidth,
    height: worldHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            tileBias: 1000,
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {

    for (let i = 1; i <= 21; i++) {
        this.load.image('lena' + i, 'assets/lena/lena_' + i + '.png');
    }
    for (let i = 1; i <= 97; i++) {
        this.load.image('enemy' + i, 'assets/enemies/enemy (' + i + ').png');
    }
    this.load.image('platform', 'assets/platform.png');
    this.load.image('block', 'assets/block.png');
    this.load.image('heart', 'assets/heart.png');
    this.load.image('bottomFloor', 'assets/bottomFloor.png');
}

function create() {


    // Platforms
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'bottomFloor').setScale(3).refreshBody();
    platforms.create(400, 395, 'block').setScale(2).refreshBody();




    // Player
    player = this.physics.add.sprite(100, 300, 'lena12');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(platforms, player);
    this.physics.add.overlap(player, platforms, overlapping, null, this);


    // Enemies
    skull = this.physics.add.sprite(400, 300, 'enemy1');
    skull.setCollideWorldBounds(true);
    this.physics.add.collider(platforms, skull);
    this.physics.add.collider(player, skull);
    this.physics.add.overlap(player, skull, overlapping, null, this);


    // Player animations
    this.anims.create({
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

    this.anims.create({
        key: 'jump',
        frames: [
            { key: 'lena2' },
            { key: 'lena4' },
            { key: 'lena3' },
        ],
        frameRate: 20,});

    this.anims.create({
        key: 'fall',
        frames: [
            { key: 'lena3' },
        ],
    });

    this.anims.create({
        key: 'crouch',
        frames: [
            { key: 'lena1' },
        ],
    })

    this.anims.create({
        key: 'idle',
        frames: [
            { key: 'lena12' },
        ],
    });

    this.anims.create({
        key: 'standingAttack',
        frames: [
            { key: 'lena21' },
            { key: 'lena20' },
            { key: 'lena19' },
        ],
        frameRate: 10,
    });

    this.anims.create({
        key: 'crouchingAttack',
        frames: [
            { key: 'lena17' },
            { key: 'lena18' },
            { key: 'lena16' },
        ],
        frameRate: 10,
    });

    this.anims.create({
        key: 'jumpingAttack',
        frames: [
            { key: 'lena15' },
            { key: 'lena14' },
            { key: 'lena13' },
        ],
        frameRate: 10,
    });


    this.anims.create({
        key: 'skullIdle',
        frames: [
            { key: 'enemy1' },
            { key: 'enemy2' },
            { key: 'enemy3' },
            { key: 'enemy4' },
            { key: 'enemy5' },
        ],
        frameRate: 3,
        repeat: -1,
    })

    skull.anims.play('skullIdle', true);

    // Player movement cursors and ability keys
    cursors = this.input.keyboard.createCursorKeys();
    mouseOne = this.input.mousePointer.leftButtonDown();



}

let crouching = false;
let attacking = false;

function update() {
    this.physics.add.collider(platforms, player);

    if (cursors.left.isDown) {
        if (crouching) {
            standingUp();
        }
        player.setVelocityX(-160);
        if (player.body.touching.down) {
            player.anims.play('movement', true);
        } else if (!player.body.touching.down && this.input.mousePointer.leftButtonDown()) {
            player.anims.play('jumpingAttack', true);
        }
        player.flipX = true;
    } else if (cursors.right.isDown) {
        if (crouching) {
            standingUp();
        }
        player.setVelocityX(160);
        if (player.body.touching.down) {
            player.anims.play('movement', true);
        } else if (!player.body.touching.down && this.input.mousePointer.leftButtonDown()) {
            player.anims.play('jumpingAttack', true);
        }
        player.flipX = false;
    } else if (cursors.up.isDown) {

        if (player.body.touching.down) {
            if (crouching) {
                standingUp();
            }
            player.setVelocityY(-330); // Jump
            player.anims.play('jump', true);
        } else if (!player.body.touching.down && this.input.mousePointer.leftButtonDown()) {
            player.anims.play('jumpingAttack', true);
        }
        
    } else if (cursors.down.isDown && player.body.touching.down) {
        if (!crouching) {
            crouching = true;
            player.anims.play('crouch', true);
            player.body.setSize(81, 86, true);
            player.body.y += 20;
        }
        player.anims.play('crouch', true);
        if (this.input.mousePointer.leftButtonDown()) { 
            attacking = true;
            player.anims.play('crouchingAttack', true);
            player.body.offset.y = 0;
            player.body.offset.x = 0;
        }
    }
     else if (this.input.mousePointer.leftButtonDown()) {
        if (player.body.touching.down && !crouching) {
            attacking = true;
            player.anims.play('standingAttack', true);
            // player.body.setSize(127, 152, true);

        } else if (!player.body.touching.down) {
            player.anims.play('jumpingAttack', true);
        }
    }   else if (!player.body.touching.down && (cursors.left.isDown || cursors.right.isDown)) {
        if (this.input.mousePointer.leftButtonDown()) { 
            player.anims.play('jumpingAttack', true);
        }}

    else {
        player.setVelocityX(0);

        if (player.body.touching.down && !cursors.down.isDown) {
            if (crouching) {
                standingUp();
            }
            player.anims.play('idle', true);
        }
    }
}

// Function to fix the player's hitbox when standing up, so that player does not fall through the platforms.
function standingUp() {
    crouching = false;
    attacking = false;
    player.body.setSize(81, 127, true);
    player.body.offset.y = 0;
    player.body.offset.x = 0;
    player.body.y -= 20;
}

// Function prevents player from falling through the platform when attacking.
function overlapping() {
    player.body.setVelocityY(-75);
}