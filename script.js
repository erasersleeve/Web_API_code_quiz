//Start page elements
var body = document.body;
var header = document.createElement("h1");
var cardEl = document.createElement("div");
var cardH1 = document.createElement("div");
var cardBody = document.createElement("div");
var cardFooter = document.createElement("div");
var time = "";
//iterator for arrays
i = 0;
// Append all of our elements
body.appendChild(header);
body.appendChild(cardEl);
cardEl.appendChild(cardH1);
cardEl.appendChild(cardBody);
cardEl.appendChild(cardFooter); 

var questions = ["First Question", "Second Question", "Third Question", "Fourth Question"];

var answers = [
    { a: "1", b: "2", c: "3", d: "4"},
    { a: "11", b: "22", c: "33", d: "44"},
    { a: "111",  b: "222", c: "333", d: "444"},
    { a: "1111", b: "2222", c: "3333", d: "4444"},
];

var leader = [];
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
    i = 0;
    clock();
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
    
    function answercontent () {
        cardH1.textContent = questions[i];
        ans1.textContent = answers[i].a;
        ans2.textContent = answers[i].b;
        ans3.textContent = answers[i].c;
        ans4.textContent = answers[i].d;
    };
    answercontent();
    //not worrying about random yet
    //group these buttons together
    
    
    
    //the first answer is always right, but we assign the answers at random to the buttons.
    //if the button with the first answer is clicked only the next question is presented, if the others are 20 seconds are deducted
    //when i = questions.length the scores page shows, stopping the timer
        
    //click event for our answer buttons
    

    
        if (i == 0) {
        
            ans1.addEventListener("click",answerSelectinvalid);
            ans2.addEventListener("click",answerSelectvalid);
            ans3.addEventListener("click",answerSelectinvalid);
            ans4.addEventListener("click",answerSelectinvalid);
        };
        if (i == 1) {
            ans1.addEventListener("click",answerSelectinvalid);
            ans2.addEventListener("click",answerSelectinvalid);
            ans3.addEventListener("click",answerSelectinvalid);
            ans4.addEventListener("click",answerSelectvalid);
        };
        if (i == 2) {
            ans1.addEventListener("click",answerSelectvalid);
            ans2.addEventListener("click",answerSelectinvalid);
            ans3.addEventListener("click",answerSelectinvalid);
            ans4.addEventListener("click",answerSelectinvalid);
        };
        if (i == 3) {
            ans1.addEventListener("click",answerSelectinvalid);
            ans2.addEventListener("click",answerSelectinvalid);
            ans3.addEventListener("click",answerSelectvalid);
            ans4.addEventListener("click",answerSelectinvalid);
        };
    function answerSelectvalid (event) {
        if (i<(questions.length-1)) {
            i++;
            answercontent();
        }
        
    };    
    function answerSelectinvalid (event) {
        
        if (i<(questions.length-1)) {  
            i++;
            time-=20;
            answercontent();
        }
        else{
        // once the last question is answered the buttons disappear and the score page opens
        cardBody.removeChild(buttongroup);
         
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
        var leaderList = "#leaderList";
        
    
    
    // init();
    // function renderLeaders() {
    //     // Clear leaderList element and update leaderCountSpan
    //     leaderList.innerHTML = "";
    //     leaderCountSpan.textContent = leader.length;
      
    //     // Render a new li for each todo
    //     for (var i = 0; i < leader.length; i++) {
    //       var leader = leader[i];
      
    //       var li = document.createElement("li");
    //       li.textContent = leader;
    //       li.setAttribute("data-index", i);
      
    //       leaderList.appendChild(li);
    //     }
    //   }
    // function init() {
    //     // Write code here to check if there are todos in localStorage
    //     // If so, parse the value from localStorage and assign it to the todos variable
    //     var templeaders = localStorage.getItem("leader");
        
    //     templeaders = JSON.parse(templeaders);
        
    //     console.log(templeaders);
        
    //     leader = templeaders;
        
    //     // Render leader to the DOM
    //     renderLeaders();
    //     }
    //     //stringify array and save to leader
    // function storeLeaders () {
    //     localStorage.setItem("leader", JSON.stringify(leader));
    // };

    // renderLeaders();
    // storeLeaders();



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
        cardBody.removeChild(scorebtn);
        
        highScorespage ();
        
        
    })
};
function highScorespage () {
    cardH1.textContent = "Leaders";
    cardBody.textContent = "";
    var leaderboard = document.createElement("ol");
    leaderboard.setAttribute("class", "leaderList")
    cardBody.appendChild(leaderboard);
    var homebutton = document.createElement("button");
    
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
    header.appendChild(playerClock);
    playerClock.setAttribute("style", "font-size:25px; text-align:center;");
    var timerinterval = setInterval(function() {
        time--;
        // console.log(i);
        playerClock.textContent = Number(time);
       //stop timer when quiz (either time = 0 or all questions have been answered)
       if (i == questions.length - 1 || time <= 0) {
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

// Check this out for bubbling https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/