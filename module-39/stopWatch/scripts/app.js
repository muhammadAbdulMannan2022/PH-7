const hoursDis = document.querySelector("#hours");
const minutesDis = document.querySelector("#minutes");
const secondsDis = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const clearBtn = document.querySelector("#clear");

// function timer
let seconds = 0;
let minutes = 0;
let hours = 0;
function setTimer() {
  let interval = setInterval(() => {
    if (seconds < 59) {
      seconds++;
    } else {
      seconds = 0;
      if (minutes < 59) {
        minutes++;
      } else {
        minutes = 0;
        hours++;
      }
    }
    setInnerHTML(hoursDis, hours);
    setInnerHTML(minutesDis, minutes);
    setInnerHTML(secondsDis, seconds);
  }, 1000);
  addEventOnButton(stopBtn, () => stopTimer(interval));
  addEventOnButton(clearBtn, clearTimer);
}
function setInnerHTML(element, value) {
  element.innerHTML = String(value).length < 2 ? `0${value}` : value;
}
function stopTimer(intervalId) {
  clearInterval(intervalId);
}
function clearTimer() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  setInnerHTML(hoursDis, hours);
  setInnerHTML(minutesDis, minutes);
  setInnerHTML(secondsDis, seconds);
}
function addEventOnButton(buttonRef, cbFunction) {
  buttonRef.addEventListener("click", cbFunction);
}
addEventOnButton(startBtn, setTimer);
