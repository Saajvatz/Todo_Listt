export function footer() {
    // Crear footer
    let footer = document.createElement('footer');

    // Línea separadora
    let hr = document.createElement('hr');
    footer.appendChild(hr);

    // Contenedor principal
    let divContenido = document.createElement('div');
    divContenido.className = "footer-contenido";

    // Texto vacío a la izquierda (para centrar mejor)
    let spanVacio = document.createElement('span');
    divContenido.appendChild(spanVacio);

    // Enlace de GitHub
    let enlace = document.createElement('a');
    enlace.className = "footer-github";
    enlace.href = "https://github.com/ROCKEMMA/todo-list"; // Aquí agregas tu URL manualmente
    enlace.innerText = "@github";
    enlace.target = "_blank"; // Abrir en otra pestaña
    divContenido.appendChild(enlace);

    footer.appendChild(divContenido);

    return footer;
}
