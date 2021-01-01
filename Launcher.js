class Launcher{
    constructor(bodyA,pointB){
      var options={
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.002,
          length: 1
      }  
      this.bodyA=bodyA;
      this.pointB=pointB;
      this.connecter=Constraint.create(options);
      World.add(world,this.connecter);
    }

    fly(){
        console.log("hello")
        this.connecter.bodyA=null;
    }

    attach(body){
        this.connecter.bodyA=body;
    }

    display(){
        if(this.connecter.bodyA){
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        push()
        stroke(0);
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop()
    }}
}