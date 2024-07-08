
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

// Function prevents player from falling through the platform when player.attacking.
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

// Updates the player's health bar icons when player takes damage.
function updateHealth(scene) {
    const health = scene.player.getHealth();
    const maxHealth = scene.player.getMaxHealth();
    console.log(health);
    console.log(maxHealth);
    for (let i = 0; i < maxHealth; i++) {
        if (i < health) {
            scene.hearts.getChildren()[i].setTexture('heartFull');
        } else {
            scene.hearts.getChildren()[i].setTexture('heartEmpty');
        }
    }
}

function createScene(scene, title, items) {
    scene.add.text(225, 150, title, {
        fontSize: '64px',
        fill: '#fff',
        fontFamily: 'ArcadeClassic' 
    });
    scene.add.text(275, 250, 'SELECT:', {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'ArcadeClassic'
    });

    scene.menuItems = [
        scene.add.text(275, 300, items[0], {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        }),
        scene.add.text(275, 350, items[1], {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        }),
        scene.add.text(275, 400, items[2], {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'ArcadeClassic'
        }),
    ];
}

// Inputs for the main menu screen
function mainMenuButtons(scene) {
    scene.input.keyboard.on('keydown-UP', () => changeSelection(scene, -1));
    scene.input.keyboard.on('keydown-DOWN', () => changeSelection(scene, 1));
    scene.input.keyboard.on('keydown-SPACE', () => mainMenuSelection(scene));
}

// Inputs for the options screen
function optionsButtons(scene) {
    scene.input.keyboard.on('keydown-UP', () => changeSelection(scene, -1));
    scene.input.keyboard.on('keydown-DOWN', () => changeSelection(scene, 1));
    scene.input.keyboard.on('keydown-SPACE', () => optionsSelection(scene));
}

function infoButtons(scene) {
    scene.input.keyboard.on('keydown-UP', () => changeSelection(scene, -1));
    scene.input.keyboard.on('keydown-DOWN', () => changeSelection(scene, 1));
    scene.input.keyboard.on('keydown-SPACE', () => infoSelection(scene));
}

// Inputs for the game over screen
function gameOverButtons(scene) {
    scene.input.keyboard.on('keydown-UP', () => changeSelection(scene, -1));
    scene.input.keyboard.on('keydown-DOWN', () => changeSelection(scene, 1));
    scene.input.keyboard.on('keydown-SPACE', () => gameOverSelection(scene));
}

function updateMenuSelection(scene) {
    scene.menuItems.forEach((item, index) => {
        item.setFill(index === scene.selectedItemIndex ? '#f00' : '#fff');
    });
}

function changeSelection(scene, change) {
    scene.selectedItemIndex += change;
    if (scene.selectedItemIndex >= scene.menuItems.length) {
        scene.selectedItemIndex = 0;
    } else if (scene.selectedItemIndex < 0) {
        scene.selectedItemIndex = scene.menuItems.length - 1;
    }
    updateMenuSelection(scene);
}


function mainMenuSelection(scene) {
    if (scene.selectedItemIndex === 0) {

        scene.scene.start('Level_1');
    } else if (scene.selectedItemIndex === 1) {
        scene.scene.start('Options');
    } else if (scene.selectedItemIndex === 2) {
        scene.scene.start('Info');
    }
}

function optionsSelection(scene) {
    if (scene.selectedItemIndex === 0) {
        let musicOption = scene.menuItems[0].text;
        if (musicOption === 'MUSIC  ON') {
            scene.menuItems[0].text = 'MUSIC  OFF';
        } else if (musicOption === 'MUSIC  OFF'){
            scene.menuItems[0].text = 'MUSIC  ON';
        }

    } else if (scene.selectedItemIndex === 1) {
        let soundOption = scene.menuItems[1].text;
        if (soundOption === 'SOUND  ON') {
            scene.menuItems[1].text = 'SOUND  OFF';
        } else {
            scene.menuItems[1].text = 'SOUND  ON';
        }

    } else if (scene.selectedItemIndex === 2) {
        scene.scene.start('MainMenu');
    }
}

function infoSelection(scene) {
    if (scene.selectedItemIndex === 0) {
        scene.scene.start('About');
    } else if (scene.selectedItemIndex === 1) {
        scene.scene.start('ControlsInfo');
    } else if (scene.selectedItemIndex === 2) {
        scene.scene.start('MainMenu');
    }
}

function gameOverSelection(scene) {
    if (scene.selectedItemIndex === 0) {
        scene.scene.start('Level_1');
    } else if (scene.selectedItemIndex === 1) {
        scene.scene.start('MainMenu');
    } else if (scene.selectedItemIndex === 2) {
        scene.scene.start('Options');
    }
}
window.gameMovement = gameMovement;
window.standingUp = standingUp;
window.overlapping = overlapping;
window.hitSkull = hitSkull;
window.updateHealth = updateHealth;
window.createScene = createScene;
window.gameOverButtons = gameOverButtons;
window.updateMenuSelection = updateMenuSelection;

