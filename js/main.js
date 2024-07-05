const worldWidth = 800;
const worldHeight = 600;
const LEFT = 0;
const RIGHT = 1;
const IDLE = 2;
// let health = 10;
// const maxHealth = 10;


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
        frameRate: 5,
    });

    this.anims.create({
        key: 'crouchingAttack',
        frames: [
            { key: 'lena17' },
            { key: 'lena18' },
            { key: 'lena16' },
        ],
        frameRate: 5,
    });

    this.anims.create({
        key: 'jumpingAttack',
        frames: [
            { key: 'lena15' },
            { key: 'lena14' },
            { key: 'lena13' },
        ],
        frameRate: 5,
    });


    this.anims.create({
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
    })

    // Player
    player = new Lena(this, 100, 300);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(platforms, player);
    this.physics.add.overlap(player, platforms, overlapping, null, this);

    skulls = this.physics.add.group({
        classType: Skull,
        key: 'enemy1',
        repeat: 1,
        setXY: { x: 400, y: 300, stepX: 200 },
    });
    this.physics.add.collider(platforms, skulls);
    this.physics.add.collider(player, skulls, hitSkull, null, this);
    skulls.children.iterate(function (skull) {
        skull.setCollideWorldBounds(true);
    });

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
            attacking = true;
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
            attacking = true;
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
            attacking = true;
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
            attacking = true;
            player.anims.play('jumpingAttack', true);
        }
    }   else if (!player.body.touching.down && (cursors.left.isDown || cursors.right.isDown)) {
        if (this.input.mousePointer.leftButtonDown()) { 
            attacking = true;
            player.anims.play('jumpingAttack', true);
        }}

    else {
        player.setVelocityX(0);
        attacking = false;
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

function hitSkull(player, skull) {

    
    if (attacking) { // If attack animation is on, then the skull is destroyed.
        skull.disableBody(true, true);
    }
     else // Else player loses health and is pushed back.
     {
        let health;
        health = player.getHealth() - 1;
        player.setHealth(health);
        player.setTint(0xff0000);
        player.x -= 100;
        setTimeout(() => {
            player.clearTint();
        }, 1000);
    }
}


// Classes

// Player class
class Lena extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'lena12');
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.anims.play('idle', true);
        this.health = 10;
        this.maxHealth = 10;
    }

    getHealth() {
        return this.health;
    }

    setHealth(health) {
        this.health = health;
    }
    
}

// Enemy classes inspired by SUPERTOMMY https://www.youtube.com/watch?v=IFt_YwDVFNY 

// Skull enemy class
class Skull extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'enemy1');
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.anims.play('skullMovement', true);
        this.movement();
    }

    movement() {
        this.enemyTimer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(2000, 4000),
            callback: this.skullMovement,
            callbackScope: this,
            loop: true,
        });
    }

    skullMovement() {
        let direction;
        if (this.body.velocityX < 0) {
            direction = Phaser.Math.Between(IDLE, RIGHT);
        } else if (this.body.velocityX > 0) {
            direction = Phaser.Math.Between(IDLE, LEFT);
        } else {
            direction = Phaser.Math.Between(LEFT, RIGHT);
        }
    
        if (direction === LEFT) {
            this.setVelocityX(-50);
            this.flipX = false;
        } else if (direction === RIGHT) {
            this.setVelocityX(50);
            this.flipX = true;
        } else {
            this.setVelocityX(0);
        }
    }
}