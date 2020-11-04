const navMenu = document.getElementById('nav-menu');
const hamburgerMenu = document.getElementById('header-hamburger');
const closeMenu =  document.getElementById('nav-close');
const zoneClick = document.getElementById('zoneclick');


hamburgerMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
    zoneClick.classList.toggle('showZoneClick');
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})

zoneClick.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
    zoneClick.classList.remove('showZoneClick');

})