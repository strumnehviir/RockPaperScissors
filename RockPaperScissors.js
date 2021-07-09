pscore = document.querySelector("#player-score");
cscore = document.querySelector("#computers-score");
cchoice = document.querySelector("#cchoice")
messages = document.querySelector("#messages")
Computer = 0
Player = 0
function randomIntGenerator() {
    return Math.floor(Math.random() * (111-1 + 1)) + 1;
}
function ComputerPlay(){
    let x = randomIntGenerator()
    if (x >= 1 && x <= 37){
         y = "rock"
    }
    else if (x >= 38 && x <= 74){
         y = "paper"

    }
    else {
         y = "scissors"
    }
    cchoice.textContent = y
    console.log("computer chose:" + y)
    return y
}


function PlayerPlay(startInput){
    let x = startInput
    let z = x.toLowerCase()
    let y = z.slice(0, 2)
    if (y == "ro"){
        k = "rock"
    } 
    else if (y == "pa"){
         k = "paper"
    }
    else if (y == "sc"){
         k = "scissors"
    }
    return roundValuePlacer(k)

}

function PlayRound(Player, Computer){
     let x = Computer
     let y = Player
     let w = 0   
     if (x === y){
        set = "TIE"
        w = 3
        messages.textContent = set
        console.log(set)
     }
     else if (x === "rock" && y === "paper"){
         set = "You win paper beats rock"
         w = 2
         messages.textContent = set
         console.log(set)
     }
     else if (x === "paper" && y === "rock"){
         set = "You lose paper beats rock"
         w = 1
         messages.textContent = set
         console.log(set)
     }
     else if (x === "paper" && y === "scissors"){
         set = "You win scissors beats paper"
         w = 2
         messages.textContent = set
         console.log(set)
     }
     else if (x === "scissors" && y === "paper") {
        set = " You lose scissors beat paper"
        w = 1
        messages.textContent = set
        console.log(set)
     }
     else if ( x === "rock" && y === "scissors"){
         set = "You lose rock beats scissors"
         w = 1
         messages.textContent = set
         console.log(set)
     } 
     else if ( x === "scissors" && y === "rock"){
         set = "You win rock beats scissors"
         w = 2
         messages.textContent = set
         console.log(set)
     }

     return w
}     

 
function pointAggrigator(point){
    let points = point
        if (points == 1){
            Computer = ++Computer
        }
        else if(points == 2){
            Player = ++Player
        }
        else if (points == 3){
            Computer = Computer + 0
            Player = Player + 0
        }
 }


 function game(e) {
    let move = e.explicitOriginalTarget.attributes
    let rockObj = document.querySelector("#rock-img")
    let paperObj = document.querySelector("#paper-img")
    let scissorsObj = document.querySelector("#scissors-img")
    let rock = rockObj.attributes
    let paper = paperObj.attributes
    let scissors = scissorsObj.attributes
    
    
    if (rock == move){
       
        move1 = "rock"
        return PlayerPlay(move1)
    }
    
    else if (paper == move){
        move1 = "paper"
        return PlayerPlay(move1)
    }
    else if (scissors ==  move){
        move1 = "scissors"
        return PlayerPlay(move1)

    }
    else{
        return
    }
 }
function roundValuePlacer(inputFromPlayer){
    let CP = ComputerPlay()
    let PP =inputFromPlayer
    if (Computer == 5){
        let message = "YOU LOSE"
        messages.textContent = message
        console.log(message)
        return message
    }
    else if( Player == 5){
        let message = "YOU WIN"
        messages.textContent = message
        console.log(message)
        return message
    }
    else if(Player == 5 && Computer == 5){
        let message = "TIE"
        messages.textContent = message
        console.log(message)
        return message
    }
    else{
    roundWinner = PlayRound(PP, CP)
    pointAggrigator(roundWinner)
    console.log(Player)
    pscore.textContent = Player
    console.log(Computer)
    cscore.textContent = Computer
    gameListener()
    }

}

 function gameListener(){
    window.addEventListener("click", game)
 }

  function reset(e){
    let restartObj = document.querySelector("#restart")
    let press = e.explicitOriginalTarget.attributes 
    restart = restartObj.attributes
    console
    if(restart === press){
        Computer = 0
        Player = 0
        console.log(" got the go ahead for restart")
        pscore.textContent = 0
        cscore.textContent = 0
        cchoice.textContent = " "
        messages.textContent = " "
        gameListener()
    }
    else if ( e === undefined){
        console.log("getting undifined but working")
        reset
    }
    else {
        console.log("idk")
        return
    }

 }

 function resetListener(){
    window.addEventListener("click", reset)
 }
 resetListener()
 gameListener()