// Heart Icons Functionalities
const navHeartCount = document.getElementById("heartCount");
let totalHeartCount = 0;

let allHeartBtn = document.getElementsByClassName("heart-btn");

for (let i = 0; i < allHeartBtn.length; i++) {
  allHeartBtn[i].addEventListener("click", function () {
      if (allHeartBtn[i].innerText === "🤍") {
          totalHeartCount++;
      }
      navHeartCount.innerText = totalHeartCount;
  });
}
