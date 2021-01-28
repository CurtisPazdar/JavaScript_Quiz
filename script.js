var header = document.querySelector("#header"); //declaring the variable header is related to the id header

var startButton = document.querySelector("#startButton")//declaring the variable header is related to the id startButton

var quiz_box = document.querySelector("#quiz_box")//declaring the variable header is related to the id quiz_box


var questionArea = document.querySelector("#questionArea") //declaring the variable header is related to the id questionArea

var scoreArea = document.querySelector("#scoreArea")//declaring the variable header is related to the id scoreArea



var secondsLeft = 45; //creating the countdown start for the timer. Set to 45 seconds.

var timer = document.querySelector("#timerArea");//declaring the variable timer to be related to the id timerArea

var button1 = document.querySelector("#button1")
var button2 = document.querySelector("#button2")
var button3 = document.querySelector("#button3")
var button4 = document.querySelector("#button4")

var questions = [
    { questionArea : "What command do you use to add an element to the end of an array?",
    button1 : "unshift",
    button2 : "shift",
    button3 : "push",
    button4 : "unpush",
    correct : "button3"
    },
    { questionArea : "What command do you use to add an element to the beginning of an array",
    button1 : "unshift",
    button2 : "shift",
    button3 : "push",
    button4 : "unpush",
    correct : "button1"
    },
    { questionArea : "What is stored inside []?",
    button1 : "Array",
    button2 : "Object",
    button3 : "Variable",
    button4 : "Memories",
    correct : "button1"
    },
    { questionArea : "What year was JavaScript created?",
    button1 : "1997",
    button2 : "1995",
    button3 : "1991",
    button4 : "1989",
    correct : "button2"
    },
    { questionArea : "Who invented JavaScript?",
    button1 : "Sergey Brin",
    button2 : "Bill Gates",
    button3 : "Steve Wozniak",
    button4 : "Brandan Eich",
    correct : "button4"
    },{ questionArea : "Where was Brandon Eich working when he created JavaScript?",
    button1 : "Netscape",
    button2 : "Microsoft",
    button3 : "Apple",
    button4 : "Hewlett-Packard",
    correct : "button1"
    },{ questionArea : "What was the original name of JavaScript?",
    button1 : "Latte",
    button2 : "Bscript",
    button3 : "Mocha",
    button4 : "NetscapeDev",
    correct : "button3"
    },{
        questionArea : "GAME OVER - CONGRATULATIONS" 
    }
    

];
//this will be the last question 
var lastquestion = questions.length-1;
// this function reacts on click and lets the people

document.getElementById("startButton").onclick = function startQuiz(){

    //get startButton and sets its display to none  to hide. Access the quiz_box and make its style block so as to unhide it. 
    document.getElementById("startButton").style.display = "none";
    document.getElementById("quiz_box").style.display = "block";
    
    
    var zero = 0;

// function that allows the questions to have the text content of the current state where zero is in the array. Zero = 0 , Zero++ = 1
    function createQs () {

    var render = questions[zero]

    header.textContent = "JAVASCRIPT QUIZ";
    scoreArea.textContent = 0;
    questionArea.textContent = render.questionArea;
    button1.textContent = render.button1;
    button2.textContent = render.button2;
    button3.textContent = render.button3;
    button4.textContent = render.button4;


    }

    answers.addEventListener("click", function(event){
        var answerCheck = event.target;
        var displayMessage = document.querySelector("#displayMessage")

        if(questions[zero].correct === answerCheck.id){
            displayMessage.innerHTML = "CORRECT";
            zero++;
            createQs();
            scoreArea.innerHTML = zero;

        } else {
            displayMessage.innerHTML = "WRONG";
            secondsLeft = secondsLeft-15;
            
        };

        var Scores = localStorage.getItem("Score")

        if (secondsLeft <= 0 || zero >= 7 ){
            quiz_box.style.display = "none";
            alert("GAMER OVER");
            alert(" Quiz Score " + zero);
            Scores = prompt("Please type in your initials");
            localStorage.setItem("Initials", Scores);
            localStorage.setItem("score",zero)
            location.reload()
           
        }

            
       
    });


   


    function setTimer() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = secondsLeft;
          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
          }
      
        }, 1000);}



    
    
    
    setTimer();
    createQs();
    creatAlerts();
    

}
    




