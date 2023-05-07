const express= require('express')
const cors = require('cors')

const app = express();
const PUERTO = 3000;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public'))

let inscripcion = []

// REST
// get   -> Consultar
app.get('/',(req,res)=>{
    res.status(200).json(inscripcion)
})
// get individual -> Consulta individual
app.get('/:idInscripcion',(req,res)=>{
    // const codigo = req.params.codigo
    const { idInscripcion  } = req.params;
    const inscripcionSelect = inscripcion.filter(p=> p.idInscripcion === idInscripcion)
    if (inscripcionSelect.length>0)
    {
        return res.status(200).send(inscripcionSelect[0])
    }
    res.status(404).send({
        message:'La inscripción con ese id no existe'
    })
})
// post    -> Insertar
app.post('/',(req, res )=>{
    // const body =  req.body
    const { body } =  req;
    inscripcion.push(body)
    res.status(200).send({
        message:'Inscripción insertada correctamente',
        response: body
    })

})

// put or patch   -> Actualizar
app.put('/', (req,res)=>{
    const { idInscripcion, idCurso, idAspirante, fecha, hora, valorCancelado} =  req.body
    const inscripciones =  inscripcion.filter(p=> p.idInscripcion=== idInscripcion)[0] || {}
    inscripciones.idCurso = idCurso;
    inscripciones.idAspirante = idAspirante;
    inscripciones.fecha = fecha;
    inscripciones.hora = hora;
    inscripciones.valorCancelado = valorCancelado;
    res.status(200).send({
        message:'Inscripción modificada con éxito',
        response: inscripciones
    })
})
// delete   -> Eliminar
app.delete('/:idInscripcion',(req, res)=>{
    const { idInscripcion  } = req.params;
    inscripcion =  inscripcion.filter(p=> p.idInscripcion !== idInscripcion)
    res.status(200).send({
        message:`Inscripción con el id ${idInscripcion} fue eliminada`
    })
})

app.listen(PUERTO, ()=>{
    console.log(`SErver running http://localhost:${PUERTO}`);
})