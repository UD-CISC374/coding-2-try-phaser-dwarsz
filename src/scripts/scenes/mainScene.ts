import { gameSettings} from '../game';
import Beam from '../beam';
import Explosion from '../Explosion';
const DEFAULT_WIDTH = 256; //400;
const DEFAULT_HEIGHT = 272; //400;
export default class MainScene extends Phaser.Scene {
  //private exampleObject: ExampleObject;
  /*private background;
  private ship1;
  private ship2;
  private ship3;
  */
 //scoreNumLabel;

 //public scoreLabel: Phaser.GameObjects.BitmapText;
 //score: number;
 beamSound;
  explosionSound;
  pickupSound;
  music;
 scoreLabel;
 score: number;
 scoreNumLabel: Phaser.GameObjects.BitmapText;

 private background;
 //background: Phaser.GameObjects.TileSprite;
 ship1: Phaser.GameObjects.Sprite;
 ship2: Phaser.GameObjects.Sprite;
 ship3: Phaser.GameObjects.Sprite;
 powerUps: Phaser.Physics.Arcade.Group;
 enemies: Phaser.GameObjects.Group;
 player: Phaser.Physics.Arcade.Sprite;
 cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
 spacebar: Phaser.Input.Keyboard.Key;
 projectiles: Phaser.Physics.Arcade.Group;

  constructor() {
    super({ key: 'MainScene' }); //'MainScene' is the scene's identifier
  }

  create() {
    this.background = this.add.tileSprite(0, 0, DEFAULT_WIDTH, DEFAULT_HEIGHT, "background");
    this.background.setOrigin(0, 0);
    //this.exampleObject = new ExampleObject(this, 0, 0);
    //this.background = this.add.image(0,0, "background");
   // this.background.setOrigin(0,0);//pivot at top left of image
    /*this.ship1 = this.add.image(DEFAULT_WIDTH/2 - 50, DEFAULT_HEIGHT/2, "ship");
    this.ship2 = this.add.image(DEFAULT_WIDTH/2, DEFAULT_HEIGHT/2, "ship2");
    this.ship3 = this.add.image(DEFAULT_WIDTH/2 + 50, DEFAULT_HEIGHT/2, "ship3"); */
    this.ship1 = this.add.sprite(DEFAULT_WIDTH/2 - 50, DEFAULT_HEIGHT/2, "ship");
    this.ship2 = this.add.sprite(DEFAULT_WIDTH/2, DEFAULT_HEIGHT/2, "ship2");
    this.ship3 = this.add.sprite(DEFAULT_WIDTH/2 + 50, DEFAULT_HEIGHT/2, "ship3");
    this.enemies = this.physics.add.group();
    this.enemies.add(this.ship1);
    this.enemies.add(this.ship2);
    this.enemies.add(this.ship3);
  
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
    
    this.powerUps = this.physics.add.group(); // put all powerups in one group
    var maxObjects = 4;
    for (var i = 0; i <= maxObjects; i++) {
      var powerUp = this.physics.add.sprite(16, 16, "power-up");
      this.powerUps.add(powerUp); //add created powerup to the powerup group
       powerUp.setRandomPosition(0, 0, DEFAULT_WIDTH, DEFAULT_HEIGHT);
       if(Math.random() > 0.5){
        powerUp.play("red");
      }
      else{
        powerUp.play("gray");
      }
      powerUp.setVelocity(100, 100);
      powerUp.setCollideWorldBounds(true);
      powerUp.setBounce(1);
    }

    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");

    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    this.player = this.physics.add.sprite(DEFAULT_WIDTH / 2 - 8, DEFAULT_HEIGHT - 64, "player");
    this.player.play("thrust");
    this.cursorKeys = this.input.keyboard.createCursorKeys(); 
    this.player.setCollideWorldBounds(true);
    this.input.on('gameobjectdown', this.destroyShip, this);

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.projectiles = this.physics.add.group();

   
    //this.score = 0;
    //this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE: " + this.score, 15);
    //this.scoreLabel.text ="";
    var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.beginPath();
    graphics.moveTo(0, 0);
    graphics.lineTo(DEFAULT_WIDTH, 0);
    graphics.lineTo(DEFAULT_WIDTH, 20);
    graphics.lineTo(0, 20);
    graphics.lineTo(0, 0);
    //
    graphics.closePath();
    graphics.fillPath();
    this.score = 0;
    console.log(this.score);
    var scoreFormated = this.zeroPad(this.score, 6);
    //this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE:", 16);
    this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE:" + scoreFormated, 16);
   // this.scoreNumLabel = this.add.bitmapText(50, 5, "pixelFont", this.score.toString(), 16);
    this.add.text(this.scale.width / 2 - 35, 5, "Shoot the spaceships!", {      fill : "green" });

    this.beamSound = this.sound.add("audio_beam");
    this.explosionSound = this.sound.add("audio_explosion");
    this.pickupSound = this.sound.add("audio_pickup");

    // 2.1 create music
    this.music = this.sound.add("music");

    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    }

    this.music.play(musicConfig);

    this.physics.add.collider(this.projectiles, this.powerUps, function(projectile, powerUp) {
      projectile.destroy();
    });

    this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, undefined, this);
    this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, undefined, this);
    this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, undefined, this);
  }

  //@param - accepts a ship object to move
  //@param - Y velocity
  // moves ship
  moveShip(ship, speed){
    ship.y +=speed;
    if (ship.y > DEFAULT_HEIGHT){ // below the bottom of the canvas
      this.resetShipPos(ship);
    }
  }
    

  //@param pointer - the mouse pointer
  //@param gameObject - the clicked object 
  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion"); //swicth clicked objects textures with the explosion spritesheet
    gameObject.play("explode");
  }

  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);
    this.movePlayerManager();
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      if(this.player.active){
          this.shootBeam();
      }
    }
    for(let i = 0; i < this.projectiles.getChildren().length; i++){
      let beam = this.projectiles.getChildren()[i];
      beam.update();
    }

    //this.scoreNumLabel = this.score;
  }
  
  shootBeam() {
    let beam = new Beam(this);
    this.beamSound.play();
}
  movePlayerManager(){

    this.player.setVelocity(0);

    if(this.cursorKeys.left?.isDown){
      this.player.setVelocityX(-gameSettings.playerSpeed);
    }else if(this.cursorKeys.right?.isDown){
      this.player.setVelocityX(gameSettings.playerSpeed);
    }

    if(this.cursorKeys.up?.isDown){
      this.player.setVelocityY(-gameSettings.playerSpeed);
    }else if(this.cursorKeys.down?.isDown){
      this.player.setVelocityY(gameSettings.playerSpeed);
    }
  }

  pickPowerUp(player, powerUp) {
    powerUp.disableBody(true, true);
    this.pickupSound.play();
  }

  hurtPlayer(player, enemy) {
  
    this.resetShipPos(enemy);

    if(this.player.alpha < 1){
        return;
    }

    var explosion = new Explosion(this, player.x, player.y);

    player.disableBody(true, true);

    this.time.addEvent({
      delay: 1000,
      callback: this.resetPlayer,
      callbackScope: this,
      loop: false
    }); 
}
resetPlayer(){
  var x = DEFAULT_WIDTH / 2 - 8;
  var y = DEFAULT_WIDTH + 64;
  this.player.enableBody(true, x, y, true, true);
  this.player.alpha = 0.5;
  var tween = this.tweens.add({
    targets: this.player,
    y:  DEFAULT_HEIGHT - 64,
    ease: 'Power1',
    duration: 1500,
    repeat:0,
    /*onComplete: function(){
      this.player.alpha = 1;
    },*/
    onComplete:() => { this.player.alpha = 1; },
    callbackScope: this
  });
}

hitEnemy(projectile, enemy) {

   var explosion = new Explosion(this, enemy.x, enemy.y);

  projectile.destroy();
  //this.resetShipPos(enemy);
  enemy.destroy();
  
  this.score += 15;
 // this.scoreLabel.text ="";// "SCORE: " + this.score;
 //  this.scoreNumLabel.text = this.score.toString();

   var scoreFormated = this.zeroPad(this.score, 6);
   this.scoreLabel.text = "SCORE " + scoreFormated;
   this.explosionSound.play();

// this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE: " + this.score, 15);
 /* this.score += 15;

   var scoreFormated = this.zeroPad(this.score, 6);
   this.scoreLabel.text = "SCORE " + scoreFormated;

   // 1.4 play sounds
   this.explosionSound.play(); */
}

zeroPad(number, size){
  var stringNumber = String(number);
  while(stringNumber.length < (size || 2)){
    stringNumber = "0" + stringNumber;
  }
  return stringNumber;
}
//resets ship at top of canvas
  //@param - accepts a ship object to move
  resetShipPos(ship){
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, DEFAULT_WIDTH);
    //creates a random variable btw 0 and width of canvas
    ship.x = randomX;
  }
}

/*
add(x,y, name of image) - adds image to game 
load("key", "url") - Key: A string to identify the image   
                     URL: A string path to the image file
init() - Prepares data
Preload - loads music and images into memory
Create() - adds objects to the game
Update() - constantly running loop

this.ship1.setScale(2) - doubles the size of the image
this.ship1.flipY = true; rotates the image by flipping it on the Y axis
this.ship1.angle +=3; continuously rotates image if put in the update function
moveShip(ship,speed)
this.anims.create({ key, frames, frameRate, repeat });
                    id,  array of frames, animation speed, loop?
this.ship3.setInteractive(); - enable ship1 to receive input such as a click
this.input.on('gameobjectdown', this.destroyShip, this); - an event listener
gameobjectdown - listens for a click which will trigger the event and a function will be called
on the object which was clicked
this.destroyShip - function which is called on teh clicked object
this - last param defines the scope of the callback function
*/