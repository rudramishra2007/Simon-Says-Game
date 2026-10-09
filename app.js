let gameSeq=[];
let userSeq=[];

let started=false;
let highScore=0;
let level=0;

let h2=document.querySelector("h2");
let arr=["red","yellow","purple","green"];
let body=document.querySelector("body");

document.addEventListener("keypress",function(){
    if(started==false){
        // console.log("game is start");
        started=true; 

        levelUp();

    }
});

function gameFlash(btn){
    btn.classList.add("gameFlash")
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level${level}`;

    let randidx=Math.floor(Math.random()*4);
    let randcolor=arr[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq)
     gameFlash(randbtn);
}

function checkAns(idx){
    // console.log("current level",level)
   
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout( function(){
            levelUp();
        },1000)
       }
    }else{
         h2.innerHTML=`Game Over!, your score was <b> ${level} </b> <br> Press any Key to start`;
         reset();
         body.style.backgroundColor="red";
         setTimeout(function(){
             body.style.backgroundColor="white";
         },150);
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
btn.addEventListener("click",function(){
    console.log("btn is pressed");
    let btn= this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq)
    checkAns(userSeq.length-1)
})
}

function reset(){
    if(level>highScore){
        highScore=level;
        document.querySelector("#highscore").textContent=`Highest Score is ${highScore}` 
    }
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

