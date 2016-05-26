var Game = (function(){
   var mainLoop;

   function loop(){
       Draw.clear();
       MobManager.run();
   }

   function pub_main(){
       var sw  = Constant.Stage.WIDTH,
           sh  = Constant.Stage.HEIGHT,
           fps = Constant.Setting.FPS;

       Draw.init(sw, sh);
       Input.init();
       MobManager.init();
       mainLoop = setInterval(loop, 1000 / fps);
   }

   function pub_end(endType){
       new GameOver(endType).show();
       clearInterval(mainLoop);
   }

   return {
       main: pub_main,
       end:  pub_end,
   };
})();