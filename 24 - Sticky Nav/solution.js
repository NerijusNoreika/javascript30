const nav    = document.querySelector('#main');
const logo   = document.querySelector('.logo');
const header = document.querySelector('header');

let navOffset = nav.offsetTop;

window.addEventListener('scroll', function() {
    let navIsFixed = navOffset <= this.window.pageYOffset;
    if (navIsFixed) {
        logo.classList.add('full');
        nav.classList.add('fixed');
        document.body.style.paddingTop = nav.offsetHeight + "px";
    } else {
        document.body.style.paddingTop = "0px";
        logo.classList.remove('full');
        nav.classList.remove('fixed');
    }
});