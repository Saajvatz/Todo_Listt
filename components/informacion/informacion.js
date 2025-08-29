export function informacion(tarea) {
  const div = document.createElement("div");
  div.className = "contenedor-informacion";

  // Botones
  const divBotones = document.createElement("div");
  divBotones.className = "div-botones";

  const btnTarea = document.createElement("button");
  btnTarea.className = "btn-tarea";
  btnTarea.innerText = "+ Tarea";

  const btnArchivados = document.createElement("button");
  btnArchivados.className = "btn-archivados";
  btnArchivados.innerText = "Archivados";

  divBotones.append(btnTarea, btnArchivados);

  // Información de la tarea
  const divInformacion = document.createElement("div");
  divInformacion.className = "div-informacion";

  // Estado
  const divEstado = document.createElement("div");
  divEstado.className = `estado-tarea ${tarea.estado_tarea
    .toLowerCase()
    .replace(" ", "-")}`;
  divEstado.innerText = tarea.estado_tarea;

  // Título
  const titulo = document.createElement("h3");
  titulo.className = "titulo-asignacion";
  titulo.innerText = tarea.nombre;

  // Descripción
  const descripcion = document.createElement("p");
  descripcion.className = "descripcion-asignacion";
  descripcion.innerText = tarea.descripcion;

  // Texto integrantes
  const spanIntegrantes = document.createElement("span");
  spanIntegrantes.className = "texto-integrantes";
  spanIntegrantes.innerText = "Integrantes";

  // Contenedor integrantes
  const divIntegrantes = document.createElement("div");
  divIntegrantes.className = "div-integrantes";

/*   tarea.integrantes.forEach((icono) => {
    const divIcono = document.createElement("div");
    divIcono.className = "integrante";
    divIcono.innerText = icono;
    divIntegrantes.appendChild(divIcono);
  }); */

  divInformacion.append(
    divEstado,
    titulo,
    descripcion,
    spanIntegrantes
  );

  div.append(divBotones, divInformacion);

  return div;
}
