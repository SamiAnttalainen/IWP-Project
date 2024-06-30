const worldWidth = 800;
const worldHeight = 600;

let config = {
    type: Phaser.AUTO,
    backgroundColor: '#3478db',
    width: worldWidth,
    height: worldHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
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

    for (let i = 1; i <= 12; i++) {
        this.load.image('lena' + i, 'assets/lena_' + i + '.png');
    }
    this.load.image('platform', 'assets/platform.png');
    this.load.image('block', 'assets/block.png');
    this.load.image('heart', 'assets/heart.png');
}

function create() {
    
    // Platforms
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'platform').setScale(2).refreshBody();
    platforms.create(400, 400, 'block').setScale(2).refreshBody();




    // Player
    player = this.physics.add.sprite(100, 300, 'lena12');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(platforms, player);


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


    // Player movement cursors and ability keys
    cursors = this.input.keyboard.createCursorKeys();



}

let crouching = false; // Add this line outside of your update function to track crouching state across updates

function update() {
    this.physics.add.collider(platforms, player);

    if (cursors.left.isDown) {
        player.setVelocityX(-160); // Move left
        if (player.body.touching.down) {
            player.anims.play('movement', true);
        }
        player.setScale(-1, 1); // Flip sprite to face left
    } else if (cursors.right.isDown) {
        player.setVelocityX(160); // Move right
        if (player.body.touching.down) {
            player.anims.play('movement', true); // Reuse 'left' animation for moving right
        }
        player.setScale(1, 1); // Flip sprite back to face right
    } else if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330); // Jump
        player.anims.play('jump', true);
    } else if (cursors.down.isDown && player.body.touching.down) {
        if (!crouching) {
            crouching = true;
        }
        player.anims.play('crouch', true);
        player.body.setSize(81, 86, true);
    } else {
        player.setVelocityX(0);

        if (player.body.touching.down && !cursors.down.isDown) {
            if (crouching) {
                player.y -= 41;
                crouching = false;
            }
            player.body.setSize(81, 127, true);
            player.anims.play('idle', true);
        }
    }
}
