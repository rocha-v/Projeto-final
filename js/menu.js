const buttonMenu = document.querySelector(".button__menu");
const menuMobile = document.querySelector(".cabecalho__menu__mobile")
let isMenuOpen = false;


buttonMenu.addEventListener('click', function(){
    isMenuOpen ? menuMobile.classList.add('invisivel'):menuMobile.classList.remove('invisivel')
    
    isMenuOpen ? buttonMenu.children[0].setAttribute('src','../assets/menu.svg') :buttonMenu.children[0].setAttribute('src','../assets/close.svg');

    isMenuOpen =! isMenuOpen;
})
