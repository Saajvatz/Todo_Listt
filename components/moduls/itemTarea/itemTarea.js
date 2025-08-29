
export function tarea(
  indice,
  titulo,
  estado,
  fechaAs,
  fechaEn,
  listaIntegrantes = []
) {
  // Contenedor principal
  const div = document.createElement("div");
  div.className = "tarea";

  // Número de tarea
  const divNumero = document.createElement("div");
  divNumero.className = "div-numero";
  divNumero.textContent = indice;
  div.appendChild(divNumero);

  // Título
  const tituloTarea = document.createElement("h3");
  tituloTarea.className = "tarea-titulo";
  tituloTarea.textContent = titulo;
  div.appendChild(tituloTarea);

  // Estado
  const divEstado = document.createElement("div");
  divEstado.className = `tarea-estado ${estado
    .toLowerCase()
    .replace(" ", "-")}`;
  divEstado.textContent = estado;
  div.appendChild(divEstado);

  // Fecha asignación
  const fechaAsignacion = document.createElement("span");
  fechaAsignacion.className = "tarea-fecha";
  fechaAsignacion.textContent = fechaAs;
  div.appendChild(fechaAsignacion);

  // Fecha entrega
  const fechaEntrega = document.createElement("span");
  fechaEntrega.className = "tarea-fecha";
  fechaEntrega.textContent = fechaEn;
  div.appendChild(fechaEntrega);

  // Integrantes
  const divIntegrantes = document.createElement("div");
  divIntegrantes.className = "tarea-integrantes";
  listaIntegrantes.forEach((integrante) => {
    const icono = document.createElement("div");
    icono.className = "integrante-icono";
    icono.textContent = integrante; // si tienes imágenes aquí puedes cambiarlo
    divIntegrantes.appendChild(icono);
  });
  div.appendChild(divIntegrantes);

  // Botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.className = "tarea-eliminar";
  btnEliminar.setAttribute("aria-label", "Eliminar tarea");
  btnEliminar.textContent = "❌";
  div.appendChild(btnEliminar);

  return div;
}
