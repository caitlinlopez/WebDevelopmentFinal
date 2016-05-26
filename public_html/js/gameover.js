function GameOver(_endType){
   var endType = _endType;

   function pub_show(){
       var hw      = Constant.Stage.WIDTH / 2,
           hh      = Constant.Stage.HEIGHT / 2,
           goodEnd = Constant.Enum.GameEnd.GOOD;

       Draw.clear();
       if(endType == goodEnd){
           Draw.text("You Win", hw, hh);
       } else {
           Draw.text("Game Over", hw, hh);
            restartButton = document.getElementById("restartButton");
            restartButton.addEventListener("click", gameRestart);
  
       }
   }

   this.show = pub_show;
}


