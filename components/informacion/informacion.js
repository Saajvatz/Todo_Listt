import { formulario } from "../formulario/formularioComponent.js";
import { tarea } from "../moduls/itemTarea/itemTarea.js";

export function informacion(datos = {}) {
  const {
    estado = "Sin estado",
    titulo = "Sin título",
    descripcion = "Sin descripción",
    integrantes = []
  } = datos;

  let divInformacion = document.createElement('div');
  divInformacion.className = "div-info";

  // --- Botones ---
  let contenedorBotones = document.createElement('div');
  contenedorBotones.className = "contenedor-botones";

  let btnTarea = document.createElement('button');
  btnTarea.className = "btn-tarea";
  btnTarea.textContent = "+ tarea";

  let btnArchivados = document.createElement('button');
  btnArchivados.className = "btn-archivados";
  btnArchivados.textContent = "Archivados";

  contenedorBotones.appendChild(btnTarea);
  contenedorBotones.appendChild(btnArchivados);

  // --- Tarjeta de información ---
  let tarjeta = document.createElement('div');
  tarjeta.className = "tarjeta-informacion";

  let spanEstado = document.createElement('span');
  spanEstado.className = "estado";
  spanEstado.textContent = estado;

  let h3Titulo = document.createElement('h3');
  h3Titulo.className = "titulo-tarea";
  h3Titulo.textContent = titulo;

  let pDescripcion = document.createElement('p');
  pDescripcion.className = "descripcion-tarea";
  pDescripcion.textContent = descripcion;

  let textoIntegrantes = document.createElement('p');
  textoIntegrantes.textContent = "Integrantes";

  let contenedorIntegrantes = document.createElement('div');
  contenedorIntegrantes.className = "contenedor-integrantes";

  if (Array.isArray(integrantes)) {
    integrantes.forEach(integrante => {
      let spanEmoji = document.createElement('span');
      spanEmoji.className = "emoji-integrante";
      spanEmoji.textContent = integrante;
      contenedorIntegrantes.appendChild(spanEmoji);
    });
  }

  // Contenedor para el formulario y para las tareas archivadas
  let contenedorFormulario = document.createElement('div');
  contenedorFormulario.className = "contenedor-formulario";

  let contenedorArchivados = document.createElement('div');
  contenedorArchivados.className = "contenedor-archivados";

  // Función para cargar tareas archivadas (ejemplo: estado == "Completado")
  function cargarArchivadas() {
    contenedorArchivados.innerHTML = ""; // limpiar

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    let archivadas = tareas.filter(t => t.estado.toLowerCase() === "completado");

    if (archivadas.length === 0) {
      contenedorArchivados.textContent = "No hay tareas archivadas.";
      return;
    }

    archivadas.forEach((tareaData, index) => {
      let tareaElemento = tarea(
        index + 1,
        tareaData.titulo,
        tareaData.descripcion,
        tareaData.estado,
        tareaData.fechaAsignacion,
        tareaData.fechaEntrega,
        tareaData.listaIntegrantes || []
      );
      contenedorArchivados.appendChild(tareaElemento);
    });
  }

  // Toggle formulario al hacer clic en + tarea
  btnTarea.addEventListener('click', () => {
    // Limpiar archivados si están visibles
    contenedorArchivados.innerHTML = "";

    if (contenedorFormulario.children.length > 0) {
      contenedorFormulario.innerHTML = "";
    } else {
      const form = formulario();

      // Cada vez que se guarda una tarea, actualizar lista si quieres (aquí solo console.log)
      form.addEventListener("submit", () => {
        console.log("Nueva tarea guardada");
        // Aquí podrías emitir evento o llamar función para refrescar lista tareas
      });

      contenedorFormulario.appendChild(form);
    }
  });

  // Mostrar tareas archivadas al hacer clic
  btnArchivados.addEventListener('click', () => {
    contenedorFormulario.innerHTML = ""; // ocultar formulario
    cargarArchivadas();
  });

  // Ensamblar tarjeta
  tarjeta.appendChild(spanEstado);
  tarjeta.appendChild(h3Titulo);
  tarjeta.appendChild(pDescripcion);
  tarjeta.appendChild(textoIntegrantes);
  tarjeta.appendChild(contenedorIntegrantes);

  // Ensamblar componente principal
  divInformacion.appendChild(contenedorBotones);
  divInformacion.appendChild(tarjeta);
  divInformacion.appendChild(contenedorFormulario);
  divInformacion.appendChild(contenedorArchivados);

  return divInformacion;
}
