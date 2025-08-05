export function formulario() {
  let form = document.createElement('form');
  form.className = "formulario-tarea";
  form.id = "formulario-tarea"; // Opcional, para seleccionarlo externamente

  // Crear campos
  let inputTitulo = document.createElement('input');
  inputTitulo.type = "text";
  inputTitulo.placeholder = "Título de la tarea";
  inputTitulo.name = "titulo";
  inputTitulo.required = true;

  let textareaDescripcion = document.createElement('textarea');
  textareaDescripcion.placeholder = "Descripción de la tarea";
  textareaDescripcion.name = "descripcion";
  textareaDescripcion.required = true;

  let inputFechaAsignacion = document.createElement('input');
  inputFechaAsignacion.type = "text";
  inputFechaAsignacion.readOnly = true;
  inputFechaAsignacion.name = "fechaAsignacion";
  inputFechaAsignacion.value = new Date().toISOString().split('T')[0];

  let selectEstado = document.createElement('select');
  selectEstado.name = "estado";
  ["Completado", "Pendiente", "Incompleto"].forEach((estado) => {
    let option = document.createElement('option');
    option.value = estado;
    option.textContent = estado;
    selectEstado.appendChild(option);
  });

  let inputFechaEntrega = document.createElement('input');
  inputFechaEntrega.type = "date";
  inputFechaEntrega.name = "fechaEntrega";
  inputFechaEntrega.required = true;

  let botonEnviar = document.createElement('button');
  botonEnviar.type = "submit";
  botonEnviar.textContent = "Guardar tarea";

  // Agregar elementos al formulario
  form.appendChild(inputTitulo);
  form.appendChild(textareaDescripcion);
  form.appendChild(inputFechaAsignacion);
  form.appendChild(selectEstado);
  form.appendChild(inputFechaEntrega);
  form.appendChild(botonEnviar);

  // Evento submit para guardar en localStorage
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nuevaTarea = {
      titulo: inputTitulo.value,
      descripcion: textareaDescripcion.value,
      fechaAsignacion: inputFechaAsignacion.value,
      estado: selectEstado.value,
      fechaEntrega: inputFechaEntrega.value,
    };

    // Obtener tareas existentes
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

    // Agregar nueva tarea
    tareasGuardadas.push(nuevaTarea);

    // Guardar de nuevo en localStorage
    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));

    console.log("Tarea guardada:", nuevaTarea);

    // Reset form y actualizar fecha asignacion al día actual
    form.reset();
    inputFechaAsignacion.value = new Date().toISOString().split('T')[0];
  });

  return formulario;
}
