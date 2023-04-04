
// draw ball 

const ball_raduis=8;
const ball={
 x:cvs.width/2 ,
 y:paddle.y -ball_raduis ,
 raduis:ball_raduis,
 speed:2.5 ,
 dx:2,
 dy:-2
}
 
function drawBall(){
 ctx.beginPath();
 ctx.arc(ball.x ,ball.y ,ball.raduis ,0 ,Math.PI *2);
 ctx.fillStyle ="red";
 ctx.fill();
 
}


  // move ball collision 

  let life =3 ;
 
  let start =false;
  function moveball(){
    if(start == true){
      ball.x += ball.dx;
    ball.y +=ball.dy ;
    }
  }


  function ballwallcollision(){
    if(ball.x + ball.raduis > cvs.width || ball.x -ball.raduis < 0){

      wall_Hit.play();
      ball.dx = -ball.dx ;
    }

    if(ball.y - ball.raduis < 0){
      ball.dy = -ball.dy ;
    }

    if(ball.y +ball.raduis > cvs.height){
      life_Lost.play();
      life--;
      resetball();
    }
  }

  function resetball(){
    ball.x=cvs.width /2 ;
    ball.y =paddle.y -ball_raduis;
    ball.dx =2 * (Math.random()* 2-1);
    ball.dy =-2;
  }


  function ballPaddleCollision(){
    if( ball.x < paddle.x + paddle.width && 
      ball.x > paddle.x && paddle.y <paddle.y + paddle.height && 
      ball.y > paddle.y){

        paddle_hit.play();
        let collidpoint=ball.x - (paddle.x + paddle.width/2);
        collidpoint = collidpoint / (paddle.width/2);
        let angel =collidpoint * Math.PI / 3 ;


           ball.dx = -ball.speed * Math.sin(angel) ;
           ball.dy = -ball.speed * Math.cos(angel) ;


    }
  }

