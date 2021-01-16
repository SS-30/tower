class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.1,
            friction:0.1,
            density:0.4
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
    }

    display(){
        push()
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,0,0)
        pop()
    }
}