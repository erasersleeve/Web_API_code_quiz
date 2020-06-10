var body = document.body;
var play = false;
var startbutton = document.getElementById("#strbtn");
var time = 5;
var displaytime = document.getElementById("#timedisplay"); 
var card = document.getElementById("#card");
var cardheader = document.getElementById("#card-header");
var ch1 = document.createElement("h1");


ch1.textContent = "Coding Quiz";

cardheader.prependChild(ch1); 

startbutton.addEventListener("click", function(event) {
    //when play = true timer runs
    play = true
    console.log(play);
    console.log(event);  
    clock ();
    quizpage ();
    //add buttons for answers
}
);

function clock() {
    var timerinterval = setInterval(function() {
        time--;
        displaytime.textContent = time;
        if (time == 0) {
            clearInterval(timerinterval);
            //if time gets to 0 the user needs to get kicked to main page or something
        }
    }, 1000);
}

function quizpage () {

}



