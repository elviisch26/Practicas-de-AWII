const {curso, aspirante, inscripcion}= require ('./arrays')

//obtenemos  los curso con el bucle while
function getCursoWhile(){
    var i=0
    console.log('***********************************')
    console.log('***Cusos Disponibles***')
    console.log('***********************************')
   
    while(i < curso.length) {
        console.log(curso[i].descripcion, curso[i].fechaInicio);
        ++i;
    }
}


//obtenemos los aspirantes con ForEach
function getAspirantForEach(){
    console.log('***********************************')
    console.log('********Aspirantes**********')
    console.log('***********************************')
    aspirante.forEach(function(valor){
        console.log(`Nombre: ${valor.nombre}    Identificación: ${valor.identificacion}  `)
    })
}



//obtenemos mediante esta funcion las inscripciones realizadas por los aspirantes con el bucle for
function getInscripcionFor()
{
    console.log('***********************************')
    console.log(` *****Inscripciones *****`)
    console.log('***********************************')
    for (const iterator of inscripcion)
    {
        const curso_aux = curso.find(ele=>ele.id===iterator.id_curso)
        const aspirante_aux = aspirante.find(ele=>ele.id===iterator.id_aspirante)
        console.log(`Se incribe a ${aspirante_aux.nombre} en el curso de ${curso_aux.descripcion} `); 
    }
}

module.exports ={
    getCursoWhile, 
    getAspirantForEach,
    getInscripcionFor
};