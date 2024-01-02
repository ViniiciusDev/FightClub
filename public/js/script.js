let char = new Knight("Sir Charles");
let monster = new Spyder();


const stage = new Stage(
   char,
   monster,
   document.querySelector('#char'),
   document.querySelector('#monster'),
)

stage.start();

