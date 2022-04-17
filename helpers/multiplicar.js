const fs = require('fs');
const colors = require('colors');

// NOTA: La idea era devolver una promesa. Se pudo hacer con new promise (Resolve, Reject) y retornarla. 
// Pero convenía async que ya transforma la función en algo que retorna una promesa.

const crearArchivo = async( base = 5, lista = false, hasta = 10) => {

    try {
    
        let salida  = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida  += `${ base } x ${ i } = ${ base * i } \n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i } \n`;
        }
        
        if(lista) {
            console.log('============================'.green);
            console.log('======= Tabla del: '.green, colors.blue(base));
            console.log('============================'.green);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida); 
    
        return `Tabla-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }
    

}

module.exports = {
    crearArchivo        // crearArchivo: crearArchivo  (Al ser igual la propiedad se abrevia)   
}