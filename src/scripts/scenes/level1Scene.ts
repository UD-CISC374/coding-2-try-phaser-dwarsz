export default class Level1Scene extends Phaser.Scene { 
  private background;
  workInProgress : Phaser.GameObjects.Image;
  currentQuestionIndex : integer;
  numCorrect: integer;
  data;
  questionList;
  totalQuestions: integer;
  currentQuestion;
  imagePath;
  ninetyDegreeStraightPipe : Phaser.GameObjects.Image;
  zeroDegreeStraightPipe : Phaser.GameObjects.Image;
  currentQuestionImage: Phaser.GameObjects.Image;
  button0Deg : Phaser.GameObjects.Image;
  button90Deg : Phaser.GameObjects.Image;
  counter: integer;
  answerIndex : integer;
  constructor() {
    super({ key: 'Level1Scene' });
}

    init(data)
    {
        this.currentQuestionIndex = data.currentQuestionIndex; /*Get data passed to this scene */   
        this.numCorrect = data.numCorrect;
    }
    preload(){
        this.questionList = this.cache.json.get('questions');
        this.totalQuestions = this.questionList.questions.length;
        for(this.counter = 0; this.counter < this.totalQuestions; this.counter++){
          this.currentQuestion = this.questionList.questions[this.counter]; 
          this.imagePath = this.currentQuestion.image;
          this.load.image('question' + this.counter, this.imagePath);
        }
    }

  create() {     
    this.add.text(this.scale.width / 100 , 5, "Click on 0 or 90 degrees!", {fill : "blue" });
    console.log("Index:" + this.currentQuestionIndex);
    //console.log(this.numCorrect);
       // console.log(this.currentQuestion.answer == 0 );
        this.currentQuestionImage = this.add.image(this.scale.width / 2 +50, this.scale.height / 2 ,
           "question" + this.currentQuestionIndex);
        this.currentQuestionImage.setScale(.5); 

        this.button0Deg = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2 + 75, "zeroDegreeButton");
        this.button0Deg.setScale(.25);
        this.button0Deg.setInteractive();
        this.answerIndex = this.questionList.questions[this.currentQuestionIndex].answer;
        if (this.answerIndex == 0){
          this.button0Deg.on('pointerdown', () => this.scene.start('CorrectScreen', 
          {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: ++this.numCorrect, totalQuestions: this.totalQuestions}) );
         }       
        else {
          this.button0Deg.on('pointerdown', () => this.scene.start('WrongScreen',
          {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: this.numCorrect, totalQuestions: this.totalQuestions}) ); 
        }                                            
        this.button90Deg = this.add.image(this.scale.width / 2 , this.scale.height / 2 + 75 , "ninetyDegreeButton");
        this.button90Deg.setScale(.25);
        this.button90Deg.setInteractive();

        if (this.answerIndex == 1){
          this.button90Deg.on('pointerdown', () => this.scene.start('CorrectScreen', 
          {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: ++this.numCorrect, totalQuestions: this.totalQuestions}) );
        }
        else {
          this.button90Deg.on('pointerdown', () => this.scene.start('WrongScreen',
          {currentQuestionIndex: ++this.currentQuestionIndex, numCorrect: this.numCorrect, totalQuestions: this.totalQuestions}) );
        }
}

  update() {
  }
}







