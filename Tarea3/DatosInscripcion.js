const mongoose = require('mongoose');

//cadena de conexion para conectarnos a la base de datos

const conexionBD = "mongodb+srv://superuleam:Leoj260904@cluster0.f3ypjbe.mongodb.net/CRUD";

(async () => {
    try {
        const conexion = await mongoose.connect(conexionBD);
    } catch (error) {
        console.log(error);
    }
})()


// Declaracion de los modelos 

// entidad curso 
const Curso = mongoose.model("Curso", {
    descripcion: String,
    fechaInicio: String,
});

// entidad aspirante 
const Aspirante = mongoose.model("Aspirante", {
    nombre: String,
    identificacion: String,
});

// entidad inscripcion
const Inscripcion = mongoose.model("Inscripcion", {
    idCurso: { type: mongoose.Types.ObjectId, ref: "Curso" },
    idAspirante: { type: mongoose.Types.ObjectId, ref: "Aspirante" },
    fecha: String,
    hora: String,
    valorCancelado: String,
});

// Se exportan los modelos para despues utilizarlos
module.exports = {
    Curso,
    Aspirante,
    Inscripcion,
};