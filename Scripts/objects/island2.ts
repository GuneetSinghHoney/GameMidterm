module objects {
    export class Island2 extends objects.GameObject {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor() {
        super("island");
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this._dy = 5;
        this.Reset();
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
        this.y = Math.floor((Math.random() * (480 - this.width)) + this.halfWidth);
        this.x = 640+ this.width;
      }
  
      // move the object to some new location
      public Move():void {
        this.x -= this._dy;
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // check lower bounds
        if(this.x <= this.height) {
          this.Reset();
        }
      }
    }
  }
  