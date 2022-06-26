var increaseTime=time=>time+1;

var timer;
var timer_on=0;
var increaseTimer=()=>{
    var currentTime=document.querySelector(".timer-time").innerHTML;
    console.log(currentTime);

    //declaring hour, minute , seocnd and separating it with ':'
    var hour = parseInt(currentTime.split(":")[0]);
    var minute = parseInt(currentTime.split(":")[1]);
    var second = parseInt(currentTime.split(":")[2]);
    console.log(hour,minute,second);

    currentTime= hour * 3600 + minute *60 + second; // seconds
    currentTime=increaseTime(currentTime);


    hour=Math.floor(currentTime/3600); // 90 min -> 1hr 30min 1hr 90min
    minute = Math.floor((currentTime-hour * 3600) / 60);
    second=currentTime%60;

    currentTime=hour.toString().padStart(2,'0').concat(':').concat(minute.toString().padStart(2,'0').concat(':').concat(second.toString().padStart(2,'0')));
    document.querySelector(".timer-time").innerHTML=currentTime;
    timer=setTimeout(increaseTimer,1);
}
var startTimer=()=>{
    if(!timer_on){
        increaseTimer();
        timer_on=1;
    }

}
var pauseTimer=()=>{
    clearTimeout(timer);
    timer_on=0;
}
var resetTimer=()=>{
    if(timer_on){
        clearTimeout(timer);
        timer_on=0;
        document.querySelector(".timer-time").innerHTML="00 : 00 : 00";
    }
    else{
        document.querySelector(".timer-time").innerHTML="00 : 00 : 00";
    }
}
document.querySelector('.start-btn').addEventListener('click',startTimer);
document.querySelector('.pause-btn').addEventListener('click',pauseTimer);
document.querySelector('.reset-btn').addEventListener('click',resetTimer);