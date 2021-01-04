class divider{
    constructor(x,y,width,height){
        var hoohhoo={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,hoohhoo)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        fill("blue")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}