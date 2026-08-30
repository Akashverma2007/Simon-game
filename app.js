let gameseq =[];
let userseq =[];
let btns =["yellow","red","purple","green"];
let started=false;
let Heighest =0;
let level = 0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq =[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx =Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
}
function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML=`Game over ! Your score was <b> ${level}<b>.<br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        highestScore(level);
        reset();
    }
}

function btnpress(){
    let btn = this;
    btnflash(btn);
    usercolor =btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}
function highestScore(level){
    if(level>Heighest){
        Heighest=level;
        let h2=document.querySelector("h2");
        h2.innerText=`Highest Score : ${Heighest}`
    }
}