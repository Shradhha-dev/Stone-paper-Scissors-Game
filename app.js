let userScore=0;/* global variable to keep track of user score*/
let compscore=0;


const choices=document.querySelectorAll(".choice");/*selecting all the choices and starting the game*/
const msg=document.querySelector("#msg");// selecting the message element to display the result of the game 
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=() =>{
    // rock,paper,scissors
    const options=["rock","paper","scissors"];/* array of options for computer to choose from*/
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
//console.log("game was draw");/*function to handle the case when the game is a draw*/
        msg.innerText="Game was Draw.Play again!";
        msg.style.backgroundColor="#53599A";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#329f5b";
        
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You Lost! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="#fb3640";
    }
};
const playGame=(userChoice) =>{/* function to play the game and determine the winner*/
    console.log("user choice=", userChoice);
    //Generate computer choice->modular way
    const compChoice=genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice===compChoice){
        //Draw Game
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //user wins if computer chooses scissors
            
            userWin=compChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
            // user wins if computer chooses rock
            userWin=compChoice==="scissors"?false:true;

        }else{
            // user wins if computer chooses paper
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);

    }
};

choices.forEach((choice) =>{/* adding event listener to each choice and calling the play function when clicked*/
    //console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");/* getting the id of the clicked choice and stroring in a variable*/
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);/*calling the play function and passing the user choice as an argument*/


    });
});

