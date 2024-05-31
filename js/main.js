// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

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

function setSquareSize() {
    const squares = document.querySelectorAll('.square-size');
    squares.forEach(square => {
        square.style.height = `${square.offsetWidth}px`;
    });
}

function setLogoSize() {
    var logo = document.getElementById('logo');
    var navbar = document.getElementById('nav-list');
    const navbarHeight = navbar.offsetHeight;
    logo.style.width = `${navbarHeight}px`;
    const proporcionAnchoAlto = logo.naturalWidth / logo.naturalHeight;
    logo.style.width = `${navbarHeight * proporcionAnchoAlto}px`;

}

function setLabelSize() {
    var labels = document.querySelectorAll('.form-group.inherited-size label'); //Funciona como un and. Si pusiera una ',' entre las clases funciona como un or.
    var input_text = document.getElementById('name_input');
    labels.forEach(label => {
        padding = (input_text.offsetHeight - label.offsetHeight) / 2;
        label.style.paddingTop = `${padding - 1}px`;
        label.style.paddingBottom = `${padding - 1}px`;
        console.log("entra");
    });
}

window.addEventListener('resize', function () {
    setSquareSize();
    setLogoSize();
    setLabelSize();
});
window.addEventListener('load', function () {
    setSquareSize();
    setLogoSize();
    setLabelSize();
});