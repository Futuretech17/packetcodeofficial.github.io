// Challenge One : Your age in days
function ageInDays() {
    var d =  new Date();
    var  y = d.getFullYear();
    var birthYear = prompt("What is the year that you were born?")
    var result = ( y - birthYear) * 365;

    // creating a div where we can display this on the HTML file.
    var h2 = document.createElement("h2");
    var text = document.createTextNode("You are " + result  + " days old");
    h2.appendChild(text);

    var element = document.getElementById("result");
    element.appendChild(h2);

}

function reset() {
    document.getElementById("result").remove();
}
// Challenge two: Generate cats

function generateCat() {
    var image =document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

// Challenge Three: Rock, Paper, Scissors 
function rpsGame(yourChoise) {
    var  humanChoice, botChoice ;
    humanChoice = yourChoise.id;
    
    console.log(humanChoice);
    botChoice = getRandomChoice();
    
    console.log("computer Choice", botChoice);
    results = decideWinner(humanChoice, botChoice);
    
    message = finalMessage(results);
    
    rpsfrontEnd(humanChoice,botChoice,message);
    
}
// Function to get Random choice for the Computer
function getRandomChoice () {
    myArray = ["rock","paper","scissors"];
   var answer = Math.floor(Math.random() * 3);
   return myArray[answer];
}
// function to determine the winner
function decideWinner(humanChoise, botChoice) {
   var rpsDatabase = {
       "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
       "paper": {"scissors": 0, "rock": 1, "paper": 0.5},
       "scissors": {"scissors": 0.5, "rock": 0, "paper": 1}
   };
   var humanScore = rpsDatabase[humanChoise][botChoice];
   var botScore = rpsDatabase[botChoice][humanChoise];

   return [humanScore, botScore];
}
//function to return the final message of the game
function finalMessage(results) {
    
    if (results[0] === 1) {
        answer = {"message":"You Won!!", "color":"Green" }
    }
    else if (results[0] === 0) {
        answer = {"message":"You Lost!!", "color":"red" }
    }
    else {
        answer = {"message":"It's a tie", "color":"Yellow" }
    }
    return answer;
}
//function to replace the DOM node of div = "rps-game"
function rpsfrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        "rock": document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    }

    // Removing all the images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + 
    "'style = 'box-shadow: 0px 10px 30px #0040ff'>";
    messageDiv.innerHTML = "<h1 style = 'color:" + finalMessage['color'] +
     ";font-size:2.5em; padding:2rem; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src ='" + imageDatabase[botImageChoice] + 
    "'style = 'box-shadow: 0px 10px 30px #ff0000'>";
    
    document.getElementById("rps-game").appendChild(humanDiv);
    document.getElementById("rps-game").appendChild(messageDiv);
    document.getElementById("rps-game").appendChild(botDiv);
    
}

   