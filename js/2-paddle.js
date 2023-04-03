// draw paddle 

const paddle_width=100;
const paddle_height=20;
const paddle_margin_bottom = 50;

const paddle ={
  x :cvs.width /2 - paddle_width /2 ,
  y :cvs.height - paddle_height -paddle_margin_bottom ,
  width :paddle_width ,  
  height : paddle_height ,
  dx :5
}

 function drawPaddle(){
  ctx.fillStyle ='black';
  ctx.fillRect(paddle.x ,paddle.y ,paddle.width ,paddle.height);
  ctx.strokeStyle = "yellow" ;
  ctx.strokeRect(paddle.x ,paddle.y ,paddle.width ,paddle.height);
 }



 // move paddle 

 let leftarrow =false ;
 let rightarrow = false ;
 
 document.addEventListener('keydown', function(event){
  if(event.keyCode ==37){
    leftarrow =true ;
  } else if(event.keyCode==39){
      rightarrow=true;
  }
 
 })

 document.addEventListener('keyup', function(event){
  if(event.keyCode ==37){
    leftarrow =false ;
  } else if(event.keyCode==39){
      rightarrow=false;
  }
 })

 function movePaddle(){
  if(rightarrow && paddle.x +paddle.width < cvs.width){
    paddle.x +=paddle.dx;
  } else if(leftarrow && paddle.x >0){
    paddle.x -= paddle.dx;
  }

  
 }
