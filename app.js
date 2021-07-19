const text=document.querySelector('.text');
const bg = document.querySelector('.bg');
const math=(num, in_min, in_max,out_min, out_max)=>{
    return (num-in_min)/(in_max-in_min)*(out_max-out_min)+out_min;
}

let load=0;
let int=setInterval(blur, 30);

function blur(){
load++;
if(load > 99){
    clearInterval(int);
}

    text.innerText = `${load}%`;
    text.style.opacity =math(load, 0, 100, 0, 1);
    bg.style.filter = `blur(${math(load,0, 100, 30, 0)}px)`;
}
