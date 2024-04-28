

const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const startBtn = document.querySelector('#startBtn');

let startInterval;
let seconds = 0;
function startWatch() {
    console.log('watch started');
    startBtn.disabled = true;
    startBtn.style.display = 'none'
    startInterval = setInterval(function () {
        seconds += 1;
        if(seconds > 9){
            second.innerHTML = seconds;
        }else{
            second.innerHTML = '0' +  seconds;
        }
        console.log(seconds)
    }, 1000);
}

function stopWatch() {
    console.log('watch stop')
    startBtn.disabled = false
    clearInterval(startInterval)
}
function resetWatch() {
    console.log('watch reset')
    clearInterval(endInterval)
}

