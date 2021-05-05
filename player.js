class Player {
    constructor(x,y){
        this.sprite = createSprite(x,y,20,20);
        this.sprite.velocityX = 7;
        this.runImg = loadAnimation("images/Run/run1.png","images/Run/run2.png","images/Run/run3.png","images/Run/run4.png","images/Run/run5.png","images/Run/run6.png","images/Run/run7.png","images/Run/run8.png");
        this.sprite.addAnimation("running",this.runImg);
        this.deathImg = loadAnimation("images/death4.png");
        this.sprite.addAnimation("death",this.deathImg);
        this.sprite.scale = 2;
        //this.sprite.debug = true;
        this.sprite.setCollider("circle",-20,10,30);
    }
    gravity(g){
        this.sprite.velocityY = this.sprite.velocityY + g;
    }
}        