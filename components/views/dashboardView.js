
import { footer } from "../footer/footerComponent.js";
import { header } from "../header/headerComponent.js";
import { tareas } from "../tareas/tareasComponent.js";
import { informacion } from "../informacion/informacion.js";


export function dashboard(){

let dasdhboard = document.createElement('section')    
dasdhboard.className = "dashboard";
   
//header
dasdhboard.appendChild(header());

//seccion
let seccion1 = document.createElement('section');
seccion1.className = "seccion-1"
seccion1.appendChild(tareas());
seccion1.appendChild(informacion());
dasdhboard.appendChild(seccion1);

//footer
dasdhboard.appendChild(footer());




    return dasdhboard;


{ }
document.body.appendChild(dashboard());
 }
