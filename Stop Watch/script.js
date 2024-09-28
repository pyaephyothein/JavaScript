const stopWatch = document.getElementsByClassName("stopWatch")[0];
const mSecond = document.getElementsByClassName("mSecond")[0];
const startBC = document.getElementsByClassName("startText button")[0];
const pauseBC = document.getElementsByClassName("pauseText button")[0];
const continueBC = document.getElementsByClassName("continueText button")[0];
const restartBC = document.getElementsByClassName("restartText button")[0];

let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let intervalID;

const startTime = () => {
    milliseconds += 10;  // Increment by 10ms to keep it realistic for a stopwatch (0.01 second steps)

    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds += 1;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }

    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }

    const millisecondsText = milliseconds < 100 ? "0" + milliseconds.toString().padStart(3, '0') : milliseconds.toString();
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    const hoursText = hours < 10 ? "0" + hours.toString() : hours.toString();
    stopWatch.textContent = `${hoursText}:${minutesText}:${secondsText}`;
    mSecond.textContent = millisecondsText;
};

startBC.addEventListener("click", () => {
    clearInterval(intervalID); 
    intervalID = setInterval(startTime, 10);
});

pauseBC.addEventListener("click", () => {
    clearInterval(intervalID);
});

continueBC.addEventListener("click", () => {
    clearInterval(intervalID); 
    intervalID = setInterval(startTime, 10);
});

restartBC.addEventListener("click", () => {
    clearInterval(intervalID);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    stopWatch.textContent = "00:00:00"; 
    mSecond.textContent = "000";        
    intervalID = setInterval(startTime, 10); 
});
