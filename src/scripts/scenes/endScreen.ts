export default class EndScreen extends Phaser.Scene { 
    private background;
    levelComplete : Phaser.GameObjects.Image;
    currentQuestionIndex : integer;
    numCorrect: integer;
    totalQuestions: integer;  

    constructor() {
      super({ key: 'EndScreen' });
    }
    init(data)
    {
        this.currentQuestionIndex = data.currentQuestionIndex; /*Get data passed to this scene */   
        this.numCorrect = data.numCorrect;
        this.totalQuestions = data.totalQuestions;
    }

    create() {    
    console.log("lynn");
    this.levelComplete = this.add.image(this.scale.width / 2, this.scale.height / 2 - 110, "levelComplete"); 
    this.levelComplete.setScale(.4); 
    this.add.text(this.scale.width / 100 , this.scale.height / 2 + 110, 
        "You got " + this.numCorrect + " out of " + this.totalQuestions + " correct", {fill : "red" });
    this.time.addEvent({
        delay: 5000,       
        callback: () => this.scene.start('SelectionScene'),
        loop: true
    })
  }
  
    update() {
    }
  }