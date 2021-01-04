class  ball {
    constructor(x,y,r){
this.x=x
this.y=y;
this.r=r;
this.body=Bodies.circle(x,y,r)
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body)
    }
    display(){
        fill(this.color)
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)


    }
}