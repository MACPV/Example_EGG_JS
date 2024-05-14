import { Area } from "/area.mjs";
import { Perimetro } from "/perimeter.mjs";
import { DatosRectangulo } from "/rectangleData.js";




const tableBody = document.getElementById("tbody");

console.log(DatosRectangulo);

const rectangulos = DatosRectangulo;

console.log(rectangulos);



function Tabla() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    DatosRectangulo.forEach((rectangulo, indice) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>rectangulo-${indice+1}</td>
        <td>${rectangulo.base}</td>
        <td>${rectangulo.altura}</td>
        <td>${Perimetro(rectangulo)}</td>
        <td>${Area(rectangulo)}</td>`;
        tbody.appendChild(tr);
    });


}
Tabla();