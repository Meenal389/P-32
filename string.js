class String{
    constructor(b1,pointB){
  
    var options={
        bodyA:b1,
        pointB:pointB,
        length:1,
        stiffness:0.04
    }
    this.bodyA=b1;
    this.pointB=pointB;
    this.string=constraint.create(options);
    World.add(world,this.string);
    }

      attach(b1){
        this.sling.bodyA=b1;
    }
    
  
    fly(){
      this.string.bodyA=null;
    }
  
    display(){
      if(this.string.bodyA){
        var posA=this.string.bodyA.position;
        var posB=this.pointB;
        strokeWeight(2)
        stroke("cyan")
        line(posA.x,posA.y,posB.x,posB.y);
      }
    }
  }