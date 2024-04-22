function palindromo(text) {

    const palindro = text.split("").reverse().join("");
    if (text == palindro) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo(prompt("ingrese una palabra")));