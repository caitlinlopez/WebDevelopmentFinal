var Constant = {
   Ball: {
       WIDTH  : 12,
       HEIGHT : 12,
       Velocity: {
           X:           5,
           Y:          -5,
           INCREMENT:   0.5,
           MULTIPLIER: -1.01,
       },
   },
   Brick: {
       NUM_W         : 10,
       NUM_H         : 6,
       WIDTH         : 90,
       HEIGHT        : 40,
       PADDING       : 5,
       COLOR_COLUMNS : false,
   },
   Color: {
       RED    : [0xCC, 0x11, 0x11],
       GREEN  : [0x11, 0xCC, 0x11],
       BLUE   : [0x11, 0x11, 0xCC],
       WHITE  : [0xEE, 0xEE, 0xEE],
       BLACK  : [0x11, 0x11, 0x11],
       YELLOW : [0xEE, 0xCC, 0x11],
   },
   Enum: {
       ColorComponent: {
           R : 0,
           G : 1,
           B : 2,
       },
       GameEnd: {
           GOOD : 0,
           BAD  : 1,
       },
       Geometry: {
           X : 0,
           Y : 1,
           W : 2,
           H : 3,
       },
       Key: {
           LEFT  : 37,
           RIGHT : 39,
       },
   },
   Paddle: {
       WIDTH  : 100,
       HEIGHT : 20,
       SPEED  : 10,
   },
   Setting: {
       FPS : 60,
   },
   Stage: {
       WIDTH  : 900,
       HEIGHT : 840,
   },
};