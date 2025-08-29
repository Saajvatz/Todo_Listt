export function header(tareasPendientes = 0, usuarioEmoji = "🧐") {
  const header = document.createElement("header");

  // Título
  const h1 = document.createElement("h1");
  h1.textContent = "✏️ Todo-List";
  header.appendChild(h1);

  // Sección tareas activas
  const divTareas = document.createElement("div");
  divTareas.className = "div-tareas-activas";

  const spanTexto = document.createElement("span");
  spanTexto.textContent = "Pendientes";

  const spanNumero = document.createElement("span");
  spanNumero.className = "numero-tareas";
  spanNumero.textContent = tareasPendientes;

  divTareas.append(spanTexto, spanNumero);
  header.appendChild(divTareas);

  // Avatar usuario
  const divLogoUsuario = document.createElement("div");
  divLogoUsuario.className = "div-logo-usuario";
  divLogoUsuario.textContent = usuarioEmoji;

  header.appendChild(divLogoUsuario);

  return header;
}
