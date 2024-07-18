function gameMovement(scene) {
    if (scene.cursors.left.isDown) { // Move left
        if (scene.player.crouching) {
            standingUp(scene);
        }
        scene.player.setVelocityX(-160);
        if (scene.player.body.touching.down) {
            scene.player.anims.play('movement', true);
        } else if (!scene.player.body.touching.down && scene.input.mousePointer.leftButtonDown()) 
            {
            scene.player.attacking = true;
            scene.player.anims.play('jumpingAttack', true);
        }
        scene.player.flipX = true;
    } else if (scene.cursors.right.isDown) { // Move right
        if (scene.player.crouching) {
            standingUp(scene);
        }
        scene.player.setVelocityX(160);
        if (scene.player.body.touching.down) {
            scene.player.anims.play('movement', true);
        } else if (!scene.player.body.touching.down && scene.input.mousePointer.leftButtonDown()) 
            {
            scene.player.attacking = true;
            scene.player.anims.play('jumpingAttack', true);
        }
        scene.player.flipX = false;
    } else if (scene.cursors.up.isDown) { // Jump

        if (scene.player.body.touching.down) {
            if (scene.player.crouching) {
                standingUp(scene);
            }
            scene.player.setVelocityY(-330);
            scene.player.anims.play('jump', true);
        } else if (!scene.player.body.touching.down && scene.input.mousePointer.leftButtonDown()) {
            scene.player.attacking = true;
            scene.player.anims.play('jumpingAttack', true);
        }
        
    } else if (scene.cursors.down.isDown && scene.player.body.touching.down) {
        if (!scene.player.crouching) { // Crouch
            scene.player.crouching = true;
            scene.player.anims.play('crouch', true);
            scene.player.body.setSize(81, 86, true);
            scene.player.body.y += 20; // Makes crouching more smooth
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

        else if (scene.cursors.shift.isDown) {
            scene.player.guarding = true;
            scene.player.setVelocityX(0);
            scene.player.anims.play('guard', true);
        }
        else {
        scene.player.setVelocityX(0);
        scene.player.attacking = false;
        scene.player.guarding = false;
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

// Function prevents player from falling through the platform when hit box changes during the animation
function overlapping(scene) {
    scene.player.body.setVelocityY(-75);
}

function damage(scene, player, amount) {
    let health = player.getHealth() - amount;
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

// Function calculates the projectile direction and angle.
function direction(scene, weapon, x, y, degree = 180) {
    const velocity = 100;
    let dx = scene.player.x - x;
    let dy = scene.player.y - y;
    let len = Math.sqrt(dx**2 + dy**2);
    dx = dx / len;
    dy = dy / len;
    let angle = Math.atan2(dy, dx);
    angle = angle * (DEGREE / Math.PI);
    weapon.setVelocityX(dx * velocity);
    weapon.setVelocityY(dy * velocity);
    weapon.setAngle(angle + degree);
}

function collectHeart(scene, player, heart) {
    heart.disableBody(true, true);
    if (player.getHealth() < player.getMaxHealth()) {
        let health = player.getHealth() + 1;
        player.setHealth(health);
        updateHealth(scene);
    }
}
 
function spawnHealth(scene, x, y, rate) {
    let num = Phaser.Math.Between(0, rate);
    if (num === 0) {
        let health = scene.healths.create(x, y, 'heartFull').setScale(1.5);
        health.setCollideWorldBounds(true);
        health.setBounce(1);
        health.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
}

function hitEnemy(scene, player, enemy) {
    if (scene.player.attacking) {
        enemy.health -= 1;
        if (enemy.health <= 0) {
            enemy.alive = false;
            enemy.disableBody(true, true);
            spawnHealth(scene, enemy.x, enemy.y,  4 - enemy.attack);
        }
    } else if (!scene.player.guarding) {
        damage(scene, player, enemy.attack);
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
        damage(scene, player, boss.attack);
    }
}

// Updates the player's health bar icons when player takes damage.
function updateHealth(scene) {
    const health = scene.player.getHealth();
    const maxHealth = scene.player.getMaxHealth();
    for (let i = 0; i < maxHealth; i++) {
        if (i < health) {
            scene.hearts.getChildren()[i].setTexture('heartFull');
        } else {
            scene.hearts.getChildren()[i].setTexture('heartEmpty');
        }
    }
}

window.gameMovement = gameMovement;
window.standingUp = standingUp;
window.overlapping = overlapping;
window.damage = damage;
window.direction = direction;
window.collectHeart = collectHeart;
window.hitEnemy = hitEnemy;
window.updateHealth = updateHealth;