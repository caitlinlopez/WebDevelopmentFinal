var MobManager = (function(){
   var bricks,
       paddle,
       ball,
       brickRowColors;

   function pub_init(){
       var i,
           j,
           k,
           sw        = Constant.Stage.WIDTH,
           sh        = Constant.Stage.HEIGHT,
           numBrickW = Constant.Brick.NUM_W,
           numBrickH = Constant.Brick.NUM_H,
           brickW    = Constant.Brick.WIDTH,
           brickH    = Constant.Brick.HEIGHT,
           paddleW   = Constant.Paddle.WIDTH,
           paddleH   = Constant.Paddle.HEIGHT,
           ballW     = Constant.Ball.WIDTH,
           ballH     = Constant.Ball.HEIGHT,
           paddleX   = sw / 2 - paddleW / 2,
           paddleY   = sh - paddleH,
           ballX     = sw / 2 - ballW / 2,
           ballY     = paddleY - ballH * 2;

       bricks = [];
       paddle = new Paddle(paddleX, paddleY);
       ball = new Ball(ballX, ballY);

       with(Constant.Color){
           brickRowColors = [
               BLACK,
               RED,
               BLUE,
               GREEN,
               YELLOW,
               WHITE,
           ];
       }

       for(i = 0; i < numBrickH; i++){
           k = i;
           for(j = 0; j < numBrickW; j++){
               if(Constant.Brick.COLOR_COLUMNS)
                   k = j % numBrickH;

               bricks.push(new Brick(j * brickW, i * brickH, brickRowColors[k]));
           }
       }
   }

   function pub_pollBricks(){
       return bricks;
   }

   function pub_pollPaddle(){
       return paddle;
   }

   function pub_run(){
       var i,
           goodEnd = Constant.Enum.GameEnd.GOOD;

       for(i = 0; i < bricks.length; i++){
           bricks[i].run();
       }

       paddle.run();
       ball.run();
       if(bricks.length < 1){
           Game.end(goodEnd);
       }
   }

   return {
       init:       pub_init,
       pollBricks: pub_pollBricks,
       pollPaddle: pub_pollPaddle,
       run:        pub_run,
   }
})();

