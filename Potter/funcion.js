const {datos} =require ('./arrays')

function getDatosForEach(){
    console.log('***********************************')
    console.log('********Datos**********')
    console.log('***********************************')
    datos.forEach(function(valor){
        console.log(`
        Nombre: ${valor.nombre}    
        Telefono: ${valor.telefono}
        Correo: ${valor.correo}  
        Especialidad: ${valor.especializacion}
        Id Usuario: ${valor['id usuario']}
        Id Cita: ${valor['id cita medica']}`)
    })
}
function getDatosWhile() {
    console.log('***********************************');
    console.log('********Datos**********');
    console.log('***********************************');
    
    let i = 0;
    while (i < datos.length) {
        const valor = datos[i];
        console.log(`
        Nombre: ${valor.nombre}    
        Telefono: ${valor.telefono}
        Correo: ${valor.correo}  
        Especialidad: ${valor.especializacion}
        Id Usuario: ${valor['id usuario']}
        Id Cita: ${valor['id cita medica']}`);
        i++;
    }
}
function getDatosFor() {
    console.log('***********************************');
    console.log('********Datos**********');
    console.log('***********************************');
    
    for (let i = 0; i < datos.length; i++) {
        const valor = datos[i];
        console.log(`
        Nombre: ${valor.nombre}    
        Telefono: ${valor.telefono}
        Correo: ${valor.correo}  
        Especialidad: ${valor.especializacion}
        Id Usuario: ${valor['id usuario']}
        Id Cita: ${valor['id cita medica']}`);
    }
}
module.exports ={ 
    getDatosForEach,
    getDatosFor,
    getDatosWhile
};