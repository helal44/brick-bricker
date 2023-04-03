    
// create bricks 

let score=0;
let score_unit=10 ;
 const brick={
  row :2 ,
  column : 5,
  width : 50 ,
  height : 15 ,
  offsetleft : 20 ,
  offsettop : 20 ,
  margintop : 40 ,
  fillcolor :'green',
  strokecolor:'gray'
 }

 let bricks=[];

 function createBricks(){
  for(let r=0 ; r < brick.row ; r++){
    bricks[r]=[];
    for(let c=0 ; c < brick.column ; c++){
      
      if(r%2==0 && c%2==0){
        bricks[r][c] ={
          x : c * (brick.offsetleft + brick.width) + brick.offsetleft ,
          y : r * (brick.offsettop + brick.height) + brick.offsettop + brick.margintop ,
          status : false ,
          breakable : false
        }
      }
      else{
        bricks[r][c] ={
          x : c * (brick.offsetleft + brick.width) + brick.offsetleft ,
          y : r * (brick.offsettop + brick.height) + brick.offsettop + brick.margintop ,
          status : true ,
          breakable : true
        }
      }
    }
  }
 }

 createBricks();



           // draw bricks   

           function drawBricks(){

      

            for(let r=0 ; r < brick.row ; r++){
             
              for(let c=0 ; c < brick.column ; c++){
                const b =bricks[r][c];
                if(b.status == true && b.breakable == true){
                  ctx.fillStyle = brick.fillcolor;
                  ctx.fillRect(b.x ,b.y ,brick.width ,brick.height);
                }else if( b.breakable == false ){
                  ctx.fillStyle = 'black';
                  ctx.fillRect(b.x ,b.y ,brick.width ,brick.height);
                }
              }
            }
           }

           

             // bricks interact  

 function ballBricksCollision(){
  
    for(let r=0 ; r < brick.row ; r++){
     
      for(let c=0 ; c < brick.column ; c++){
        const b =bricks[r][c];
        if(b.status == true && b.breakable == true){
          if(ball.x + ball.raduis > b.x &&
            ball.x - ball.raduis < b.x + brick.width &&
            ball.y + ball.raduis > b.y && 
            ball.y -ball.raduis < b.y + brick.height){
  
              brick_hit.play();
              ball.dy = -ball.dy;
              b.status = false ;
              score += score_unit;
            }
        } 
        else if(   b.breakable == false ){

          if(ball.x + ball.raduis > b.x &&
            ball.x - ball.raduis < b.x + brick.width &&
            ball.y + ball.raduis > b.y && 
            ball.y -ball.raduis < b.y + brick.height){
  
              brick_hit.play();
              ball.dy = -ball.dy;
              b.status = false ;
            
            }

        }
      }
    }
   }
             