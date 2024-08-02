var timer=60;
var score=0;
var hitRn=0;

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    var cV=Number(details.target.textContent);
    if(cV===hitRn)
    {
        incScore();
        makeBubble();
        getNewHit();
    }
    else
    {
        decScore();
        getNewHit();
    }
})

function decScore(){
    score-=10;
    document.querySelector("#scoreVal").textContent= score;
}

function incScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent= score;
}

function getNewHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRn;
}
function makeBubble()
{
    var clutter = "";

    for(var i=1;i<75;i++)
    {
        var number = Math.floor(10*Math.random());
        clutter +=`<div class="bubble">${number}</div>`;
    }

    var pbtm = document.querySelector("#pbtm");

    pbtm.innerHTML = clutter;
}

function runTimer()
{
    var timestoper = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timestoper);
            document.querySelector("#pbtm").innerHTML=`<h2> Game over </h2>`;
        }
    },1000)
}

getNewHit();
runTimer();
makeBubble();