const menuToggle=document.querySelector('.menuToggle');
const bot3d=document.getElementById('bot3d')

window.addEventListener('load',iniciar)


menuToggle.onclick = function()
{
    menuToggle.classList.toggle('active')
   /*  bot3d.style.display = 'block' */
}

function iniciar() {
    document.getElementById.bot3d.style.display = 'none'
} 


function mostrarbot() {
    if (menuToggle.classList.toggle('active')) {
        document.getElementById.bot3d.style.display = 'block'
    }
} 

function ocultar()
{
    document.getElementById("imagen").style.display="block";
}
function ocultar1()
{
    document.getElementById("imagen").style.display="none";
}