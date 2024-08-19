let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')/* ao tocar no menu, ele se fechará */
})

overlay.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

/* document.addEventListener('DOMContentLoaded', function() {
    const linkSobre = document.getElementById('link-sobre');
    const sectionSobre = document.getElementById('sobre');

    linkSobre.addEventListener('click', function() {
        sectionSobre.scrollIntoView({ behavior: 'smooth' });
    });
});
 */