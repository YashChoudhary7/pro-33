class Snow{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        this.x = x;
        this.y = y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}