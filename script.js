//Start page elements

var body = document.body;
var header = document.createElement("h1");
var cardEl = document.createElement("div");
var cardH1 = document.createElement("div");
var cardBody = document.createElement("div");
var cardFooter = document.createElement("div");
var playerClock = document.createElement("div");
var time = 5;


// Append all of our elements
body.appendChild(header);
body.appendChild(cardEl);
cardEl.appendChild(cardH1);
header.appendChild(playerClock)
cardEl.appendChild(cardBody);
cardEl.appendChild(cardFooter); 
 

var questions = ["First Question", "Second Question", "Third Question", "Fourth Question"];
var answers = [
    { correct: "1", false1 : "2", false2 : "3", false3 : "4"},
    { correct: "11", false1 : "22", false2 : "33", false3 : "44"},
    { correct: "111", false1 : "222", false2 : "333", false3 : "444"},
    { correct: "1111", false1 : "2222", false2 : "3333", false3 : "44444"},
];
//doing this instead might workout better, its less confusing.. https://www.sitepoint.com/simple-javascript-quiz/
// var quiz = [{ 
//     question: "",
//     answers: { 
//         a: "",
//         b: "",
//         c: "",
//         d: "",
//     },
//     question: "",
//     answers: { 
//         a: "",
//         b: "",
//         c: "",
//         d: "",
//     },
//     question: "",
//     answers: { 
//         a: "",
//         b: "",
//         c: "",
//         d: "",
//     },
//     question: "",
//     answers: { 
//         a: "",
//         b: "",
//         c: "",
//         d: "",
//     }   
// }]
//Our functions



function mainPage () {
    var scoreslink = document.createElement("button"); scoreslink.textContent="Highscores";scoreslink.addEventListener("click", function () {highScorespage()});
    header.appendChild(scoreslink); 
    var startButton = document.createElement("button");
    startButton.textContent = "Get Started!";
    cardFooter.appendChild(startButton);
    startButton.addEventListener("click", function(event) {
        console.log(event);  
        cardFooter.removeChild(startButton);
        header.removeChild(scoreslink);
        quizpage ();
    })
    
    cardH1.textContent = "Code Quiz!";
    cardBody.textContent = "Try your best to make it through the test. Each wrong answer reduces your remaining time, so be careful!";
    
}; 
function quizpage () {
    clock();
    
    var scoreslink = document.createElement("button"); scoreslink.textContent="Highscores";scoreslink.addEventListener("click", function () {highScorespage()});
    header.appendChild(scoreslink); 
    
    //iterator for arrays
    i = 0;
    //erase the message from the main page and replace the cardbody content with buttons
    cardBody.textContent = "";
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
    //not worrying about random yet
    //group these buttons together
    cardH1.textContent = questions[i];
    ans1.textContent = answers[i].correct;
    ans2.textContent = answers[i].false1;
    ans3.textContent = answers[i].false2;
    ans4.textContent = answers[i].false3;
    
//the first answer is always right, but we assign the answers at random to the buttons.
//if the button with the first answer is clicked only the next question is presented, if the others are 20 seconds are deducted
//when i = questions.length the scores page shows, stopping the timer
    
//click event for our answer buttons
    ans1.addEventListener("click",answerSelect);
    ans2.addEventListener("click",answerSelect);
    ans3.addEventListener("click",answerSelect);
    ans4.addEventListener("click",answerSelect);

    function answerSelect (event) {
        
        if (i<(questions.length-1))
        {
            console.log(event);
            i++;
            console.log(i);
            cardH1.textContent = questions[i];
            ans1.textContent = answers[i].correct;
            ans2.textContent = answers[i].false1;
            ans3.textContent = answers[i].false2;
            ans4.textContent = answers[i].false3;
        }
        else{
        // once the last question is answered the buttons disappear and the score page opens
        cardBody.removeChild(buttongroup);
        scorePage ();
        header.removeChild(scoreslink);
        };  
};
    

    
    buttongroup.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width:100%; display: block;");
    ans1.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 100%; display: block;");
    ans2.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 100%; display: block;");
    ans3.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 100%; display: block;");
    ans4.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 100%; display: block;");

    // from how to make verticle buttons w3 .btn-group button:not(:last-child) {border-bottom: none;} apparently prevents double borders
    // * Add a background color on hover */.btn-group button:hover {background-color: #3e8e41;}


    

}; 
function scorePage () {
        cardH1.textContent = "Your Score";
        cardBody.textContent = time;
        var leaderinput = document.createElement("input");
        leaderinput.textContent = "Put you name or initials here to submit a high score!"
        cardBody.appendChild(leaderinput);
        var scorebtn = document.createElement("button");
        scorebtn.textContent = "Go to Leaderboards";
        cardBody.appendChild(scorebtn);
        

    scorebtn.addEventListener("click", function(event) {
        console.log(event);  
        // create user object from submission
        var leader = {
            name: leaderinput.value,
            score: time
        };
        console.log(leader);
        localStorage.setItem("leader", JSON.stringify(leader));
        cardBody.removeChild(leaderinput);
        cardBody.removeChild(scorebtn);
        
        highScorespage ();
        
        
    })
    
};
function highScorespage () {
    cardH1.textContent = "Leaders";
    cardBody.textContent = "";
    var leaderboard = document.createElement("ol");
    cardBody.appendChild(leaderboard);
    var homebutton = document.createElement("button");
    //button to refresh page, therefore taking us to main page.
    homebutton.textContent = "Back to Main"
    cardFooter.appendChild(homebutton);
    var localleader = JSON.parse(localStorage.getItem("leader"));
    
    var listitem = document.createElement("li");
    listitem.textContent = localleader.name + ":     " + localleader.score;    
    leaderboard.appendChild(listitem);
    
    homebutton.addEventListener("click", function () { cardFooter.removeChild(homebutton); cardBody.removeChild(leaderboard); mainPage()});

    

    
    

    //make a function to create list points and fill them with stored data
    //if there is stored data then it makes a list and then populates it

    // //get the leader data
    // var leaderboard = JSON.parse(localStorage.getItem("leader"));
    // var scoreboardbby = leaderboard.name + ":    " + leaderboard.score;
    // console.log(scoreboardbby);
    // ;
};
function clock() {
    var timerinterval = setInterval(function() {
        time--;
        // console.log(time);
        playerClock.textContent = Number(time);
        if (time <= 0) {
        clearInterval(timerinterval);   
        header.removeChild(playerClock);
        scorePage ();}
    }, 1000);
};
mainPage();





// Style all of our elements
header.setAttribute("style", "marginBottom:50px; width:100%; text-align:center;");
cardEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
cardBody.setAttribute("style", "font-size:25px; text-align:center;");
cardH1.setAttribute("style", "font-size:25px; text-align:center;");
cardFooter.setAttribute("style", "font-size:25px; text-align:center;");
playerClock.setAttribute("style", "font-size:25px; text-align:center;");







