setInterval(getTimeFromDate, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.start');
htmlElements.resetBtn = document.querySelector('.container .buttons button.start');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');

htmlElements.clock.addEventListener('click', function() { switchToMode(this.dataset.mode) })
htmlElements.stopwatch.addEventListener('click', function() { switchToMode(this.dataset.mode) })
htmlElements.timer.addEventListener('click', function() { switchToMode(this.dataset.mode) })

function getTimeFromDate() {
    let getDateAndTimeZone = new Date();
    let getTime = getDateAndTimeZone.toTimeString(); //toTimeString вытягивает из обькта Date дату время часовой пояс
    let time = getTime.split(' ')[0]; //распиливает переменную на массив и выбирает 0 элемент массива
    renderTime(time);
}

function renderTime(time) { //отрисовывает время
    htmlElements.output.innerText = time;
}



function backlightButton() {
    htmlElements.clock.classList.remove('selected');
    htmlElements.stopwatch.classList.remove('selected');
    htmlElements.timer.classList.remove('selected');
}


function switchToMode(mode) {
    backlightButton();
    switch (mode) {
        case 'clock':
            htmlElements.clock.classList.add('selected');
            break;
        case 'stopwatch':
            htmlElements.stopwatch.classList.add('selected');
            break;
        case 'timer':
            htmlElements.timer.classList.add('selected');
            break;
    }
}