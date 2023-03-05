const timeDisplay = document.getElementById("timeDisplay");
const am_pm = document.getElementById("am-pm");

function setTimeInDOM() {
  const date = new Date();
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //   seting time in display
  timeDisplay.innerHTML = `<span>${
    String(hours).length < 2 ? `0${hours}` : hours
  }</span>:<span>${
    String(minutes).length < 2 ? `0${minutes}` : minutes
  }</span>:<span>${
    String(seconds).length < 2 ? `0${seconds}` : seconds
  }</span>`;
  //   fix am pm
  let isAm = date.getHours() > 12 ? "PM" : "AM";
  am_pm.innerHTML = isAm;
}
setTimeInDOM();
setInterval(() => {
  setTimeInDOM();
}, 1000);
