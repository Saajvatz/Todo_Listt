import { tarea } from "../moduls/itemTarea/itemTarea.js";

export function tareas(tareasDb) {
    console.log(tareasDb);
    let div = document.createElement('div');
    div.className = "div-tareas";

    tareasDb.forEach((e) => {
        div.appendChild(
            tarea(
                1,
                e.nombre,
                e.estado_tarea,
                e.fecha_asignada,
                e.fecha_entrega,
                []
            )
        );
    });

    return div;
}
