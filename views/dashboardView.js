import { footer } from "../components/footer/footerComponent.js";
import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacion.js";

export function dashboard() {


  let dashboard = document.createElement('section');
  dashboard.className = "dashboard";

  dashboard.appendChild(header());

  let seccion1 = document.createElement('section');
  seccion1.className = "seccion-1";
  seccion1.appendChild(tareas());
  seccion1.appendChild(informacion());
  dashboard.appendChild(seccion1);

  dashboard.appendChild(footer());

  return dashboard;
}

document.body.appendChild(dashboard());
