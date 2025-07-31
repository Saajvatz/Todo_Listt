export function footer() {
  let footer = document.createElement('footer');
  footer.className = 'footer';

  let linea = document.createElement('hr');
  linea.className = 'footer-line';
  footer.appendChild(linea);

  let texto = document.createElement('p');
  texto.className = 'footer-text';

  let enlace = document.createElement('a');
  enlace.href = 'https://github.com/Saajvatz/todo_list';
  enlace.textContent = 'GitHub';
  enlace.target = '_blank';

  texto.appendChild(enlace);
  footer.appendChild(texto);

  return footer;
}
