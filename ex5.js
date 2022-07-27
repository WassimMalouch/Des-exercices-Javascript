// initiation
let startBtn= document.querySelector("#start");
let inputBtn=document.querySelector("#try");
let outputCoups=document.querySelector("#coups");

let i;
let x;
let n;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  
  }    


function start(){
    startBtn.classList.remove("visible");
    startBtn.classList.add("hiden");

    document.querySelector("#game").classList.add("visible");
    document.querySelector("#game").classList.remove("hiden");
    outputCoups.innerHTML=5;

    alert("le nombre aleatoire in [0..10]");
}
function end(){
    startBtn.classList.remove("hiden");
    startBtn.classList.add("visible");

    document.querySelector("#game").classList.add("hiden");
    document.querySelector("#game").classList.remove("visible");
}

function coups(){
    let inp=Number(document.querySelector("#inputt").value); 
    i--;
    outputCoups.innerHTML=(i);
    if(inp == x){
    alert("bingo "+ (5-i) +" coups");
    end();
    return 1;
    }
    else if(inp > x){
       alert("plus petit");
    }
   else {
       alert("plus grand");
   } 
   return 0;
}








startBtn.onclick=function(){
     x=getRandomInt(10);
    console.log(x);
     i=5;
    start();

}

inputBtn.onclick=function(){
 if (i>0){
    n=coups();
  if (i<1 && n==0 )   {
 end();
 alert("wfee toreeh , nchlh mara jeya")
}
}
}






