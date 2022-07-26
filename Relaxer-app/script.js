const container = document.getElementById('container');
const text = document.getElementById('text')


const TotalTime = 7500;
const breatheTime = (TotalTime / 5) * 2;
const holdTime = TotalTime / 5;

function BreatAnimation(){
    text.innerHTML = 'breathe In'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerHTML = 'Hold'

        setTimeout(() => {
            text.innerHTML = 'Breathe Out'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(BreatAnimation, TotalTime)