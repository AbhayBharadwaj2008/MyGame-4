class Building{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.3,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("images/building1.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 650, 300, this.width, this.height);
        pop();
      }
}