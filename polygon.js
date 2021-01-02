class Polygon{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:1.2,
            frictio:1,
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        this.image=loadImage("polygon.png")
        World.add(world,this.body)
    }

    display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height);
    pop()
    }
    
}