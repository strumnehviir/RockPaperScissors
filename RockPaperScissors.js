function randomInt() {
    return Math.floor(Math.random() * (111-1 + 1)) + 1;
}
function ComputerPlay(){
    let x = randomInt()
    if (x >= 1 && x <= 37){
         y = "rock"
    }
    else if (x >= 38 && x <= 74){
         y = "paper"

    }
    else {
         y = "scissors"
    }
    console.log("computer chose:" + y)
    return y
}


function PlayerPlay(){
    let x = prompt("What hand will you be playing:  ")
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
    return k

}

function PlayRound(Player, Computer){
     let x = Computer
     let y = Player
     let w = 0   
     if (x === y){
        set = "TIE"
        w = 3
        console.log(set)
     }
     else if (x === "rock" && y === "paper"){
         set = "You win paper beats rock"
         w = 2
         console.log(set)
     }
     else if (x === "paper" && y === "rock"){
         set = "You lose paper beats rock"
         w = 1
         console.log(set)
     }
     else if (x === "paper" && y === "scissors"){
         set = "You win scissors beats paper"
         w = 2
         console.log(set)
     }
     else if (x === "scissors" && y === "paper") {
        set = " You lose scissors beat paper"
        w = 1
        console.log(set)
     }
     else if ( x === "rock" && y === "scissors"){
         set = "You lose rock beats scissors"
         w = 1
         console.log(set)
     } 
     else if ( x === "scissors" && y === "rock"){
         set = "You win rock beats scissors"
         w = 2
         console.log(set)
     }

     return w
}     

 
function game(){
    let r = 1
    let o = 0
    let p = 0
    let l = 0
    while( r<=5){
        PS = PlayerPlay()
        CS = ComputerPlay()
        
        l = PlayRound(PS, CS)
        if (l == 1){
            o = ++o
        }
        else if(l == 2){
            p = ++p
        }
        else if (l == 3){
            o = o+ 0
            p = p+ 0
        }
        r = r + 1
    }
 
    if ( p > o){
        console.log("You win!")

    }
    else if(o > p){
        console.log("you lose")
    }
    else if (o == p){
        console.log("GAME TIED")
    }
    console.log("You scored:" + p)
    console.log("Computer scored:" + o)
 }

 game()