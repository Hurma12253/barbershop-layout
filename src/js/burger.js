const burger = document.querySelector('.main-nav__burger')
const nav = document.querySelector('.main-nav')

burger.addEventListener('click', () => {
    if (nav.classList.contains('main-nav--opened')) {
        nav.classList.add('main-nav--closed')
        nav.classList.remove('main-nav--opened')
    } else {
        nav.classList.remove('main-nav--closed')
        nav.classList.add('main-nav--opened')
    }
})
