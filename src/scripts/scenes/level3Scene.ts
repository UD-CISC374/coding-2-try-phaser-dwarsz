export default class Level3Scene extends Phaser.Scene { 
    private background;
    workInProgress : Phaser.GameObjects.Image;
    constructor() {
      super({ key: 'Level3Scene' });
    }
  
    create() {    
    //this.background = this.add.image(0, 0, "background");
    this.workInProgress = this.add.image(this.scale.width / 2, this.scale.height / 2, "workInProgress"); 
    this.workInProgress.setScale(.5); 
  }
  
    update() {
    }
  }