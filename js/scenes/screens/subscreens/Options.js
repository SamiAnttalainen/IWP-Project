class Options extends Screen {
    constructor() {
        super('Options', 'OPTIONS', 'SELECT:', ['MUSIC  ON', 'BACK'], 225, 150, 275, 250, '64px', '32px');
    }

    selection() {
        if (this.selectedItemIndex === 0) {
            let musicOption = this.optionTexts[0].text;
            if (musicOption === 'MUSIC  ON') {
                this.optionTexts[0].text = 'MUSIC  OFF';
                game.sound.mute = true;
            } else if (musicOption === 'MUSIC  OFF'){
                this.optionTexts[0].text = 'MUSIC  ON';
                game.sound.mute = false;
            }

        } else if (this.selectedItemIndex === 1) {
            this.scene.start('MainMenu');
        
    }
}
}
window.Options = Options;