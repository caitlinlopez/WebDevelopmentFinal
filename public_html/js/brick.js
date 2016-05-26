function Brick(_x, _y, _color){
   var x         = _x,
       y         = _y,
       w         = Constant.Brick.WIDTH,
       h         = Constant.Brick.HEIGHT,
       padding   = Constant.Brick.PADDING,
       color     = _color;

   function draw(){
       Draw.setColor(color);
       Draw.rect(x, y, w - padding, h - padding);
   }

   function pub_getGeometry(){
       return [x, y, w, h];
   }

   function pub_run(){
       draw();
   }

   this.run         = pub_run;
   this.getGeometry = pub_getGeometry;
}
