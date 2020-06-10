//Start page elements

var body = document.body;
var header = document.createElement("h1");
var cardEl = document.createElement("div");
var cardH1 = document.createElement("div");
var cardBody = document.createElement("div");
var cardFooter = document.createElement("div");
var startButton = document.createElement("button");
var playerClock = document.createElement("div");
var play = false;
//function definitions
var time = 5;
// Set the text content of relevant elements
header.textContent = "timer and scores go here";
cardH1.textContent = "Code Quiz!";
cardBody.textContent = "Try your best to make it through the test. Each wrong answer reduces your remaining time, so be careful!";
startButton.textContent = "Get Started!";


// Append all of our elements
body.appendChild(header);
body.appendChild(cardEl);
cardEl.appendChild(cardH1);
header.appendChild(playerClock)
cardEl.appendChild(cardBody);
cardEl.appendChild(cardFooter);   
cardFooter.appendChild(startButton);

//Our functions

startButton.addEventListener("click", function(event) {
    //when play = true timer runs
    console.log(event);  
    quizpage ();
    
    //add buttons for answers
}
);

function quizpage () {
    //triggered by the click event, this sets play to true. Therefore, the timer should stop when we go to the scores or home pages. Currently the clock resets at the homepage
    var play = true;
    
        clock ();
    
    //we need the page to change the content of the card to a question 
    cardH1.textContent = "Question 1";
  //and 4 multiple choice answer buttons
    var buttongroup = document.createElement("div");
    cardBody.appendChild(buttongroup);
    var answer = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");
    answer.textContent = "c'est une chanson, qui nous rassembler. toi qui m'aimais, et je t'aimais.";
    buttongroup.appendChild(answer);
    buttongroup.appendChild(answer);
    buttongroup.appendChild(answer);
    buttongroup.appendChild(answer);
    answer.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 50%; display: block;")
    // from how to make verticle buttons w3 .btn-group button:not(:last-child) {border-bottom: none;} apparently prevents double borders
    // * Add a background color on hover */.btn-group button:hover {background-color: #3e8e41;}


    cardFooter.removeChild(startButton);

};



// Style all of our elements
header.setAttribute("style", "marginBottom:50px; width:100%; text-align:center;");
cardEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
cardBody.setAttribute("style", "font-size:25px; text-align:center;");
cardH1.setAttribute("style", "font-size:25px; text-align:center;");
cardFooter.setAttribute("style", "font-size:25px; text-align:center;");
playerClock.setAttribute("style", "font-size:25px; text-align:center;");






//functions
function clock() {
    
    var timerinterval = setInterval(function() {
        
        time--;
        console.log(time);
        playerClock.textContent = Number(time);
        
        if (time <= 0) {
        clearInterval(timerinterval);
        //if time gets to 0 the user needs to get kicked to main page or something
    }
    }, 1000);

};