let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let line = document.querySelector(".before");
let winnerAnnc = document.querySelector(".winnerannc");
let newgameBtn = document.querySelector("#newgamebtn");
let winnerCont = document.querySelector(".lowercontainer");
let musicBtn = document.querySelector(".volume");
// window.location.reload
let clickMusic = document.querySelector(".clickmusic");
let bgm = document.querySelector("audio");
let musicInfo = document.querySelector(".onoff");
let winBgm = document.querySelector(".winbgm");
let audio = document.querySelector(".audio");
let onOff = document.querySelector(".onoff");


let turnO = true;


bgm.volume = 0.5;


function toggleAudio() {
  if (audio.paused) {
    audio.play();
    onOff.textContent = "Music-On";
  } else {
    audio.pause();
    onOff.textContent = "Music-Off";
  }
}


// musicBtn.addEventListener("click", function() {
//    if (bgm.paused) {
//       bgm.play();
//       musicInfo.innerText = "Music-on";
//     } else {
//       bgm.pause();
//       musicInfo.innerText = "Music-off";
//     }
// });

const winPatterns = [
   [0, 1, 2], 
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];

boxes.forEach((box) => {
      box.addEventListener("click", () => {
         clickMusic.play();
         if(turnO == true) {
            box.innerText = "O";
            turnO = false;
         } else {
            box.innerText = "X";
            turnO = true;
         }
         box.disabled = true ;  
         
         checkWinner();

      

      })
})




const disableBoxes = () => {
   for(box of boxes) {
      box.disabled = true ;
      }
}



const showWinner = (winner) => {
   winBgm.volume = 1;
   winBgm.play();
   winnerCont.classList.remove("hide");
   winnerAnnc.innerText = `Congratulations\nThe Winner Is ${winner}`;
   disableBoxes();
}



const resetGame = () => {
   winBgm.volume = 0;
   turnO = true;
   enableBoxes();
   winnerCont.classList.add("hide");
} 

const enableBoxes = () => {
     for (box of boxes) {
      box.disabled = false;
      box.innerText = "";
     }
}


const checkWinner = () => {
   for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

      if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
         if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner is", pos1Val);
            showWinner(pos1Val);
         }
      }
   }
}

resetBtn.addEventListener("click", resetGame );
newgameBtn.addEventListener("click", resetGame );

