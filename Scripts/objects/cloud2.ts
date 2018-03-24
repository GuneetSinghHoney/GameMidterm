module objects {
    export class Cloud2 extends objects.GameObject {
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
      
          console.log('x'+this.x+'  y'+this.y);
          this.y = Math.floor((Math.random() * (480 - this.height)));
          this.x = this.width+640;
          this._dx = Math.floor((Math.random() * 5)*2);
          this._dy = 2;
       
      }
  
      // move the object to some new location
      public Move():void {
       
          console.log('move'+  this.x+"   "+this.y);
          
          this.x -= this._dx;
        
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        
          if(this.x <= -this.width) {
            this.Reset();
          }
          if(this.y>480+this.width)
          {
              this.Reset();
          }
        
      }
    }
  }
  