export default class SelectionScene extends Phaser.Scene {
   // private exampleObject: ExampleObject;
    private background;
    data;
    ship1;
    buttonLevel1 : Phaser.GameObjects.Image;
    buttonLevel2 : Phaser.GameObjects.Image;
    buttonLevel3 : Phaser.GameObjects.Image;
    constructor() {
      super({ key: 'SelectionScene' });
    }
    
    create() {    
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.data = this.cache.json.get('questions');
    this.add.text(20, 20, "Select Level");
   // this.ship1 = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "ship");
    this.buttonLevel1 = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2 + 75, "buttonLevel1");
    this.buttonLevel1.setScale(.25);
    this.buttonLevel1.setInteractive();
    this.buttonLevel1.on('pointerdown', () => this.scene.start('Level1Scene', {currentQuestionIndex: 0, numCorrect:0}) );
    
    this.buttonLevel2 = this.add.image(this.scale.width / 2 , this.scale.height / 2 + 75 , "buttonLevel2");
    this.buttonLevel2.setScale(.25);
    this.buttonLevel2.setInteractive();
    this.buttonLevel2.on('pointerdown', () => this.scene.start('Level2Scene') );

    this.buttonLevel3 = this.add.image(this.scale.width / 2 + 50, this.scale.height / 2 + 75, "buttonLevel3");
    this.buttonLevel3.setScale(.25);
    this.buttonLevel3.setInteractive();
    this.buttonLevel3.on('pointerdown', () => this.scene.start('Level3Scene') );

    
}
  
    update() {
    }
  }
