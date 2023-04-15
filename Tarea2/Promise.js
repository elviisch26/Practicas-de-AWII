const {aspirante, inscripcion}= require ('./datos')

function findInscripcionForId(id){
    return new Promise((resolve, reject)=>{
        const ins = inscripcion.find(ins=> ins.id=== id)
        if (!ins)
        {
            const error = new Error();
            error.message=`La inscripción ${id} no fue encontrada`;
            reject(error)
        }
        resolve(ins)
    })
}
function findAspiranteForId(id){
    return new Promise((resolve, reject)=>{
        const aspi = aspirante.find(aspi => aspi.id=== id)
        if (!aspi)
        {
            const error= new Error();
            error.message=`El aspirante ${id} no fue encontrada`;
            reject(error);
        }
        resolve(aspi)
    })
}


findInscripcionForId(2)
.then((ins)=>{
    console.log(ins);
    return findAspiranteForId(ins.id_aspirante)
})
.then((aspi)=>{
    console.log(aspi);
})
.catch((error)=>{
    console.log(error.message);
})