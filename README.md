# RockPaperScissors
Understanding the problem... sort of
So… what I need to do first is…:
1.	I need two players, obviously one of them needs to be a the computer.
1a.	the computer needs to be a function named computerplay
1a.a	I need to randomize the choice the computer makes.
1b.	the players input will be taken via input.
2.	I need a way to see who won
2a	the checker must take 2 inputs and check who won and return a string of the winner name
3. 	I need a counter that plays 5 games
4	I need a checker that checks who got more of a score among the 5 games 




Planning... i think
1	two variable are required at the start of the game one from the player the other from the computer.
2	these two will be sent to the “checker” and the checker will establish who won that round.
3	the checker will return the winner as a string
4	the string will be sent to a “counter” the counter will hold record of the number of rounds as well as the win lose ratio.
5	the counter will output number of games played, and the ratio.
The game will decide who won based on ratio and games played




Pseudo Code
computerplay{
take a random number between 1 and 111 place it in x;
if x is >=  1and  <= 37 put rock in y;
if x is >= 38 and <= 74 put paper in y;
else put scissor in y;
return y
}

player{
take a string from player( rock, paper, scissor) place it in x;
convert x into lower case and place it in z;
remove all but the first from z and place letter in y;
if y is r place rock in k;
if y is p place paper in k;
if y is s place scissor in k;
else go to restart???
return k
}

checker{
take two values and place them in x and y;
if x =y put tie in set;
if  x = rock and y = paper put “ you win paper beats rock” in set and 2 in w;
if x = paper and y = rock put “ you lose paper beats rock” in set and 1 =pa in w;
if x = paper and y = scissor put “you win scissor beats paper” in set and 2 in w;
if x = scissor and y = paper put “ you lose scissor beats paper” in set and 1 in w;
if x = rock and y = scissor put “ you lose rock beats scissor” in set and 1 in w;
if x =  scissor and y = rock put “ you win rock beats scissor” in set and 2 in w;
print set
return w
}

game{
r = 0;
o = 0
p =0
while r<=5:
[run computerplay();
run player();
run checker(y , k);
l = w;
if l = 1 then  add 1 to o;
if l = 2 then  add 1 to p]
if p > o print player wins
if o> p  print player loses
if o==p print its a tie
}


