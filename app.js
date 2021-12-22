// 計算每個字的筆劃長度
const text = document.querySelectorAll(".thePaths");
for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

// 轉場動畫結束要讓它消失並顯示首頁
const lastWord = document.querySelector("#fifteenth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease; opacity:0; pointer-events:none";
});
