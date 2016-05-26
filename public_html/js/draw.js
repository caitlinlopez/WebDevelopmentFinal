
var Draw = (function(){
   var width,
       height,
       canvas,
       ctx;

   var pub_color = {
       red:   [0xCC, 0x11, 0x11],
       green: [0x11, 0xCC, 0x11],
       blue:  [0x11, 0x11, 0xCC],
       white: [0xEE, 0xEE, 0xEE],
       black: [0x11, 0x11, 0x11],
   };

   function pub_init(_width, _height){
       width = _width;
       height = _height;
       canvas = document.getElementById("canvas");
       canvas.width = width;
       canvas.height = height;
       ctx = canvas.getContext("2d");
       ctx.font = "52px bold monospace";
   }

   function pub_text(_text, _x, _y){
       ctx.textAlign = "center";
       ctx.textBaseline = "middle";
       ctx.fillText(_text, _x, _y);
   }

   function pub_rect(x, y, w, h){
       ctx.fillRect(x, y, w, h);
   }

   function pub_clear(){
       ctx.clearRect(0, 0, width, height);
   }

   function pub_setColor(color){
       var cc = Constant.Enum.ColorComponent;

       ctx.fillStyle = "rgb(" + color[cc.R] + "," + color[cc.G] + "," + color[cc.B] + ")";
   }

   return {
       color:      pub_color,
       init:       pub_init,
       text:       pub_text,
       rect:       pub_rect,
       clear:      pub_clear,
       setColor:   pub_setColor,
   };
})();

