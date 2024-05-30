window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    if (!nombre || !email) {
        document.getElementById('mensajeAdvertencia').style.display = 'block';
    } else {
        document.getElementById('mensajeAdvertencia').style.display = 'none';
        document.getElementById('miFormulario').submit();
    }
}

//No esta siendo usada, no me anduvo.
function scrollIntoViewSmoothly(targetId) {
    const targetElement = document.getElementById('project_sect');
    if (targetElement) {
        console.log("ID de destino:", targetId)
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    else {
        console.error("Elemento no encontrado:", targetId)
    }
}

function fitProjectSize() {
    const squares = document.querySelectorAll('.project');
    squares.forEach(square => {
        square.style.height = `${square.offsetWidth}px`;
    });
}


window.addEventListener('resize', fitProjectSize);
window.addEventListener('load', fitProjectSize);