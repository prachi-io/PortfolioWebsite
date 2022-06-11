// // first X timer get started
// var increaseTimer = (s1 , s2) => {
//     var currentTime = document.getElementById(s1).innerHTML; // jo strinfg likhte h hum andar
//     console.log(currentTime)
//     var minutes = parseInt(currentTime.split(":")[0])
//     var seconds = parseInt(currentTime.split(":")[1]);
//     console.log(minutes, seconds)
//     currentTime = minutes * 60 + seconds;
//     currentTime = incrementByOne(currentTime);
//     minutes = Math.floor(currentTime / 60);
//     seconds = currentTime % 60;
//     currentTime = minutes.toString().padStart(2, '0').concat(":").concat(seconds.toString().padStart(2, '0'))
//     document.getElementById(s2).innerHTML = currentTime;
//     setTimeout(increaseTimer, 1000) // this function calls increaseTimer function automatically after every 100 ns
// };
// var turn = 'X'
// function funImagePutter(s1 , s2 , s3) {
//     if (s3 === "X") {
//         document.getElementById(s1).getElementsByClassName(s2)[0].style.backgroundImage="url(X.png)"
//     }
//     else {
//         document.getElementById(s1).getElementsByClassName(s2)[0].style.backgroundImage="url(O.png)"
//     }
// }
// document.getElementById("row-1").getElementsByClassName("col-1")[0].addEventListener('click' , funImagePutter,"row-1" , "col-1" , turn)
// document.getElementById("row-1").getElementsByClassName("col-2")[0].addEventListener('click' , funImagePutter,"row-1" , "col-2" , turn)
// document.getElementById("row-1").getElementsByClassName("col-3")[0].addEventListener('click' , funImagePutter,"row-1" , "col-3" , turn)
// document.getElementById("row-2").getElementsByClassName("col-1")[0].addEventListener('click' , funImagePutter,"row-2" , "col-1" , turn)
// document.getElementById("row-2").getElementsByClassName("col-2")[0].addEventListener('click' , funImagePutter,"row-2" , "col-2" , turn)
// document.getElementById("row-2").getElementsByClassName("col-3")[0].addEventListener('click' , funImagePutter,"row-2" , "col-3" , turn)
// document.getElementById("row-3").getElementsByClassName("col-1")[0].addEventListener('click' , funImagePutter,"row-3" , "col-1" , turn)
// document.getElementById("row-3").getElementsByClassName("col-2")[0].addEventListener('click' , funImagePutter,"row-3" , "col-2" , turn)
// document.getElementById("row-3").getElementsByClassName("col-3")[0].addEventListener('click' , funImagePutter,"row-3" , "col-3" , turn)


var turn = "X"

// function to change the turn
function changeTurn() {
    if (turn === "X") {
        return "O";
    }
    else {
        return "X";
    }
}

// Game Logic
let boxes = document.getElementsByClassName()

