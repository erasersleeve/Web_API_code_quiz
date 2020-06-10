//Start page elements
var body = document.body;
var header = document.createElement("h1");
var cardEl = document.createElement("div");
var cardH1 = document.createElement("div");
var cardBody = document.createElement("div");
var cardFooter = document.createElement("div");
var startButton = document.createElement("button");

// Set the text content of relevant elements
header.textContent = "timer and scores go here";
cardH1.textContent = "Code Quiz!";
cardBody.textContent = "Try your best to make it through the test. Each wrong answer reduces your remaining time, so be careful!";
startButton.textContent = "Get Started!";

// Append all of our elements
body.appendChild(header);
body.appendChild(cardEl);
cardEl.appendChild(cardH1);
cardEl.appendChild(cardBody);
cardEl.appendChild(cardFooter);   
cardFooter.appendChild(startButton);







// Style all of our elements
header.setAttribute("style", "marginBottom:50px; width:100%; text-align:center;");
cardEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
cardBody.setAttribute("style", "font-size:25px; text-align:center;");
cardH1.setAttribute("style", "font-size:25px; text-align:center;");
cardFooter.setAttribute("style", "font-size:25px; text-align:center;");
