class Options extends Screen {
    constructor() {
        super('Options', 'OPTIONS', 'SELECT:', ['MUSIC  ON', 'BACK'], 225, 150, 275, 250, '64px', '32px');
    }

    create() {
        super.create();

        if (musicState.musicOn) {
            this.optionTexts[0].text = 'MUSIC  ON';
        } else {
            this.optionTexts[0].text = 'MUSIC  OFF';
        }
    }

    selection() {
        if (this.selectedItemIndex === 0) {
            let musicOption = this.optionTexts[0].text;
            if (musicOption === 'MUSIC  ON') {
                this.optionTexts[0].text = 'MUSIC  OFF';
                musicState.musicOn = false;
                game.sound.mute = true;
            } else if (musicOption === 'MUSIC  OFF'){
                this.optionTexts[0].text = 'MUSIC  ON';
                musicState.musicOn = true;
                game.sound.mute = false;
            }


        } else if (this.selectedItemIndex === 1) {
            this.scene.start('MainMenu');
        
    }
}
}
window.Options = Options;