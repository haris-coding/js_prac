let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "1";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const showwinner = (winner) => {
  msg.innerText = `Congratulations😎 , winner is ${winner} `;
  msgcontainer.classList.remove("hide");
  diablebox();
};
const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("WINNER 😍", pos1);
        showwinner(pos1);
      }
    }
  }
};
const resetgame = () => {
  turn0 = true;
  enablebox();
  msgcontainer.classList.add("hide");
};
const diablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
newgamebtn.addEventListener("click", resetgame);
reset_button.addEventListener("click", resetgame);
