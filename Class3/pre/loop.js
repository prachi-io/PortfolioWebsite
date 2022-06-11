// Loops
// 1 to n
var n = 10;

// for loop
// var sum = 0
// for (var i = 1;i <= n ;i++) {
//     console.log("hello")
//     console.log(i)
//     sum = sum + i
// }
// console.log(sum)


// continue -> go to next iteration leaving other statements

// break -> move out from bracket / loop , stop everything

// while loop
// var i = 1
// while(i <= n) {
//     console.log("hello " + i)
//     i++;
// }

// do while -> this returns at least once -> first run then check
// var i = 20
// do {
//     console.log("hello " + i)
//     i++;
// }while(i <= n)


// nested loop
/// table from 2 to 10
for (var i = 2 ; i <= 10 ; i++) {
    console.log("table of " + i)
    for (var j = 1 ; j <= 10 ; j++) {
        console.log(i + " X " + j  + " = " + i*j)
        if (j === 10) {
            console.log()
        }
    }

}























