
const fs= require('fs'); //Requerir el paquete File System, para grabar un archivo de texto
require('colors');// libresria para cambiar colores en la consola


const crearArchivo = async (numero, listar, hasta) =>{
    let salida='';

    try{
        for(let i=1; i<=hasta; i++){
            salida +=`${numero} ${'X'.blue} ${i} ${'='.blue}${numero *i }\n`;
        }
        // writeFile => sirve para escribir un archivo de texto
        // recibe como primer parametro la ruta en donde se va a guardar
        // 2. recibe la informacion
        //3. la funcion  que se ejecutara cuando se realice la acción
        fs.writeFile(`./salida/tabla-${numero}.txt`, salida, (err)=>{
            if(err ) throw err;
        })

        if(listar){
            console.log(salida);
        }
    }catch (err){
       throw err;
    }
}

module.exports = {
    crearArchivo
}