export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "assets/images/background.png");
    /*the background image is now ready to be used in the game
    because it is now placed in memory */
   // this.load.image("ship", "/src/assets/images/ship.png");
   //this.load.image("ship2", "/src/assets/images/ship2.png");
   //this.load.image("ship3", "/src/assets/images/ship3.png");

   this.load.spritesheet("ship", "assets/spritesheets/ship.png", {
     frameWidth: 16, //size of sprite's frame
     frameHeight: 16 
    });
   this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
      frameWidth: 32, //size of sprite's frame
      frameHeight: 16 
    });
    this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {
      frameWidth: 32, //size of sprite's frame
      frameHeight: 32 
    });
    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {
      frameWidth: 16, //size of sprite's frame
      frameHeight: 16 
    });
    this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("player", "assets/spritesheets/player.png",{
      frameWidth: 16,
      frameHeight: 24
    });
    this.load.spritesheet("beam", "assets/spritesheets/beam.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");
    
    this.load.audio("audio_beam", ["assets/sounds/beam.ogg", "assets/sounds/beam.mp3"]);
    this.load.audio("audio_explosion", ["assets/sounds/explosion.ogg", "assets/sounds/explosion.mp3"]);
    this.load.audio("audio_pickup", ["assets/sounds/pickup.ogg", "assets/sounds/pickup.mp3"]);
    this.load.audio("music", ["assets/sounds/sci-fi_platformer12.ogg", "assets/sounds/sci-fi_platformer12.mp3"]);
  }

  create() {
    this.scene.start('MainScene');
  }
}