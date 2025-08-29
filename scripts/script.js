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

// Call Buttons Functionalities
let coins = 100;
const coinDisplay = document.querySelector(".coin");
const callButtons = document.getElementsByClassName("callBtn");
const callHistory = document.querySelector(".callHistory");

for (let btn of callButtons){
    btn.addEventListener("click", function () {
      const parent = btn.parentNode.parentNode;

      const serviceName = parent.getElementsByTagName("h2")[0].innerText;
      const serviceNumber = parent.getElementsByTagName("p")[2].innerText;

      // check coins
      if (coins < 20) {
        alert("Sorry, you have not enough coins to make a call!!");
        return;
      } else {
        alert("Calling " + serviceName + " " + serviceNumber+"...");
      }

        // Reduce Coin after each click
        coins -= 20;
        coinDisplay.innerText = coins;


        // add history
        const newHistory = document.createElement("div");
        newHistory.className =
            "flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2";
        
        const currentTime = new Date().toLocaleTimeString();
        
        newHistory.innerHTML = `
        <div class = "flex flex-col">
        <span class = "font-semibold">${serviceName}</span>
        <span class="text-sm text-gray-600">${serviceNumber}</span>
        </div>
        <div class="text-xs text-gray-500">${currentTime}</div>
        `;
        callHistory.append(newHistory);
    });
}

// Clear History button
function clearHistory() {
    callHistory.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h2 class="font-semibold text-lg"><i class="text-gray-500 fa-regular fa-clock"></i> Call History</h2>
            <button class="text-sm bg-green-500 text-white px-4 py-2 rounded-3xl hover:bg-green-700">Clear</button>
        </div>
    `;
    const newClearBtn = callHistory.querySelector("button");
    newClearBtn.addEventListener("click", clearHistory);
}
const clearHistoryBtn = callHistory.querySelector("button");
clearHistoryBtn.addEventListener("click", clearHistory);

// Copy button functionality
const rightDiv = document.getElementsByClassName("right")[0];
const copyHeaderBtn = rightDiv.getElementsByTagName("button")[2];
const copyHeaderSpan = copyHeaderBtn.getElementsByTagName("span")[0];
let copyCount = 0;
const copyBtns = document.getElementsByClassName("copyBtn");

for (let btn of copyBtns) {
    btn.addEventListener("click", function () {
        const card = btn.parentNode.parentNode;
        const number = card.getElementsByTagName("p")[2].innerText;

        alert("Number " + number + " copied...");

        copyCount++;
        copyHeaderSpan.innerText = copyCount;
    });
}


