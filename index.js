
let timerId; 

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    if (!timerId) {
        timerId = setInterval(updateClock, 1000); 
    }
});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId); 
    timerId = null; 
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date(); 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); 
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

