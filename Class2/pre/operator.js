// Operators

var x = 5; // assignmnet operator
var y = x;
console.log(y)

// Arithmetic operator
var x = 5;
var y = 2;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

var x = "abc"
var y = "def"
console.log(x+y) // abcdef
console.log(x-y) // nan (not a number)

var a = 2;
var b = "abc";
console.log(a+b); // here 2 is treated like string

console.log(a+a+b) // 4abc
console.log(b+a+a) // abc22
console.log(a+b+a) // 2abc2

console.log(a-a+b)
console.log(b+a-a)

// Comparison Operator --> true or false
var x = 2
var y = "2"
// type of variable matter nahi karta yaha
console.log(x==y)
console.log(x>y)
console.log(x<=y)
console.log(x!=y)
// use === for type comparison
console.log(x===y)
console.log(x!==y)

// Logical Operators && || !
var a = 2
var b = 3
var c = 4
var d = 5
console.log(d>c && b>a)
console.log(d>c && b<a)
console.log(d>c || b>a)
console.log(d>c || b<a)
console.log(!(d>c || b<a))

// Bitwise Operator & |
// 3 , 5
// 3 -> 011
// 5 -> 101
// 3 & 5 -> 001 -> 1
// 3 | 5 -> 111 -> 7
var x = 3
var y = 5
console.log(x&y)
console.log(x|y)

// Operator Precedence
console.log(x+y > a&b+c|d)