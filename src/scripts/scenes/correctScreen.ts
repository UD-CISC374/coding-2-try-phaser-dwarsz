export default class CorrectScreen extends Phaser.Scene { 
    private background;
    correctScreen : Phaser.GameObjects.Image;
    currentQuestionIndex : integer;
    numCorrect: integer;
    totalQuestions: integer;    

    constructor() {
      super({ key: 'CorrectScreen' });
    }
    init(data)
    {
        this.currentQuestionIndex = data.currentQuestionIndex; /*Get data passed to this scene */   
        this.numCorrect = data.numCorrect;
        this.totalQuestions = data.totalQuestions;
    }
  
    create() {    
        console.log(this.currentQuestionIndex);
    this.correctScreen = this.add.image(this.scale.width / 2, this.scale.height / 2, "correctScreen"); 
    this.correctScreen.setScale(.5);     
    
    if (this.currentQuestionIndex >= this.totalQuestions )   {
        this.scene.start('EndScreen', 
        {currentQuestionIndex: this.currentQuestionIndex, numCorrect: this.numCorrect, totalQuestions: this.totalQuestions});
    }
     this.time.addEvent({
        delay: 1000,
        callback: () => this.scene.start('Level1Scene',  
        {currentQuestionIndex: this.currentQuestionIndex, numCorrect: this.numCorrect}),
        loop: true
    })
  }
  
    update() {
    }
  }