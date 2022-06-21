const bar = document.querySelector('#bar');
const close = document.querySelector('#close')
const nav = document.querySelector('.site-nav__list')

if(bar) {
    bar.addEventListener('click' , () => {
        nav.classList.add('active')
    })
}

if(close) {
    close.addEventListener('click' , () => {
        nav.classList.remove('active')
    })
}
// <!-- /* Directed By Farkhodoff_me */ -->