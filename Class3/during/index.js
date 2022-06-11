// var letters = '0123456789ABCDEF';
// var color = '#';
//
// function getRandomColor() {
//     for (var i = 0 ; i < 6 ; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
//
// document.getElementById('grid').style.backgroundColor = getRandomColor();

// Functions are just like variables


// var getRandomColor = function () {
//     for (var i = 0 ; i < 6 ; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// console.log(getRandomColor())
//
// // pass functions to other functions
//
// var changeBackground = function (getRandomColor) {
//     document.getElementById('grid').style.backgroundColor = getRandomColor()
// }
// changeBackground(getRandomColor)

// calling function and returning function then again calling

// arrow function
// var incrementByOne = val => val + 1;
// console.log(incrementByOne(5))

// original function
// function incrementByOne(n) {
//     return n+1;
// }
//
// console.log(incrementByOne(5))

// arrow function
// var getRandomColor = () => {
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// var multiply = (a,b) => a * b
// console.log(multiply(3,4))
// // piecevise function
// var multiply = (a) => (b) => a * b;
// // function with one parameter fixed
// var multiplyBy5 = multiply(5)
// var multiplyBy3 = multiply(3)
// var multiplyBy2 = multiply(2)
// console.log(multiplyBy5(4))
// console.log(multiply(3)(4))


// -------------- click button -> time inc by 1
// no bracket used as agar use kara to fucntion hoga hi call chahe click ho ya na ho
// this wants ki name of function aae and jab click ho to vo khud call kare

var incrementByOne = val => val + 1;

var increaseTimer = () => {
    var currentTime = document.getElementById("timer-time").innerHTML; // jo strinfg likhte h hum andar
    console.log(currentTime)
    var minutes = parseInt(currentTime.split(":")[0])
    var seconds = parseInt(currentTime.split(":")[1]);
    console.log(minutes , seconds)
    currentTime = minutes * 60 + seconds;
    currentTime = incrementByOne(currentTime);
    minutes = Math.floor(currentTime / 60);
    seconds = currentTime % 60;
    currentTime = minutes.toString().padStart(2,'0').concat(":").concat(seconds.toString().padStart(2,'0'))
    document.getElementById("timer-time").innerHTML = currentTime;
    setTimeout(increaseTimer , 10000) // this function calls increaseTimer function automatically after every 100 ns
}

document.getElementById("timer-button").addEventListener('click' , increaseTimer);