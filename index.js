const main = document.querySelector("main")
let hours = 0, minutes = 0, seconds = 0;

function paintTime() {
  main.innerText = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}
function addZero(text) {
  return text = text < 10 ? `0${text}` : text;
}

function askTime() {
  hours = prompt("hours");
  minutes = prompt("minutes");
  while (minutes >= 60) {
    minutes = prompt("minutes");
  }
  seconds = prompt("seconds");
  while (seconds >= 60) {
    seconds = prompt("seconds");
  }
  paintTime();
}

function goTimer() {
  seconds = seconds === 0 ? 59 : seconds - 1;
  if (seconds === 59) {
    minutes = minutes === 0 ? 59 : minutes - 1;
  }
  if (minutes === 59) {
    hours--;
  }

}
paintTime();

function init() {
  paintTime();
  askTime();
  while (seconds > 0 || minutes > 0 || hours > 0) {
    setInterval(goTimer, 1000);
  }
}

init();