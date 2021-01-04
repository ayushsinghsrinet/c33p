class  particle {
    constructor(x,y,r){
        var sto={
isStatic:true,
restitution:2
        }
this.x=x
this.y=y;
this.r=r;
this.body=Bodies.circle(x,y,r,sto)
World.add(world,this.body)
    }
    display(){
        fill(0)
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)


    }
}