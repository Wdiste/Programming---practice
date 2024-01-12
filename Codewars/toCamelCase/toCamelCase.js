function toCamelCase(str){
    let strings = str.split(/[\-\_]/);

    for(i = 1; i < strings.length; i++) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].substring(1);
    }

    return strings.join('');
}

console.log(toCamelCase('Cannon-range-mixture-Powder-electricity'));