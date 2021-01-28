var header = document.querySelector("#header"); //declaring the variable header is related to the id header

var startButton = document.querySelector("#startButton")//declaring the variable header is related to the id startButton

var quiz_box = document.querySelector("#quiz_box")//declaring the variable header is related to the id quiz_box


var questionArea = document.querySelector("#questionArea") //declaring the variable header is related to the id questionArea

var scoreArea = document.querySelector("#scoreArea")//declaring the variable header is related to the id scoreArea



var secondsLeft = 45; //creating the countdown start for the timer. Set to 45 seconds.

var timer = document.querySelector("#timerArea");//declaring the variable timer to be related to the id timerArea

//declaring the button variables to be related to the button ids on the html.
var button1 = document.querySelector("#button1")
var button2 = document.querySelector("#button2")
var button3 = document.querySelector("#button3")
var button4 = document.querySelector("#button4")

//Create an array to house questions and answers on buttons. Set the correct answer in the correct category so we can match against it later.
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

//when the element with the startButton id is clicked run the function StartQuiz
document.getElementById("startButton").onclick = function startQuiz(){

    //get startButton and sets its display to none  to hide. Access the quiz_box and make its style block so as to unhide it. 
    document.getElementById("startButton").style.display = "none";
    document.getElementById("quiz_box").style.display = "block";
    
    //putting a variable name to the number 0 for ease of use later.
    var zero = 0;

    // function that allows the questions to have the text content of the current state where zero is in the array. Zero = 0 , Zero++ = 1
    function createQs () {

    //The variable is equal to the current array values for the array value equal to the variable zero. This begins on 0 and increases by one each time a correct answer is clicked.

    var render = questions[zero]


    //Now that the elements inside quiz box are set to display = block we can now set there text values. Their values are equal to the current array being selected using the zero variable and its corresponding properties listed below.

    header.textContent = "JAVASCRIPT QUIZ";
    scoreArea.textContent = 0;
    questionArea.textContent = render.questionArea;
    button1.textContent = render.button1;
    button2.textContent = render.button2;
    button3.textContent = render.button3;
    button4.textContent = render.button4;


    }

    //We now add an add event listener to the buttons contained in the div answers.
    answers.addEventListener("click", function(event){
        //I want the event.target to be a variable named answer check
        var answerCheck = event.target;
        // we are creating a local variable associated with the id displayMessage
        var displayMessage = document.querySelector("#displayMessage")
        //This if statement states that if the current array property correct's string is the same as the button clicked assigned id then it is truthee. If not it is false.
        if(questions[zero].correct === answerCheck.id){
            //In the text area display correct if truthee
            displayMessage.innerHTML = "CORRECT";
            //Increase the zero variable by 1
            zero++;
            // now run our function again to render the new set of questions.
            createQs();
            //Increase the score area with the current position in the array. Which happens to be the same as the score.
            scoreArea.innerHTML = zero;

        } else {
            //If the answer is not correct display the text WRONG and reduce 15 seconds from the timer.
            displayMessage.innerHTML = "WRONG";
            secondsLeft = secondsLeft-15;
            
        };

    
        var Scores = localStorage.getItem("Score")


        //If seconds on the timer are below zero or if the score has reached 7. Game Over. Turn the quiz display off and begin a series of alerts and prompts. Then log the score and the initials captured in the prompt to the local storage. Lastly reload the page so the user could start again.


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


   

    //function to set the timer and its action of reducing incrementally and reducing every 1000 millisecond.
    function setTimer() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = secondsLeft;
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
          }
      
        }, 1000);}



    
    //run our two functions for the first time. This is the only time set time is run. This is not the only time createQs() is run. 
    
    setTimer();
    createQs();
    
    

}
    




