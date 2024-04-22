function stringIncludes(text, text2) {




    if (text2.includes(text)) {
        return true;
    } else {
        return false;
    }
}

console.log(stringIncludes('he', 'Hello'));
console.log(stringIncludes('he', 'hello world'));