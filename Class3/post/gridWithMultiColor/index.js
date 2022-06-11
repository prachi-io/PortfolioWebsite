function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0 ; i < 6 ; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.getElementById("row-1").getElementsByClassName("col-1")[0].style.backgroundColor = getRandomColor()
document.getElementById("row-1").getElementsByClassName("col-2")[0].style.backgroundColor = getRandomColor()
document.getElementById("row-1").getElementsByClassName("col-3")[0].style.backgroundColor = getRandomColor()
document.getElementById("row-2").getElementsByClassName("col-1")[0].style.backgroundColor = getRandomColor()
document.getElementById("row-2").getElementsByClassName("col-2")[0].style.backgroundColor = getRandomColor()
document.getElementById("row-2").getElementsByClassName("col-3")[0].style.backgroundColor = getRandomColor()
document.getElementById("row-3").getElementsByClassName("col-1")[0].style.backgroundColor = getRandomColor()
document.getElementById("row-3").getElementsByClassName("col-2")[0].style.backgroundColor = getRandomColor()
document.getElementById("row-3").getElementsByClassName("col-3")[0].style.backgroundColor = getRandomColor()