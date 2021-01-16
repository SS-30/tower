class Polygon{
    constructor(x,y,radius){
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
          this.image = loadImage("polygon.png")

    }
     display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,150,130)
        pop()
     }
}