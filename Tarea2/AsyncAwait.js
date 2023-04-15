const {aspirante, inscripcion}= require ('./datos')

async function findInscripcionForId(id){
        const ins = inscripcion.find(ins=> ins.id=== id)
        if (!ins)
        {
            const error = new Error();
            error.message=`La inscripción ${id} no fue encontrada`;
            return error;
        }
        return ins;
}
async function findAspiranteForId(id){
        const asp = aspirante.find(asp => asp.id=== id)
        if (!asp)
        {
            const error= new Error();
            error.message=`El aspirante ${id} no fue encontrado`;
            return error;
        }
        return asp;
}

(async ()=>{
    try {
        const ins = await findInscripcionForId(2);
        const asp = await findAspiranteForId(ins.id_aspirante);
        ins.asp= asp;
        console.log(ins);
        
    } catch (error) {
        console.log(error.message);
    }
})();