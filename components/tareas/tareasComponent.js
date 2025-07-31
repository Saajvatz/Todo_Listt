import { tarea } from "../moduls/itemTarea/itemTarea.js";
const tareasDb = [
  { titulo: "Hola" },
  { titulo: "Hola 2" },
  { titulo: "Hola 3" }
];

export function tareas(){
    let div = document.createElement('div');
    div.className = "tareas";

    tareasDb.forEach(({ titulo }) => {
        div.appendChild(tarea(titulo));
    });

    return div;
}
