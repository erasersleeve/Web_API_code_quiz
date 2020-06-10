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


var questions = ["11111111111111111111111111111111111111111", "2222222222222222222222222222222222", "333333333333333333333", "444444444444444444444444444444444444444444444444444444"];
var answers = [1["11111111111111111111111111111111111111111", "2222222222222222222222222222222222", "333333333333333333333", "444444444444444444444444444444444444444444444444444444"],
 2["11111111111111111111111111111111111111111", "2222222222222222222222222222222222", "333333333333333333333", "444444444444444444444444444444444444444444444444444444"],
 3["11111111111111111111111111111111111111111", "2222222222222222222222222222222222", "333333333333333333333", "444444444444444444444444444444444444444444444444444444"],
 4["11111111111111111111111111111111111111111", "2222222222222222222222222222222222", "333333333333333333333", "444444444444444444444444444444444444444444444444444444"]];

 function quizpage () {
    //triggered by the click event, this sets play to true. Therefore, the timer should stop when we go to the scores or home pages. Currently the clock resets at the homepage 
    clock (); 
    //iterator for arrays
    i = 0;
                
    var buttongroup = document.createElement("div");
    cardBody.appendChild(buttongroup);
    var ans1 = document.createElement("button");
    var ans2 = document.createElement("button");
    var ans3 = document.createElement("button");
    var ans4 = document.createElement("button");
    buttongroup.appendChild(ans1);
    buttongroup.appendChild(ans2);
    buttongroup.appendChild(ans3);
    buttongroup.appendChild(ans4);
    
    cardH1.textContent = questions[i];
    //need to select the answer buttons and fill them using the array/object
   //the first array connects us to our questions and iterator, the inner array has the answer choices
   //the first answer is always right, but we assign the answers at random to the buttons.
   //if the button with the first answer is clicked only the next question is presented, if the others are 20 seconds are deducted
   //when i = questions.length the scores page shows, stopping the timer

    ans1.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 50%; display: block;");
    ans2.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 50%; display: block;");
    ans3.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 50%; display: block;");
    ans4.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 50%; display: block;");

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