class Gun{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.3,
            'density':1.0,
            
        }
        this.body = Bodies.rectangle(x, y, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("images/gun.png");
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