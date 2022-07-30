const main = document.querySelector('main')
const voiceSelect = document.getElementById('voices')
const text = document.getElementById('text')
const read = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        images: './img/drink.jpeg',
        text:"I'm Thirsty"
    }
]

data.forEach(createBox);

function createBox(item){
    const box = document.createElement('div')

    const { image , text} = item;
    box.classList.add('box')
    box.innerHTML = `
        <img src ="${image}" />
        <p class="info">${text}</p>
    `

    main.appendChild(box)
}