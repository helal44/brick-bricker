
let life_bouns={
    x :cvs.width /2  ,

    width :5 ,  
    height : 5 ,
    dx :5,
    dy:5
}

function drawLife(){
    ctx.fillStyle ='red';
    ctx.fillRect(life_bouns.x ,0 ,life_bouns.width,life_bouns.height);
    ctx.strokeStyle = "yellow" ;
    ctx.strokeRect(life_bouns.x ,0 ,life_bouns.width ,life_bouns.height);
   }