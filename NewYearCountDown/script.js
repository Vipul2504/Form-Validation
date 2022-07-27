const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const countdown = document.getElementById('countdown')
const year = document.getElementById('year')
const loading = document.getElementById('loading')

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerHTML = currentYear + 1

function updateCoundown(){
    const currentTime = new Date();

    const difference = newYearTime - currentTime;
    const D = Math.floor(difference / 1000 / 60 / 60 / 24); 
    const H = Math.floor(difference / 1000 / 60 / 60 ) % 24; 
    const M = Math.floor(difference / 1000 / 60 ) % 60 ; 
    const S = Math.floor(difference / 1000 ) % 60;
    
    days.innerHTML = D;
    hours.innerHTML = H < 10 ? '0' + H: H;
    minute.innerHTML = M < 10 ? '0' + M: M;
    second.innerHTML = S < 10 ? '0' + S: S;

}

setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex'
}, 1000)
setInterval(updateCoundown, 500)