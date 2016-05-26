function Ball(_x, _y){
   var x     = _x,
       y     = _y,
       vx    = Constant.Ball.Velocity.X,
       vy    = Constant.Ball.Velocity.Y,
       w     = Constant.Ball.WIDTH,
       h     = Constant.Ball.HEIGHT,
       color = Constant.Color.BLACK;

   function draw(){
       Draw.setColor(color);
       Draw.rect(x, y, w, h);
   }

   function collisionLeftWall(){
       return x <= 0;
   }

   function collisionRightWall(){
       var sw = Constant.Stage.WIDTH;

       return x + w >= sw;
   }

   function collisionTopWall(){
       return y <= 0;
   }

   function collisionBottomWall(){
       var sh = Constant.Stage.HEIGHT;

       return y >= sh;
   }

   function collisionPixel(geomA, geomB){
       var g = Constant.Enum.Geometry;

       return !(
                   geomA[g.X] + geomA[g.W] <= geomB[g.X] ||
                   geomB[g.X] + geomB[g.W] <= geomA[g.X] ||
                   geomA[g.Y] + geomA[g.H] <= geomB[g.Y] ||
                   geomB[g.Y] + geomB[g.H] <= geomA[g.Y]
              );
   }

   function collisionBrick(){
       var i,
           geomSelf = [x, y, w, h],
           geomBrick,
           bricks = MobManager.pollBricks();

       for(i = 0; i < bricks.length; i++){
           geomBrick = bricks[i].getGeometry();
           if(collisionPixel(geomSelf, geomBrick)){
               bricks.splice(i, 1);
               return 1;
           }
       }
       return 0;
   }

   function collisionPaddleLeft(){
       var geomSelf = [x, y, w, h],
           geomPaddle = MobManager.pollPaddle().getGeometryLeft();

       return collisionPixel(geomSelf, geomPaddle);
   }

   function collisionPaddleRight(){
       var geomSelf = [x, y, w, h],
           geomPaddle = MobManager.pollPaddle().getGeometryRight();

       return collisionPixel(geomSelf, geomPaddle);
   }

   function collisionPaddle(){
       return collisionPaddleLeft() || collisionPaddleRight();
   }

   function checkCollisions(){
       var multiplier = Constant.Ball.Velocity.MULTIPLIER,
           increment  = Constant.Ball.Velocity.INCREMENT,
           badEnd     = Constant.Enum.GameEnd.BAD;

       if(collisionLeftWall() || collisionRightWall())
           vx *= multiplier;

       if(collisionTopWall() || collisionBrick())
           vy *= multiplier;

       if(collisionPaddle() && vy > 0){
           vy *= multiplier;
       }

       if(collisionPaddleLeft())
           vx -= increment;

       if(collisionPaddleRight())
           vx += increment;

       if(collisionBottomWall())
           Game.end(badEnd);

   }

   function pub_run(){
       x += vx;
       y += vy;
       checkCollisions();
       draw();
   }

   this.run = pub_run;
}



