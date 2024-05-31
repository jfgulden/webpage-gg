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

function setHomeScreenHeight() {
    var img = new Image();
    img.src = './images/encabezado_blanco_web_Gulden_2024_2.png';

    img.onload = function () {
        var section = document.getElementById('home-screen');
        section.style.height = img.height + 'px';
    };

}
function setLogoSize() {
    var logo = document.getElementById('logo');
    var navbar = document.getElementById('nav-list');
    const navbarHeight = navbar.offsetHeight;
    logo.style.width = `${navbarHeight}px`;
    const proporcionAnchoAlto = logo.naturalWidth / logo.naturalHeight;
    logo.style.width = `${navbarHeight * proporcionAnchoAlto}px`;

}
window.addEventListener('resize', function () {
    setSquareSize();
    setLogoSize();
});
window.addEventListener('load', function () {
    setSquareSize();
    setLogoSize();
    // setHomeScreenHeight();
});