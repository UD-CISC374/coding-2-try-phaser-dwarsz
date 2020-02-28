export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "/src/assets/images/background.png");
    /*the background image is now ready to be used in the game
    because it is now placed in memory */
   // this.load.image("ship", "/src/assets/images/ship.png");
   //this.load.image("ship2", "/src/assets/images/ship2.png");
   //this.load.image("ship3", "/src/assets/images/ship3.png");

   this.load.spritesheet("ship", "/src/assets/spritesheets/ship.png", {
     frameWidth: 16, //size of sprite's frame
     frameHeight: 16 
    });
   this.load.spritesheet("ship2", "/src/assets/spritesheets/ship2.png", {
      frameWidth: 32, //size of sprite's frame
      frameHeight: 16 
    });
    this.load.spritesheet("ship3", "/src/assets/spritesheets/ship3.png", {
      frameWidth: 32, //size of sprite's frame
      frameHeight: 32 
    });
    this.load.spritesheet("explosion", "/src/assets/spritesheets/explosion.png", {
      frameWidth: 16, //size of sprite's frame
      frameHeight: 16 
    });
    this.load.spritesheet("power-up", "/src/assets/spritesheets/power-up.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("player", "/src/assets/spritesheets/player.png",{
      frameWidth: 16,
      frameHeight: 24
    });
    this.load.spritesheet("beam", "/src/assets/spritesheets/beam.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.bitmapFont("pixelFont", "/src/assets/font/font.png", "/src/assets/font/font.xml");
  }

  create() {
    this.scene.start('MainScene');
  }
}
