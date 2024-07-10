class Screen extends Phaser.Scene {

    constructor(key, title, text, optionItems, titleX, titleY, textX, textY, titleFont, textFont) {
        super({ key: key });
        this.selectedItemIndex = 0;
        this.title = title;
        this.text = text;
        this.optionItems = optionItems;
        this.titleX = titleX;
        this.titleY = titleY;
        this.textX = textX;
        this.textY = textY;
        this.titleFont = titleFont;
        this.textFont = textFont;
        this.space = 0;
    }

    create() {
        this.createScene();
        this.navigation();
    }

    update() {
        this.updateSelection();
    }

    createScene() {
        this.titleText = this.add.text(this.titleX, this.titleY, this.title, {fontSize: this.titleFont, fill: '#fff', fontFamily: 'ArcadeClassic'});
        this.textDisplay = this.add.text(this.textX, this.textY, this.text, {fontSize: this.textFont, fill: '#fff', fontFamily: 'ArcadeClassic'});
        this.optionTexts = [];
        this.optionItems.forEach((item, index) => {
            this.optionTexts.push(this.add.text((this.textX + this.space), (this.textY + this.space) + (index+1) * 50, item, {fontSize: this.textFont, fill: '#fff', fontFamily: 'ArcadeClassic'}));
        });
        this.optionTexts[this.selectedItemIndex].setColor('#f00');
    }

    navigation() {
        this.input.keyboard.on('keydown-UP', () => this.changeSelection(-1));
        this.input.keyboard.on('keydown-DOWN', () => this.changeSelection(1));
        this.input.keyboard.on('keydown-SPACE', () => this.selection());
    }

    updateSelection() {
        this.optionTexts.forEach((item, index) => {
            if (index === this.selectedItemIndex) {
                item.setColor('#f00');
            } else {
                item.setColor('#fff');
            }
        });
    }

    changeSelection(change) {
        this.selectedItemIndex += change;
        if (this.selectedItemIndex < 0) {
            this.selectedItemIndex = this.optionItems.length - 1;
        } else if (this.selectedItemIndex >= this.optionItems.length) {
            this.selectedItemIndex = 0;
        }
        this.updateSelection();
    }

    selection() {
        console.log('Selection');
    }
}
window.Screen = Screen;