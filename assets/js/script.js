let buttonStart = document.querySelector('.start-btn');
let interval;
let second = 0;
let minute = 0;
let hour = 0;

function twoDigits(digit) {
  return digit.toString().padStart(2, 0);
}

function start() {
  watch();
  interval = setInterval(watch, 1000);
  buttonStart.setAttribute('disabled', 'true');
}
function pause() {
  buttonStart.removeAttribute('disabled');
  clearInterval(interval);
}
function stop() {
  buttonStart.removeAttribute('disabled');
  clearInterval(interval);
  second = 0;
  minute = 0;
  hour = 0;
  document.querySelector('.watch').innerHTML = '00:00:00';
}

function watch() {
  second++;
  if (second == 60) {
    minute++;
    second = 0;
  }
  if (minute == 60) {
    hour++;
    minute = 0;
  }
  document.querySelector('.watch').innerHTML =
    twoDigits(hour) + ':' + twoDigits(minute) + ':' + twoDigits(second);
}
