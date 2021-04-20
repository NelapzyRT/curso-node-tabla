const {crearArchivo}= require('./helpers/multiplicaion.js');
const argv= require('./config/yargs');

require('colors');

console.clear();// limpiar la consola antes de ejecutar el programa

console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);



crearArchivo(argv.b, argv.l, argv.h)
.then(archivo => console.log(archivo, "creado".rainbow))
.catch(err => console.log(err));