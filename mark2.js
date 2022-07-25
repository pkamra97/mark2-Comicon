//const { read } = require('fs')

// user name input and welcome portion for quiz

var readline = require('readline-sync')
var user_name= readline.question("Welcome to Comicon enter you name\n")
console.log("---------------------")
var score=0
console.log("Welcome ",user_name," to the Comicon")
console.log("---------------------")
console.log("please confirm your name ", user_name)
console.log("---------------------")
var ans = readline.question("if this is your name confirm by yes otherwise no ")

//name checking from user

if(ans==="yes")
{
    console.log("Welcome ",user_name,"\n let's start Comicon")
    console.log("---------------------")
    console.log("For every right answer you will get a +1")
    console.log("---------------------")
    console.log("There are 3 levels in Comicon \n if you score gretaer than or equal to 4 then you go to level2 \n if greater than 7 than level 3\n level1 is compulsory for everyone ")
    console.log("---------------------")
}
else{
    user_name=readline.question("Enter your name again \n")
    console.log("Welcome ",user_name,"\n let's start Comicon")
    console.log("---------------------")
    console.log("For every right answer you will get a +1")
    console.log("---------------------")
    console.log("There are 3 levels in Comicon \n if you score gretaer than or equal to 4 then you go to level2 \n if greater than 6 than level 3\n level1 is compulsory for everyone ")
    console.log("---------------------")
}

// play functionto calculate score

function play(ques , ans)
{
    var response=readline.question(ques)

    if(response.toUpperCase()===ans.toUpperCase())
    {
        score++
        console.log("Right answer")
    }
    else{ console.log("Better luck next time") 
    }
    
    console.log("Your current score is ", score)
    console.log("--------------------------")
}

// creating array of objects to pass in play prepparing questions

var level1 =[ {question:"Who killed thanos in endgame\nA.Iron man\nB.spiderman\nC.wanda\n",
              answer:"A"},
              {question:"Real name of Captain America\nA.Bucky Barnes\nB.Steve rogers\nC.tony stark\n",
               answer:"B" 
              },
              {question:"Who predicted the one way to Kill thanos\nA.Vision\nB.Gamore\nC.Dr.strange\n",
              answer:"C"
              },
              {question:"Richest Superhero In entire marvel and Dc\nA.Iron_man\nB.Batman\nC.Black_panther\n",
               answer:"C"
              },
              {question:"The first person who became ant-man\nA.Scott_lang\nB.Hank Pym\nC.Peter parker\n",
              answer:"B",
              },
              {question:"Who killed Illumianti on Earth 818\nA.Wanda\nB.Vision\nC.Iron Man\n",
               answer:"A"
              }

]
var level2 =[{question:"what does Tva stands for\nA.Top villains academy\nB.The villains arc\nC.Time variance authority\n",
            answer:"C"},
             {question:"which place gets destroyed in events of Ragnarok\nA.Mid-guard\nB.Asgard\nC.Jotenhein\n",
             answer:"b"},
             {question:"Thor is god of what?\nA.thunder\nB.Comedy\nC.hammers\n",answer:"A"}
]

var level3=[{question:"who played the role of Iron_Man\nA.Robert Downey JR.\nB.Tom cruise\nC.Chris pratt\n",
            answer:"A"},
            {question:"Spiderman entered The MCu in which movie\nA.Infinity war\nB.Endgame\nC.Civil war\n",
            answer:"C"},
            {question:"who plays the role of spiderman in MCU\nA.Andrew garfield\nB.Tobey Maguire\nC.Tom Holland\n",
             answer:"C"}
        ]

// looping throue level 1 array for score to inc

for(var i=0;i<level1.length;i++)
{
    play(level1[i].question,level1[i].answer)
}

console.log("Your final score is ", score)

// loop for level 2 questions
if(score>=4){
    console.log("Congrats for clearing level1 of quiz")
    console.log("----------------------")
    console.log("Your score is ", score)
    console.log("----------------------")
    console.log("welcome to level 2 now")
    console.log("----------------------")
    for(var i=0;i<level2.length;i++)
    {
    play(level2[i].question,level2[i].answer)
    }

}
//loop for level 3 questions
if(score>=6){
    console.log("Congrats for clearing level1 and level2 of quiz")
    console.log("----------------------")
    console.log("Your score is ", score)
    console.log("----------------------")
    console.log("welcome to level 3 now")
    console.log("----------------------")
    for(var i=0;i<level3.length;i++)
    {
    play(level3[i].question,level3[i].answer)
    }
}

var high_score=[{player:"Steven Strange", score:"3"}, {player:"Tony",score:"6"}]

// console.log(score>high_score[high_score.length-1].score)

if(score>high_score[high_score.length-1].score){

    console.log("Congrats for scoring a new high score")
    console.log("Previous high score")
    console.log(high_score[high_score.length-1].score," by ",high_score[high_score.length-1].player)
    high_score.push({player:user_name,score:score})
    console.log("New High Score")
    console.log(high_score[high_score.length-1].score," by ",high_score[high_score.length-1].player)
    console.log("Send us a screenshot of your high score")
}

else{
console.log("Your score is still lower than the high Score")
console.log("Better luck next time")
console.log("Current High Score")
console.log(high_score[high_score.length-1].score," by ",high_score[high_score.length-1].player)

}