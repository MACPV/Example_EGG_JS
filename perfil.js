
const userContainer = document.getElementById("profiles");

class User {
    constructor(nombre, edad, correo, altura, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.altura = altura;
        this.peso = peso;
    }
}

const user1 = new User("Juan", 5, "xj6yU@example.com", 0.75, 75);
console.log(user1)

const user2 = new User("Pedro", 30, "xj6yU@example.com", 1.75, 75);
console.log(user2)

const users = [user1, user2];
console.log(users);

function createUsers(user) {

    if (user.edad < 18 && user.altura < 1.00) {

        return `<h1>Perfil de Usuario</h1>
        <p >Usuario invalido</p>
        <p id="nombre">Nombre: ${user.nombre}</p>
        <p id="edad">Edad: ${user.edad}</p>
        <p id="correo">Correo: ${user.correo}</p>
        <p id="altura">Altura: ${user.altura}</p>
        <p id="peso">Peso: ${user.peso}</p>`;
    }else{

        return `<h1>Perfil de Usuario</h1>
        <p id="nombre">Nombre: ${user.nombre}</p>
        <p id="edad">Edad: ${user.edad}</p>
        <p id="correo">Correo: ${user.correo}</p>
        <p id="altura">Altura: ${user.altura}</p>
        <p id="peso">Peso: ${user.peso}</p>`;
    }
}
function printUser(arrayUser, Id) {
    let userTemplate = "";
    for (const element of arrayUser) {
        userTemplate += createUsers(element);
    }
    const userContainer = document.getElementById(Id);
    userContainer.innerHTML = userTemplate;
}

printUser(users, "profiles")