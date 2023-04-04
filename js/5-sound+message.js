// sound icon 

const soundElement = document.getElementById('sound');

soundElement.addEventListener('click',audiomanger);
function audiomanger(){
  let imgSrc=soundElement.getAttribute('src');
  let sound_img = imgSrc =="img/SOUND_ON.png"?
  "img/SOUND_OFF.png":"img/SOUND_ON.png";

  soundElement.setAttribute('src',sound_img);

  wall_Hit.muted =wall_Hit.muted ?false :true;
  paddle_hit.muted =paddle_hit.muted ?false :true;
  brick_hit.muted =brick_hit.muted ?false :true;
  win.muted =win.muted ?false :true;
  life_Lost.muted =life_Lost.muted ?false :true;
  brick_brocken.muted = brick_brocken.muted ? false : true;
}



// game over message 

const game_over_message=document.getElementById('gameover');
const youwin=document.getElementById('youwon');
const youlose=document.getElementById('youlose');
const restart=document.getElementById('restart');

const menu=document.getElementById('menu');
const menu_start=document.getElementById('menu_start');

restart.addEventListener('click',function(){
  location.reload();
})

function show_win(){
  game_over_message.style.display='block';
  youwin.style.display='block';
}

function show_lose(){
  game_over_message.style.display='block';
  youlose.style.display='block';
}
  menu_start.addEventListener('click',function(){
    menu.style.display='none';
    start=true;
  })
