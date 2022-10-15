const menu = document.querySelector('.hamburger');
const links = document.querySelector('.links')

menu.addEventListener('click', function () {
    links.classList.toggle('active')
})