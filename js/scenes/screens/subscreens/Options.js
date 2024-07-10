class Options extends Screen {
    constructor() {
        super('Options', 'OPTIONS', 'SELECT:', ['MUSIC  ON', 'SOUND  ON', 'BACK'], 225, 150, 275, 250, '64px', '32px');
    }

    selection() {
        if (this.selectedItemIndex === 0) {
            let musicOption = this.optionTexts[0].text;
            if (musicOption === 'MUSIC  ON') {
                this.optionTexts[0].text = 'MUSIC  OFF';
            } else if (musicOption === 'MUSIC  OFF'){
                this.optionTexts[0].text = 'MUSIC  ON';
            }

        } else if (this.selectedItemIndex === 1) {
            let soundOption = this.optionTexts[1].text;
            if (soundOption === 'SOUND  ON') {
                this.optionTexts[1].text = 'SOUND  OFF';
            } else {
                this.optionTexts[1].text = 'SOUND  ON';
            }

        } else if (this.selectedItemIndex === 2) {
            this.scene.start('MainMenu');
        
    }
}
}
window.Options = Options;