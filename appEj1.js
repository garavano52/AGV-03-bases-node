
const fs = require('fs');

console.clear()
console.log('============================');
console.log('======= Tabla del 5 ========');
console.log('============================');

const base = 7;
let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `${ base } x ${ i } = ${ base * i } \n`;
}

fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`Tabla-${ base } .txt creado.`);
} )

console.log(salida);