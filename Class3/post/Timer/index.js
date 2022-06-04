var incrementByOne = val => val + 1;
var timeout;
var increaseTimer = () => {
    var currentTime = document.getElementById("timer-time").innerHTML; // jo strinfg likhte h hum andar
    console.log(currentTime)
    var minutes = parseInt(currentTime.split(":")[0])
    var seconds = parseInt(currentTime.split(":")[1]);
    console.log(minutes, seconds)
    currentTime = minutes * 60 + seconds;
    currentTime = incrementByOne(currentTime);
    minutes = Math.floor(currentTime / 60);
    seconds = currentTime % 60;
    currentTime = minutes.toString().padStart(2, '0').concat(":").concat(seconds.toString().padStart(2, '0'))
    document.getElementById("timer-time").innerHTML = currentTime;
    timeout = setTimeout(increaseTimer, 1000) // this function calls increaseTimer function automatically after every 100 ns
};

var resetTimer = () => {
    currentTime = "00:00"
    document.getElementById("timer-time").innerHTML = currentTime;
    clearTimeout(timeout)
};

var pauseTimer = () => {
    clearTimeout(timeout)
}

document.getElementById("start").addEventListener('click' , increaseTimer);
document.getElementById("reset").addEventListener('click' , resetTimer);
document.getElementById("pause").addEventListener('click' , pauseTimer);