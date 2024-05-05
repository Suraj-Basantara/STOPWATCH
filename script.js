
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let lapRecordContainer = document.getElementById('laprecord');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
    lapRecordContainer.innerHTML = "";
});

lapBtn.addEventListener('click', function(){
    if(timerId !== null){
        let lapTime = `${padNumber(mins)} : ${padNumber(secs)} : ${padNumber(msec)}`;
        let lapRecord = document.createElement('p');
        lapRecord.textContent = lapTime;
        lapRecordContainer.appendChild(lapRecord);
    }
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }
    timerDisplay.innerHTML = `${padNumber(mins)} : ${padNumber(secs)} : ${padNumber(msec)}`;
}

function padNumber(num){
    return num < 10 ? `0${num}` : num;
}