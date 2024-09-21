const menuToggle=document.querySelector('.menuToggle');
const bot3d = document.getElementById('bot3d')

window.addEventListener('load',iniciar)

menuToggle.onclick = function()
{
    menuToggle.classList.toggle('active')
}

function iniciar() {
    bot3d.style.display = 'none'
    mostrarBot()
}

function mostrarBot() {
    if (menuToggle == 'active') {
        bot3d.style.display = 'block'
    }
}