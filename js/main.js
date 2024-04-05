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