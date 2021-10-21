class Snow {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':100, 
        }
        this.body = Bodies.rectangle(x, y, 10,10, options);
        this.width = 10;
        this.height = 10;
        this.image = loadImage("snow4.webp");

        World.add(world, this.body); 
    }
    updateY(){
        if(this.body.positionY>height){
            Matter.Body.setPosition (this.body, {x:random (0,800),y:0})
        }
        
    }
    display (){
        rectMode (CENTER);
        image(this.image,this.body.position.x,this.body.position.y)
    }
}