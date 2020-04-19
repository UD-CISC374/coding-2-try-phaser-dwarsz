import 'phaser';
//import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';
import SelectionScene from './scenes/selectionScene';
import Level1Scene from './scenes/level1Scene';
import Level2Scene from './scenes/level2Scene';
import Level3Scene from './scenes/level3Scene';
import CorrectScreen from './scenes/correctScreen';
import WrongScreen from './scenes/wrongScreen';
import EndScreen from './scenes/endScreen';

import GameConfig = Phaser.Types.Core.GameConfig;

const DEFAULT_WIDTH = 256; 
const DEFAULT_HEIGHT = 272; 


const config: GameConfig = {
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, SelectionScene, Level1Scene, Level2Scene, Level3Scene, 
            CorrectScreen, WrongScreen, EndScreen],//MainScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 400 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});



/*import 'phaser';
import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';
import GameConfig = Phaser.Types.Core.GameConfig;

const DEFAULT_WIDTH = 256; //400;
const DEFAULT_HEIGHT = 272; //400;

export const gameSettings = {
    playerSpeed: 200,
    maxPowerups: 2,
    powerUpVel: 50,
  }

const config: GameConfig = {
    backgroundColor: '#ff0000',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, MainScene], //list the scenes
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            //gravity: { y: 400 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

// var game = new Phaser.Game();
// scenes are elements of teh game */