export function tarea(
  indice = 0,
  titulo = "Sin título",
  descripcion = "Sin descripción",
  estado = "Pendiente",
  fechaAsignacion = "Sin fecha",
  fechaEntrega = "Sin fecha",
  listaIntegrantes = []
) {
  const divItem = document.createElement('div');
  divItem.className = "item-tarea";

  // Número de tarea
  const divNumero = document.createElement('div');
  divNumero.className = "tarea-numero";
  divNumero.textContent = `#${indice}`;

  // Título
  const divTitulo = document.createElement('div');
  divTitulo.className = "tarea-titulo";
  divTitulo.textContent = titulo;

  // Descripción
  const divDescripcion = document.createElement('div');
  divDescripcion.className = "tarea-descripcion";
  divDescripcion.textContent = descripcion;

  // Estado
  const spanEstado = document.createElement('span');
  const estadoClase = estado.toLowerCase().replace(/\s+/g, '-'); // ejemplo: "En progreso" → "en-progreso"
  spanEstado.className = `tarea-estado tarea-estado-${estadoClase}`;
  spanEstado.textContent = estado;

  // Fecha de asignación
  const fechaAsig = document.createElement('div');
  fechaAsig.className = "tarea-fecha-asignacion";
  fechaAsig.textContent = `Asignada: ${fechaAsignacion}`;

  // Fecha de entrega
  const fechaEnt = document.createElement('div');
  fechaEnt.className = "tarea-fecha-entrega";
  fechaEnt.textContent = `Entrega: ${fechaEntrega}`;

  // Integrantes
  const divIntegrantes = document.createElement('div');
  divIntegrantes.className = "tarea-integrantes";

  if (Array.isArray(listaIntegrantes)) {
    listaIntegrantes.forEach((emoji) => {
      const spanEmoji = document.createElement('span');
      spanEmoji.className = "tarea-integrante";
      spanEmoji.textContent = emoji;
      divIntegrantes.appendChild(spanEmoji);
    });
  }

  // Botón de eliminar
  const btnEliminar = document.createElement('button');
  btnEliminar.className = "tarea-eliminar";
  btnEliminar.textContent = "🗑️";
  // Aquí puedes añadir el evento click para eliminar si lo deseas

  // Ensamblar el componente
  divItem.appendChild(divNumero);
  divItem.appendChild(divTitulo);
  divItem.appendChild(divDescripcion);
  divItem.appendChild(spanEstado);
  divItem.appendChild(fechaAsig);
  divItem.appendChild(fechaEnt);
  divItem.appendChild(divIntegrantes);
  divItem.appendChild(btnEliminar);

  return divItem;
}
