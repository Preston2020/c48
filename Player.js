class Player{
    constructor(x,y,width,height){
        var option = {
            friction: 0.5,

        }
        this.playerbody = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        console.log(this.playerbody);
        World.add(world, this.playerbody);
        this.image = loadImage("walk.png")
    }

    display(){
        imageMode(CENTER);
        image(this.image,140,730,150,130);
        //rect(this.playerbody.position.x, this.playerbody.position.y, this.width, this.height);
        

    }
}