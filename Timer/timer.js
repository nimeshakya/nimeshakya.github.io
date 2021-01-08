let startstopBtn = document.querySelector(".start-stop");
let resetBtn = document.querySelector(".reset");

function countDown() {
  let minutes = document.querySelector(".minutes").value;
  let seconds = document.querySelector(".seconds").value;

  if (minutes > 0 && seconds >= 0) {
    if (seconds >= 0) {
      seconds--;
      if (seconds < 10) {
        document.querySelector(".seconds").value = "0" + seconds;
      } else {
        document.querySelector(".seconds").value = seconds;
      }
    }
    if (seconds < 0) {
      minutes--;
      document.querySelector(".seconds").value = 59;
      if (minutes < 10) {
        document.querySelector(".minutes").value = "0" + minutes;
      } else {
        document.querySelector(".minutes").value = minutes;
      }
    }
  }
  if (minutes == 0 && seconds > 0) {
    document.querySelector(".minutes").value = minutes;
    seconds--;
    if (seconds < 10) {
      document.querySelector(".seconds").value = "0" + seconds;
    } else {
      document.querySelector(".seconds").value = seconds;
    }
  }
  if (minutes == 0 && seconds == 0) {
    status = "stopped";
    startstopBtn.innerHTML = "Start";
    alert("Times's Up!!");
    clearInterval(interval);
  }
}

let status = "stopped";
var interval; /* time interval (seconds) */

function startStop() {
  if (status === "stopped") {
    if (
      document.querySelector(".minutes").value > 0 ||
      document.querySelector(".seconds").value > 0
    ) {
      interval = setInterval(countDown, 1000);
      status = "started";
      startstopBtn.innerHTML = "Stop";
    } else {
      alert("Set a time !!");
    }
  } else {
    clearInterval(interval);
    status = "stopped";
    startstopBtn.innerHTML = "Start";
  }
}

startstopBtn.addEventListener("click", startStop);

function reset() {
  status = "stopped";
  clearInterval(interval);
  startstopBtn.innerHTML = "Start";
  document.querySelector(".minutes").value = "00";
  document.querySelector(".seconds").value = "00";
}

resetBtn.addEventListener("click", reset);
