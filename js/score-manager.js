/*
Function to count up the score in the main area.
*/

//Global for the click value.
var clickValue = 1;

var clicks = 1;


//Ticks up the score when a click is detected.
function updateScore(increment){
    //Get the score element as an object.
    let score = document.getElementById("score");

    //Work out the number of bots based off the score.
    let bots = clicks;

    //Increase the bots by the value.
    let newbots = bots + increment;

    clicks = newbots;

    //Calculates the time needed to erase.
    let timeNeeded = (bots.length + 1) * 50;

    //Erase the number
    eraseNumber(bots.toString(), score, 10);

    //Put the new number in place.
    setTimeout(function() {
        placeNumber((newbots).toString(), "", score, 10);
    }, timeNeeded);

    //Output the new bots value.
    score.innerHTML = bots
}

function placeNumber(finalNum, num, div, cycles){
    num = num + finalNum[num.length];

    div.innerHTML = num;

    cycles = cycles - 1;

    if(num.length != finalNum.length && cycles > 10){
        setTimeout(function() {
            placeNumber(finalNum, num, div, cycles);
        }, 50);
    }
}

function eraseNumber(number, div, cycles){
    number[cycles] = '0';

    cycles = cycles -1;

    div.innerHTML = number;

    if(number.length != 0 && cycles > 0){
        setTimeout(function() {
            eraseNumber(number, div, cycles);
        }, 50);
    }
}

//Waits till the document is loaded to begin loading all the onclick elements.
document.addEventListener("DOMContentLoaded", function(){
    //Defines the objects into variables for later use.
    let centreConsole = document.getElementById("centre-console");

    //Adds a listener to the centre console for when it's clicked.
    centreConsole.addEventListener("click", function(){
        updateScore(clickValue);
    });
});