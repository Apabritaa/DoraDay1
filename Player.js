class Player{
    constructor(x,y,gender){
    var options={
        restitution:0.1,
        friction:0.3,
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,20,20,options)
    



    World.add(world,this.body);
    if (gender==="girl") {
        this.image=loadImage("Images/girl.png")
    } else {
        this.image=loadImage("Images/boy.png")
    }
    }

    display(){
        var pos=this.body.position;
        push();
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,75);
        pop();
    }

}