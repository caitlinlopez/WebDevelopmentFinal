var Input = (function(){
   var keys = [],
       canvas = document.getElementById("canvas");

   function getKeys(evt){
       keys[evt.keyCode] = evt.type == "keydown";
       return false;
   }

   function pub_init(){
       canvas.onkeydown = canvas.onkeyup = getKeys;
       canvas.tabIndex = 0;
   }

   function pub_keyIsDown(key){
       return keys[key] ? 1 : 0;
   }
   return {
       init:      pub_init,
       keyIsDown: pub_keyIsDown,
   };
})();

