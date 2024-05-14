
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

export const DatosRectangulo = [rectangulo1, rectangulo2, rectangulo3, rectangulo4];