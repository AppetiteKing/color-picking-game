/*jshint esversion: 6 */

var title = document.getElementById("title");
var rgb = document.getElementById("rgb");
var test = document.getElementById("test");

var h2 = document.querySelector("h2");
var h1 = document.querySelector("h1");
var colorBlock = document.querySelectorAll(".square");
var button = document.querySelector("button");
var colorArray = [];
const numBlock = 3;
// var ans = pickOne();

putColorIntoBlock();
button.addEventListener("click", putColorIntoBlock);

function randomColor() {
    //pick a "red" from 0-255;
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}


function generateColorArray() {
    for (var i = 0; i < numBlock; i++) {
        colorArray[i] = randomColor();
    }
}

function pickOne() {
    return Math.floor(Math.random() * numBlock);
}

function putColorIntoBlock() {

    button.textContent = "New Color";
    ans = pickOne();
    test.textContent = ans;
    generateColorArray();
    rgb.textContent = colorArray[ans].toUpperCase();
    h2.textContent = "What's the color?";
    for (var i = 0; i < numBlock; i++) {
        colorBlock[i].style.background = colorArray[i];

        colorBlock[i].addEventListener("click", function() {

            if (this.style.background === colorArray[ans]) {
                h2.textContent = "Correct!!";
                // colorBlock.forEach(element => ).style.background = colorArray[ans];
                colorBlock[0].style.background = colorArray[ans];
                colorBlock[1].style.background = colorArray[ans];
                colorBlock[2].style.background = colorArray[ans];
                h1.style.background = colorArray[ans];
                button.textContent = "Play Again!";
            } else {
                h2.textContent = "Try Again!!";
                this.style.background = "rgb(128,128,128)";
            }
        })
    }
}
