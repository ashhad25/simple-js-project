let mins = 0;
let secs = 0;

mins = document.getElementById('min').innerHTML;
secs = document.getElementById('sec').innerHTML;

let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let buttonReset = document.getElementById('reset');

var Interval;

buttonStart.onclick = function(){
        Interval = setInterval(() => {
            if (secs <= "60") {
                if (secs < 10) {
                    document.getElementById('sec').innerHTML = `0${++secs}`;
                }
                if (secs >= 10) {
                    document.getElementById('sec').innerHTML = secs++;
                }
            }
            if (secs > "60") {
                clearInterval(secs);
                secs = "00";
                if(mins < 10){
                    document.getElementById('min').innerHTML = `0${++mins}`;
                }
                if(mins >= 10){
                    document.getElementById('min').innerHTML = mins++;
                }
            }
        }, 100);
}
buttonStop.onclick = function(){
    clearInterval(Interval);
}
buttonReset.onclick = function(){
    clearInterval(Interval);
    secs = "00";
    mins = "00";
    document.getElementById('min').innerHTML = secs;
    document.getElementById('sec').innerHTML = mins;
}
