module objects {
  export class Cloud extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("cloud");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this.Reset();
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {
      console.log('scene' + managers.Game.currentScene);
      if(managers.Game.currentScene == 1)
      {
      this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
      this.y = -this.height;
      this._dx = Math.floor((Math.random() * 4) - 2);
      this._dy = Math.floor((Math.random() * 5) + 5);
      }
      if(managers.Game.currentScene == 2)
      {
        console.log('x'+this.x+'  y'+this.y);
        this.y = Math.floor((Math.random() * (480 - this.height)));
        this.x = this.width+640;
        this._dx = Math.floor((Math.random() * 5)*2);
        this._dy = 2;
      }
    }

    // move the object to some new location
    public Move():void {
      if(managers.Game.currentScene == 1){
      this.y += this._dy;
      this.x += this._dx;
      }
      if(managers.Game.currentScene == 2)
      {
        console.log('move'+  this.x+"   "+this.y);
        this.y += this._dy;
        this.x -= this._dx;
      }
    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // check lower bounds
      if(managers.Game.currentScene == 1){
      if(this.y >= 480 + this.height) {
        this.Reset();
      }
         }
      
     if(managers.Game.currentScene == 2)
      {
        if(this.x <= -this.width) {
          this.Reset();
        }
      }
      
    }
  }
}
