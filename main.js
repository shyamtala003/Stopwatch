let minuts = 00;
let seconds =00;
let milliseconds=00;

let millisecondInterval = ()=>{
    if(milliseconds==99)
    {
        milliseconds=0;
        seconds+=1;
        if(seconds==60)
        {
            seconds=0;
            minuts+=1;
        }
    }
    else
    {
        milliseconds+=1;
    }


    if(minuts.toString().length==1)
    {
        document.getElementById('minutes').innerHTML=`0${minuts}`;
    }
    else
    {
        document.getElementById('minutes').innerHTML=`${minuts}`;
    }

    if(seconds.toString().length==1)
    {
        document.getElementById('seconds').innerHTML=`0${seconds}`;
    }
    else
    {
        document.getElementById('seconds').innerHTML=`${seconds}`;
    }

    if(milliseconds.toString().length==1)
    {
        document.getElementById('milliseconds').innerHTML=`0${milliseconds}`;
    }
    else
    {
        document.getElementById('milliseconds').innerHTML=`${milliseconds}`;
    }

    document.getElementById('stop__watch_mp3').play();
}


let playPause = document.getElementById('play__pause');
let getButtonImg = document.getElementById('play__pause__img');
let Interval;
let lapCounter=0;
let lapContainer = document.getElementById('lap__container');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');

playPause.addEventListener("click", () => {
    
    if(getButtonImg.getAttribute("src")=="./icons/play.png")
    {
        getButtonImg.setAttribute("src","./icons/pause.png")
        Interval= setInterval(millisecondInterval,10)
    }else
    {
        getButtonImg.setAttribute("src","./icons/play.png")
        clearInterval(Interval)
        document.getElementById('stop__watch_mp3').pause();
    }
})

// generate lap
function lapGenrator()
{
    lapCounter+=1;
    lapContainer.innerHTML+=`
    <div class="lap">
    <span class="lap__num">Lap ${lapCounter}</span>
    <span class="lap__time">${minuts}:${seconds}.${milliseconds}</span>
    </div>
    `;

    document.getElementById('lap__mp3').currentTime=0;
    document.getElementById('lap__mp3').play();
}

lapBtn.addEventListener("click",lapGenrator);

// reset stop watch

function reset()
{
    clearInterval(Interval)
    minuts = 00;
    seconds =00;
    milliseconds=00;
    lapCounter=0;
    lapContainer.innerHTML="";

    getButtonImg.setAttribute("src","./icons/play.png")

    document.getElementById('milliseconds').innerHTML=`0${milliseconds}`;
    document.getElementById('seconds').innerHTML=`0${seconds}`;
    document.getElementById('minutes').innerHTML=`0${minuts}`;
    document.getElementById('stop__watch_mp3').pause();
    document.getElementById('stop__watch_mp3').currentTime=0;

}

resetBtn.addEventListener("click",reset)