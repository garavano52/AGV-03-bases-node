// Desde la consola se pone el comando: node app.Ej4.js --base=5  (Retornará las tablas de lo que se pasa por parámetro.)
// Como el archivo package.json tiene en el archivo package.json lo siguiente ["base3": "node app.Ej4.js --base=3"]

// Con el comnado: npm init => Se crea el archivo package.json
// Con: npm install nodemon --save-dev  ( Para instalar una dependencia de desarrollo.)
// Con: npm uninstall nodemon           ( Para desinstalar una dependencia. En este caso nodemon)
// Con  npm i colors@1.0.0              ( Para instalar una versión específica en node.) 

const { crearArchivo } = require('./helpers/multiplicar');
const  argv = require('yargs').argv;

console.clear();

console.log(process.argv)                      // Si ejecutamos [ node app.Ej4.js --base=5 ] lo agrega como parametro.
const [ , , arg3 = 'base=5'] = process.argv;   // Desestructuración de arreglo. Tomo el 3er argumento
const [ , base = 5] = arg3.split('=')          // Retornaría [ '--base', '3' ] y lo deestructuramos.
console.log(base)                              // Imprimo 3° argumento. 

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err  => console.log(err) )
