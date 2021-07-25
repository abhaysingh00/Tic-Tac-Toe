let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let b7=document.getElementById("b7");
let b8=document.getElementById("b8");
let b0=document.getElementById("b0");
let confirm=document.getElementById("confirm");
let winnner=document.getElementById("winner");
let b =[b0,b1,b2,b3,b4,b5,b6,b7,b8];

confirm.addEventListener("click",function(){
    let i=0;
for(i;i<b.length;i++){
    if(i==0 || i==3 || i==6){
       if(b[i].value=="x"&& b[i+1].value=="x"&& b[i+2].value=="x" ){
        winnner.textContent="player with x wins";
    }
       else if(b[i].value=="o" && b[i+1].value=="o" && b[i+2].value=="o" ){
        winnner.textContent="player with 0 wins";
}
}
     if(i==0 || i==1 || i==2){
        if(i==0 || i==3 || i==6){
            if(b[i].value=="x"&& b[i+3].value=="x"&& b[i+6].value=="x" ){
             winnner.textContent="player with x wins";
         }
            else if(b[i].value=="o"&& b[i+3].value=="o"&& b[i+6].value=="o" ){
             winnner.textContent="player with 0 wins";
     }
    }
}
    if(b[0].value=="x"&& b[4].value=="x"&& b[8].value=="x" ){
    winnner.textContent="player with x wins";
}
    else if(b[0].value=="o"&& b[4].value=="o"&& b[8].value=="o" ){
    winnner.textContent="player with 0 wins";
}
    else if(b[2].value=="x"&& b[4].value=="x"&& b[6].value=="x" ){
    winnner.textContent="player with x wins";
}
    else if(b[2].value=="o" && b[4].value=="o" && b[6].value=="o" ){
    winnner.textContent="player with o wins";
}
}
});

