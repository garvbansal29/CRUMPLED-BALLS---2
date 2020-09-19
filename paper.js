class Paper{
    constructor(x,y){
        var paper_options = {
            isStatic:false,
            restitution:0.3,
            friction:1.5,
            density:1.2
        }
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.rectangle(x,y,20,20,paper_options);
        this.width=20;
        this.height=20;
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    translate(pos.x,pos.y);
    strokeWeight(4);
    stroke("yellow");
    fill("white");
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
}
}