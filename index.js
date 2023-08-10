const listNumeros =  [23, 24, 25, 27,28];

const lisTotal = listNumeros.reduce((suma , numeros) => suma + numeros, 0);

console.log("La suma total es:", lisTotal);