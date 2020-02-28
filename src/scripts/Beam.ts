//class Beam extends Phaser.GameObjects.Sprite{
 /*
export default class Beam extends Phaser.Physics.Arcade.Sprite{
    constructor(scene){
  
      var x = scene.player.x;
      var y = scene.player.y - 16;
      //let x = scene.player.x;
      //let y = scene.player.y;
      super(scene, x, y, "beam");
  
      scene.add.existing(this);
  
      this.play("beam_anim");
      scene.physics.world.enableBody(this);
      this.body.velocity.y = -250;
      scene.projectiles.add(this);
      
    }
    update(){
  
      if(this.y < 32 ){
        this.destroy();
      }
    }
  } */
  export default class Beam extends Phaser.Physics.Arcade.Sprite{

    constructor(scene){

        let x = scene.player.x;
        let y = scene.player.y;
        super(scene, x, y, "beam");
        scene.add.existing(this);
        scene.projectiles.add(this); 

        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 250;
        //this.body.position.x = 50;
    }

    update(){
        this.body.velocity.y = -250;
        if(this.y < 32)
            this.destroy();
            
    }
}