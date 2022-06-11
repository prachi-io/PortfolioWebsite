// Arrays in JS -> collection of different items

// examples -> want to store names of whole class
var names = ['bharat' ,'prachi' , 'anmol' , 'jatin' , 'soniya']
console.log(names)

// count starts from 0
console.log(names[2])

// size of array is not fixed
console.log(names.length)

// add -> append at last
names.push("ABC")
console.log(names)
console.log(names.length)

// delete
// pop
names.pop()
console.log(names)
console.log(names.length)

// modify elements
names[4] = "disha"
console.log(names)
console.log(names.length)

// modify when element not present -> empty space made in between
names[9] = "hiii"
console.log(names)
console.log(names.length)

// spread operator to print
console.log(...names)

// [] -> brackets (arrays)
// () -> parantheses (if else , for , while)
// {} -> braces -> code block

// typeof
console.log(typeof names) // objects

// array initialization using new
// var names = new Array('prachi' , 'anmol' , 'jatin')
// console.log(names)

// IndexOf  ( single and double quates both for string )
console.log(names.indexOf('prachi'))
console.log(names.indexOf('abc')) // -1 when not found

// values are not type strict in array -> in one array we can have diff types of elements
var newArr = ['prachi' , 19 , true , "IGDTUW" , 9.5]
console.log(newArr)
console.log(...newArr)
console.log(typeof newArr)
console.log(typeof newArr[2])
console.log(typeof newArr[1])

// we can have array inside another array
var newArr2 = ['prachi' , 19 , true , ['Notre Dame' , "IGDTUW"] , 9.56] // bad idea
console.log(newArr2)
console.log(...newArr2)
console.log(newArr2[3][1])

// fill
console.log(newArr2.fill(null,1,3)) // 3 not included
console.log(newArr2) // changed in main array

// slice
console.log(newArr2[3].slice(0,1))
console.log(newArr2)

// iterate an array

// for
for (var index = 0 ; index < names.length ; index++) {
    console.log(names[index])
}
console.log("---------------")

// for of
for (var n of names) {
    console.log(n)
}
console.log("---------------")

// for each (arrow function) (es6 version of js)
names.forEach(n => console.log(n)) // only print defined elements
console.log("---------------")
names.forEach(n => { // only print defined elements
    console.log(n)
});