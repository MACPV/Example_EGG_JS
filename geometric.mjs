import { Area } from "/area.mjs";
import { Perimetro } from "/perimeter.mjs";




const tableBody = document.getElementById("tbody");

function Rectangulo(base, altura) {
    this.base = +base;
    this.altura = +altura;
}




const rectangulo1 = new Rectangulo(10, 8);
const rectangulo2 = new Rectangulo(5, 4);
const rectangulo3 = new Rectangulo(3, 6);
const rectangulo4 = {
    base: 10,
    altura: 8
}

const rectangulos = [rectangulo1, rectangulo2, rectangulo3, rectangulo4];

console.log(rectangulo1);
console.log(rectangulo2);
console.log(rectangulo3);
console.log(rectangulo4);
console.log(rectangulos);


console.log(Area(rectangulo1));
console.log(Perimetro(rectangulo1));
console.log(Area(rectangulo2));
console.log(Perimetro(rectangulo2));
console.log(Area(rectangulo3));
console.log(Perimetro(rectangulo3));
console.log(Area(rectangulo4));
console.log(Perimetro(rectangulo4));

function Tabla() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    rectangulos.forEach((rectangulo, indice) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>rectangulo-${indice+1}</td>
        <td>${rectangulo.base}</td>
        <td>${rectangulo.altura}</td>
        <td>${Area(rectangulo)}</td>
        <td>${Perimetro(rectangulo)}</td>`;
        tbody.appendChild(tr);
    });


}
Tabla();