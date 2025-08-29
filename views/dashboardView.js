import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacion.js";

export async function dashboard() {
    try {
        // contenedor principal
        let contenedor = document.createElement('div');
        contenedor.className = "dashboard";

        // header
        contenedor.appendChild(header());

        // Sección1
        let seccion1 = document.createElement('section');
        seccion1.className = "seccion-1";
        seccion1.appendChild(tareas(tareasDb));
        seccion1.appendChild(informacion(tareasDb[0]));
        contenedor.appendChild(seccion1);

        // footer
        contenedor.appendChild(footer());

        return contenedor;
    } catch (error) {
        console.error("error:", error);
    }
}

dashboard().then(elemento => {
    document.body.appendChild(elemento);
});
