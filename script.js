//Start page elements
var body = document.body;
var header = document.createElement("h1");
var cardEl = document.createElement("div");
var cardH1 = document.createElement("div");
var cardBody = document.createElement("div");
var cardFooter = document.createElement("div");
var time = "";
var scoreslink = document.createElement("button");

header.className+= "navbar navbar-light bg-light";
cardH1.className+="h1";
//iterator for arrays
i = 0;
// Append all of our elements
body.appendChild(header);
body.appendChild(cardEl);
cardEl.appendChild(cardH1);
cardEl.appendChild(cardBody);
cardEl.appendChild(cardFooter); 

var questions = ["Inside which HTML element do we put the Javascirpt?", 
"What is the correct JavaScript syntax to change the content of the HTML element:\n <p id='demo'>This is a demonstration.</p>", 
"Where is the correct place to insert a JavaScript?", 
"What is the correct syntax for referring to an external script called 'xxx.js'?"];

var answers = [
    { a: "<scripting>", b: "<js>", c: "<script>", d: "javascript"},
    { a: "document.getElementByName('p').innerHTML = 'Hello World!'", b: "document.getElementById('demo').innerHTML = 'Hello World!'", c: "#demo.innerHtml = 'Hello World!", d: "document.getElementByElement('p')innterHTML = 'Hello World'"},
    { a: "The <body> section",  b: "The <head> section", c: "the <tail> section", d: "Both <head> and <body> sections"},
    { a: "<script name = xxx.js>", b: "<script src = xxx.js>", c: "<script java = xxx.js>", d: "<coffee.java = xxx.js>"},
];

var leader = [];
//Our functions
//Could probably get away with putting the timer and the score link on global and hide them when they aren't


function mainPage () {
    
    
    scoreslink.textContent="Highscores";
    scoreslink.addEventListener("click", function () {cardFooter.removeChild(startButton); header.removeChild(scoreslink); highScorespage()});
    scoreslink.className+= "highscorebtn btn btn-outline-dark mr-auto";
    header.appendChild(scoreslink); 
    var startButton = document.createElement("button");
    startButton.textContent = "Get Started!";
    startButton.className = "startButton btn btn-outline-dark";
    cardFooter.appendChild(startButton);
    startButton.addEventListener("click", function(event) {
        console.log(event);  
        cardFooter.removeChild(startButton);
        header.removeChild(scoreslink);
        clock();
        quizpage ();
        
    })
    
    cardH1.textContent = "Code Quiz!";
    cardBody.textContent = "Try your best to make it through the test. Each wrong answer reduces your remaining time, so be careful!";
    
}; 
function quizpage () {
    i = 0;
    
    questions;
    answers;
     //erase the message from the main page and replace the cardbody content with buttons
    cardBody.textContent = "";
    var buttongroup = document.createElement("div");
    cardBody.appendChild(buttongroup);
    var ans1 = document.createElement("button");
    var ans2 = document.createElement("button");
    var ans3 = document.createElement("button");
    var ans4 = document.createElement("button");
    ans1.className+="ans btn btn-outline-secondary";
    ans2.className+="ans btn btn-outline-secondary";
    ans3.className+="ans btn btn-outline-secondary";
    ans4.className+="ans btn btn-outline-secondary";

    buttongroup.appendChild(ans1);
    buttongroup.appendChild(ans2);
    buttongroup.appendChild(ans3);
    buttongroup.appendChild(ans4);
    
    function answercontent () {
        cardH1.textContent = questions[i];
        ans1.textContent = answers[i].a;
        ans2.textContent = answers[i].b;
        ans3.textContent = answers[i].c;
        ans4.textContent = answers[i].d;
        console.log(`i inside answer${i}`);
        updateEventlisteners();
    };
    answercontent();
    //not worrying about random yet
    //when i = questions.length the scores page shows, stopping the timer
    //click event for our answer buttons
    

    function updateEventlisteners () {
        if (i === 0) {
        console.log("YES");
            ans1.addEventListener("click",answerSelectinvalid);
            ans2.addEventListener("click",answerSelectinvalid);
            ans3.addEventListener("click",answerSelectvalid);
            ans4.addEventListener("click",answerSelectinvalid);
        };
        if (i === 1) {
            console.log("YES");
            
            ans2.removeEventListener("click",answerSelectinvalid);
            ans3.removeEventListener("click",answerSelectvalid);
            ans2.addEventListener("click",answerSelectvalid);
            ans3.addEventListener("click",answerSelectinvalid);
            
        };
        if (i === 2) {
            console.log("YES");
            ans1.removeEventListener("click",answerSelectinvalid);
            ans2.removeEventListener("click",answerSelectvalid);
            ans1.addEventListener("click",answerSelectvalid);
            ans2.addEventListener("click",answerSelectinvalid);
        };
        if (i === 3) {
            ans3.removeEventListener("click",answerSelectinvalid);
            ans1.removeEventListener("click",answerSelectvalid);
            ans3.addEventListener("click",answerSelectvalid);
            ans1.addEventListener("click",answerSelectinvalid);
        };
    };
        
    function answerSelectvalid (event) {
        console.log(event);
        if (i<(questions.length)) {
            i++;
            answercontent();
            console.log(questions.length);
            console.log(i);
        }
    };    
    function answerSelectinvalid (event) {
        console.log(event);
        
        if (i<(questions.length)) {  
            i++;
            time-=20;
            answercontent();
            console.log(i);
        }  


};
    

    
    // buttongroup.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width:100%; display: block;");
    // ans1.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 100%; display: block;");
    // ans2.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 100%; display: block;");
    // ans3.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 100%; display: block;");
    // ans4.setAttribute("style", "background-color:#4CAF50; border:1px solid green; color: white; padding 10px 24px; cursor: pointer; width: 100%; display: block;");

    // from how to make verticle buttons w3 .btn-group button:not(:last-child) {border-bottom: none;} apparently prevents double borders
    // * Add a background color on hover */.btn-group button:hover {background-color: #3e8e41;}


    

}; 
function scorePage () {
        cardH1.textContent = "Your Score: " +time;
        cardBody.textContent = "";
        var leaderinput = document.createElement("input");
        leaderinput.placeholder = "Enter your name!";
        cardBody.appendChild(leaderinput);
        var scorebtn = document.createElement("button");
        scorebtn.textContent = "Go to Leaderboards";
        scorebtn.className+= "btn btn-outline-dark";
        cardFooter.appendChild(scorebtn);



    scorebtn.addEventListener("click", function(event) {
        console.log(event);  
        // create user object from submission
        var allLeader = [];
        var savedLeaders = localStorage.getItem("leader");
        if (savedLeaders !== null) {
            allLeader = JSON.parse(savedLeaders);
        } 
        var leader = {  
            name: leaderinput.value,
            score: time
        };
        allLeader.push(leader);
        
        console.log(leader);
        localStorage.setItem("leader", JSON.stringify(allLeader));
        cardBody.removeChild(leaderinput);
        cardFooter.removeChild(scorebtn);
        
        highScorespage ();
        
        
    })
};
function highScorespage () {
    
    cardH1.textContent = "Leaders";
    cardBody.textContent = "";
    var leaderboard = document.createElement("ul");
    leaderboard.setAttribute("class", "leaderList")
    cardBody.appendChild(leaderboard);
    var homebutton = document.createElement("button");
    homebutton.className+= "homebutton btn btn-outline-dark";
    
    homebutton.textContent = "Back to Main"
    cardFooter.appendChild(homebutton);
    
    //original local storage. only held one entry
    var localleader = JSON.parse(localStorage.getItem("leader"));
     for (i=0; i<localleader.length; i++) {
        var listitem = document.createElement("li");
        listitem.textContent = localleader[i].name + ":     " + localleader[i].score;    
        leaderboard.appendChild(listitem);
     }
    
    
    homebutton.addEventListener("click", function () {mainPage(), cardFooter.removeChild(homebutton); cardBody.removeChild(leaderboard)});

    
    // //get the leader data
    var leaderboard = JSON.parse(localStorage.getItem("leader"));

    // ;
};
function clock() {
    time = 80;
    var playerClock = document.createElement("div");
    playerClock.className+="playerClock ml-auto";
    header.appendChild(playerClock);
    playerClock.setAttribute("style", "font-size:25px; text-align:center;");
    var timerinterval = setInterval(function() {
        time--;
        // console.log(i);
        playerClock.textContent = Number(time);
       //stop timer when quiz (either time = 0 or all questions have been answered)
       if (i == questions.length || time <= 0) {
        clearInterval(timerinterval);   
        scorePage ();
        header.removeChild(playerClock);
        }
    }, 1000);
};
mainPage();





// Style all of our elements
header.setAttribute("style", "marginBottom:50px; width:100%; text-align:center;");
cardEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
cardBody.setAttribute("style", "font-size:25px; text-align:center;");
cardH1.setAttribute("style", "font-size:25px; text-align:center;");
cardFooter.setAttribute("style", "font-size:25px; text-align:center;");

// Check this out for bubbling https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/