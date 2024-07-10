function gameMovement(scene) {
    if (scene.cursors.left.isDown) {
        if (scene.player.crouching) {
            standingUp(scene);
        }
        scene.player.setVelocityX(-160);
        if (scene.player.body.touching.down) {
            scene.player.anims.play('movement', true);
        } else if (!scene.player.body.touching.down && scene.input.mousePointer.leftButtonDown()) {
            scene.player.attacking = true;
            scene.player.anims.play('jumpingAttack', true);
        }
        scene.player.flipX = true;
    } else if (scene.cursors.right.isDown) {
        if (scene.player.crouching) {
            standingUp(scene);
        }
        scene.player.setVelocityX(160);
        if (scene.player.body.touching.down) {
            scene.player.anims.play('movement', true);
        } else if (!scene.player.body.touching.down && scene.input.mousePointer.leftButtonDown()) {
            scene.player.attacking = true;
            scene.player.anims.play('jumpingAttack', true);
        }
        scene.player.flipX = false;
    } else if (scene.cursors.up.isDown) {

        if (scene.player.body.touching.down) {
            if (scene.player.crouching) {
                standingUp(scene);
            }
            scene.player.setVelocityY(-330); // Jump
            scene.player.anims.play('jump', true);
        } else if (!scene.player.body.touching.down && scene.input.mousePointer.leftButtonDown()) {
            scene.player.attacking = true;
            scene.player.anims.play('jumpingAttack', true);
        }
        
    } else if (scene.cursors.down.isDown && scene.player.body.touching.down) {
        if (!scene.player.crouching) {
            scene.player.crouching = true;
            scene.player.anims.play('crouch', true);
            scene.player.body.setSize(81, 86, true);
            scene.player.body.y += 20;
        }
        scene.player.anims.play('crouch', true);
        if (scene.input.mousePointer.leftButtonDown()) { 
            scene.player.attacking = true;
            scene.player.anims.play('crouchingAttack', true);
            scene.player.body.offset.y = 0;
            scene.player.body.offset.x = 0;
        }
    
    }
    else if (scene.input.mousePointer.leftButtonDown()) {
        if (scene.player.body.touching.down && !scene.player.crouching) {
            scene.player.attacking = true;
            scene.player.anims.play('standingAttack', true);
            // scene.player.body.setSize(127, 152, true);

        } else if (!scene.player.body.touching.down) {
            scene.player.attacking = true;
            scene.player.anims.play('jumpingAttack', true);
        }
    }   else if (!scene.player.body.touching.down && (scene.cursors.left.isDown || scene.cursors.right.isDown)) {
        if (scene.input.mousePointer.leftButtonDown()) { 
            scene.player.attacking = true;
            scene.player.anims.play('jumpingAttack', true);
        }}

    else {
        scene.player.setVelocityX(0);
        scene.player.attacking = false;
        if (scene.player.body.touching.down && !scene.cursors.down.isDown) {
            if (scene.player.crouching) {
                standingUp(scene);
            }
            scene.player.anims.play('idle', true);
        }
    }
}

// Function to fix the player's hitbox when standing up, so that player does not fall through the platforms.
function standingUp(scene) {
    scene.player.crouching = false;
    scene.player.attacking = false;
    scene.player.body.setSize(81, 127, true);
    scene.player.body.offset.y = 0;
    scene.player.body.offset.x = 0;
    scene.player.body.y -= 20;
    }

// Function prevents player from falling through the platform when player is attacking.
function overlapping(scene) {
    scene.player.body.setVelocityY(-75);
}

function hitSkull(scene, player, skull) {
    if (scene.player.attacking) { // If attack animation is on, then the skull is destroyed.
        skull.disableBody(true, true);
    }
    else // Else scene.player loses health and is pushed back.
    {
        let health;
        health = player.getHealth() - 1;
        player.setHealth(health);
        updateHealth(scene);
        player.setTint(0xff0000);
        if (player.flipX) {
            player.x += 100;
        } else {
            player.x -= 100;
        }
        setTimeout(() => {
            player.clearTint();
        }, 1000);
    }
}

function hitBoss(scene, player, boss) {
    if (scene.player.attacking) {
        boss.health -= 1;
        console.log(scene.boss.health);
        if (scene.boss.health <= 0) {
            boss.alive = false;
            boss.disableBody(true, true);
        }
    } else {
        let health;
        health = player.getHealth() - 1;
        player.setHealth(health);
        updateHealth(scene);
        player.setTint(0xff0000);
        if (player.flipX) {
            player.x += 100;
        } else {
            player.x -= 100;
        }
        setTimeout(() => {
            player.clearTint();
        }, 1000);
    }
}


// Updates the player's health bar icons when player takes damage.
function updateHealth(scene) {
    const health = scene.player.getHealth();
    const maxHealth = scene.player.getMaxHealth();
    // console.log(health);
    // console.log(maxHealth);
    for (let i = 0; i < maxHealth; i++) {
        if (i < health) {
            scene.hearts.getChildren()[i].setTexture('heartFull');
        } else {
            scene.hearts.getChildren()[i].setTexture('heartEmpty');
        }
    }
}

function loadNextLevel(scene, level) {
    scene.add.text(50, 150, 'STAGE CLEARED.\nPREPARE FOR NEXT STAGE',
        {
        fontSize: '64px',
        fill: '#fff',
        fontFamily: 'ArcadeClassic' 
    });

    setTimeout(() => {
        scene.scene.start(level, { playerData: scene.player.getLena() });
        scene.scene.remove(scene.key);
    }, 5000);
}

window.gameMovement = gameMovement;
window.standingUp = standingUp;
window.overlapping = overlapping;
window.hitSkull = hitSkull;
window.updateHealth = updateHealth;
window.loadNextLevel = loadNextLevel;