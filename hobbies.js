const enPareja = [
    "peliculas",
    "cocinar",
    "cenar",
    "series",
    "cantar"
];
const conAmigos = [
    "jugar",
    "trabajar",
    "caminar",
    "correr",
    "bailar"
];
const conFamilia = [
    "maraton",
    "descansar",
    "pasear",
    "imitar",
    "dormir"
];

let [enPareja1, enPareja2, enPareja3, enPareja4, enPareja5] = enPareja;
let [conAmigos1, conAmigos2, conAmigos3, conAmigos4, conAmigos5] = conAmigos;
let [conFamilia1, conFamilia2, conFamilia3, conFamilia4, conFamilia5] = conFamilia;

const hobbies = [...conAmigos, ...conFamilia, ...enPareja];

const algunos = [...enPareja.slice(1,  4), ...conAmigos.slice(0,1), ...conFamilia.slice(0,1)]

console.log(algunos);
console.log(hobbies);

console.log(enPareja2);
console.log(conFamilia4);

function templateHobbies(array1, array2, array3) { return `Lo que me gusta hacer es: ${array1} y ${array2} todos los viernes por la tarde, y en la noche ${array3}` };

function printHobbies(array1, array2, array3) {

    const divi = document.getElementById("hobbies-seleccionados");
    this.array1 = array1;
    this.array2 = array2;
    this.array3 = array3;

    const template = templateHobbies(array1, array2, array3);
    divi.innerHTML = template;
    console.log(template);
}

printHobbies(enPareja2, conFamilia4, conAmigos1)