function titleFormat(text) {
    if (text == "") {
        return "vacio";
    } else {
        const palabra = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        console.log(palabra);
        return palabra.length;
    }
}
alert(titleFormat(prompt("ingrese una palabra")));
