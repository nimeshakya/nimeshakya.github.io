let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

// time parts
let min = 0;
let sec = 0;

let displayMin = 0;
let displeySec = 0;

// functionality to display timer clock increasing/stopping/resetting
let secOutPut = function () {
  sec++;

  if (sec / 60 === 1) {
    sec = 0;
    min++;
  }

  if (sec < 10) {
    displaySec = "0" + sec.toString();
  } else {
    displaySec = sec;
  }
  if (min < 10) {
    displayMin = "0" + min.toString();
  } else {
    displayMin = min;
  }
  document.querySelector(".sec").innerHTML = displaySec;
  document.querySelector(".min").innerHTML = displayMin;
};

var status = "stopped";
var starStop;

function updateToStart() {
  if (status === "stopped") {
    starStop = setInterval(secOutPut, 1000);
    status = "started";
  } else {
    alert("Already Started!!");
  }
}
startBtn.addEventListener("click", updateToStart);

function updateToStop() {
  if (status === "started") {
    clearTimeout(starStop);
    status = "stopped";
  } else {
    alert("Aleady Stopped !!");
  }
}
stopBtn.addEventListener("click", updateToStop);

// reset button functionality
function updateToReset() {
  document.querySelector(".sec").innerHTML = "00";
  document.querySelector(".min").innerHTML = "00";
  sec = 0;
  min = 0;
  displeySec = 0;
  displayMin = 0;
}
resetBtn.addEventListener("click", updateToReset);
