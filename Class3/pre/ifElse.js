
var hour = new Date().getHours()  // new Date gives us date and time // get hour give hour // follow 24 hour
console.log(hour)

// Good morning and evening message
// up to 12 -> morning
// 12 to 5 -> afternoon
// 5 to up -> evening
if (hour < 12) {
    console.log("Good Morning")
}
else if (hour < 17) {
    console.log("Good Afternoon")
}
else {
    console.log("Good Evening")
}

// Nested If else
// apr - aug -> summer
// winter

// 5am - 5pm -> day
// night

var month = new Date().getMonth() + 1; // 0 - 11 so add 1 for 1 to 12
if (month >= 4 && month <= 8)  {
    // summer
    if (hour >= 5 && hour < 17) {
        console.log("have a nice summer day")
    }
    else {
        console.log("have a nice summer night")
    }
}
else {
    // Winter
    if (hour >= 5 && hour < 17) {
        console.log("have a nice winter day")
    }
    else {
        console.log("have a nice winter night")
    }
}

// Truthy/falsy
// truthy -> evaluate to true
// falsy -> evaluate to false
// everything sirf falsy wale ko chodke is truthy
var x = 5
if (x) {
    console.log("5 is a truthy value")
}
var y = 0
// null 0 undefined false NaN ""
if (y) {
    console.log("0 is a truthy value")
}
y = "string" - "str"
console.log(y)
if (y) {
    console.log("truthy value")
}
else {
    console.log("falsy")
}
var z = ""
if (z) {
    console.log("truthy")
}
else {
    console.log("falsy")
}

// Terniary
var y = 10
y == 10 ? console.log("hello") : console.log("bye")
y == 7 ? console.log("hello") : console.log("bye")

// getDay() -> 0 to 6 from sunday , monday , ... saturday
var day = new Date().getDay()
if (day == 0 || day == 6) {
    console.log("weekend")
}
else {
    console.log("weekday")
}


// switch
switch(day) {
    case 0 :
    case 6 :
        console.log("weekend")
        break
    case 1 :
        console.log("Monday")
        break
    case 2 :
        console.log("Tuesday")
        break
    case 3 :
        console.log("Wednesday")
        break
    case 4 :
        console.log("Thursday")
        break
    case 5 :
        console.log("Friday")
        break
}