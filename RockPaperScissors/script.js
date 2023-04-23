let computerScore=document.getElementById("computer-score");
let playerScore=document.getElementById("player-score");
let playerChoosen=document.getElementById("player-choosen");
let computerChoosen=document.getElementById("computer-choosen");
let result=document.getElementById("result");
let playscore=0;
let compscore=0;

function Generator(){
      let option=["rock","scissors","paper",
                  "rock","scissors","paper",
]
      return option[Math.floor(Math.random() * option.length)];
}
function Checker(option){
      let GeneratedOp=Generator();
      playerChoosen.innerHTML=option;
      computerChoosen.innerHTML=GeneratedOp;
      
      if(option==GeneratedOp){
            result.innerHTML="YOU LOOSE"
            result.style.backgroundColor="#f24343";
            compscore+=1;
      }
      else{
            playscore+=1
            result.style.backgroundColor="#01a453";
            result.innerHTML="YOU  WIN"
      }
      playerScore.innerText=playscore;
      computerScore.innerText=compscore;
}