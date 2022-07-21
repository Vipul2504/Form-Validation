const toggle = document.getElementById('toggle')
const Open = document.getElementById('open')
const Close = document.getElementById('close')
const modal = document.getElementById('modal')

toggle.addEventListener('click',() => {
    document.body.classList.toggle('show-nav')
})

Open.addEventListener('click',()=>{
    modal.classList.add('show-modal')
})

Close.addEventListener('click', () =>{
    modal.classList.remove('show-modal')
})

window.addEventListener('click', e => e.target === modal ? modal.classList.remove('show-modal'): false)
