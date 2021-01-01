class Tree{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        restitution:0,
        friction:0,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image=loadImage("tree.png")
    this.body=Bodies.rectangle(x, y, width, height , options);

    }

    display(){
        push()
        image(this.image,380,210,400,400)
        pop()
    }
}