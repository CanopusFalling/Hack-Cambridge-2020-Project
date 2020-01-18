/*
Function to count up the score in the main area.
*/

//Global for the click value.
var clickValue = 1;


//Ticks up the score when a click is detected.
function clickDetected(){
    //Get the score element as an object.
    let score = document.getElementById("score");

    //Work out the number of bots based off the score.
    let bots = Number(score.innerHTML);

    //Increase the bots by the value.
    bots = bots + clickValue;

    //Output the new bots value.
    score.innerHTML = bots
}

//Waits till the document is loaded to begin loading all the onclick elements.
document.addEventListener("DOMContentLoaded", function(){
    //Define the value of a click.
    let clickValue = 0;

    //Defines the objects into variables for later use.
    let centreConsole = document.getElementById("centre-console");

    //Adds a listener to the centre console for when it's clicked.
    centreConsole.addEventListener("click", function(){
        clickDetected();
    });
});