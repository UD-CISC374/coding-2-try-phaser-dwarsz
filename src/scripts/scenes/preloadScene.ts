export default class PreloadScene extends Phaser.Scene {
  questionList;
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload(){
    this.load.image("background", "assets/images/background.png");
    this.load.image('ninetyDegreeStraightPipe', 'assets/ninetyDegreeStraightPipe.PNG');
    this.load.image('zeroDegreeStraightPipe', 'assets/zeroDegreeStraightPipe.PNG');
    this.load.image('ninetyDegreeButton', 'assets/ninetyDegreeButton.PNG');
    this.load.image('zeroDegreeButton', 'assets/zeroDegreeButton.PNG');
    this.load.image('buttonLevel1', 'assets/buttonLevel1.PNG');
    this.load.image('buttonLevel2', 'assets/buttonLevel2.PNG');
    this.load.image('buttonLevel3', 'assets/buttonLevel3.PNG');
    this.load.image('button', 'assets/button.PNG');
    this.load.image('workInProgress', 'assets/WorkInProgress.PNG');
    this.load.image('correctScreen','assets/correctScreen.PNG');
    this.load.image('wrongScreen','assets/wrongScreen.PNG');
    this.load.image('levelComplete', 'assets/levelComplete.PNG');

    this.load.json('questions', 'assets/data/questions.json');  
  }


  create() {
    this.add.text(20, 20, "Welcome to Angle Master");
    this.scene.start('SelectionScene');
    //this.scene.start('MainScene');
  }
}

  

/*export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "assets/images/backgroundSpace.png");
    
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
    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship", {start : 0, end : 1}),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2", {start : 0, end : 1}),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3", {start : 0, end : 1}),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion", {start : 0, end : 4}),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("power-up", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power-up", {start: 2, end: 3}),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    });
    
  }
} */