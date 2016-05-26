function Paddle(_x, _y){
   var x     = _x,
       y     = _y,
       w     = Constant.Paddle.WIDTH,
       h     = Constant.Paddle.HEIGHT,
       color = Constant.Color.BLACK,
       speed = Constant.Paddle.SPEED;

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

   function doInput(){
       var key = Constant.Enum.Key;

       if(Input.keyIsDown(key.LEFT)){
           if(!collisionLeftWall()){
               x -= speed;
           }
       } else if(Input.keyIsDown(key.RIGHT)){
           if(!collisionRightWall()){
               x += speed;
           }
       }
   }

   function pub_getGeometryLeft(){
       var halfW = w / 2;

       return [x, y, halfW, h];
   }
   function pub_getGeometryRight(){
       var halfW = w / 2;

       return [x + halfW, y, halfW, h];
   }

   function pub_run(){
       doInput();
       draw();
   }

   this.run              = pub_run;
   this.getGeometryLeft  = pub_getGeometryLeft;
   this.getGeometryRight = pub_getGeometryRight;
}

