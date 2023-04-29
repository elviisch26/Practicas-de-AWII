const { Curso, Aspirante, Inscripcion } = require('./DatosInscripcion')

//funcion para guardar un curso 
async function guardarCurso(descripcion, fechaInicio) {
  try {
    const nuevoCurso = new Curso({
      descripcion: descripcion,
      fechaInicio: fechaInicio
    });
    const cursoSave = await nuevoCurso.save();
    console.log("Curso guardado con éxito...");
  } catch (error) {
    console.error(error);
  }
}
//funcion para editar un curso 
async function editarCurso(descripcion, fechaInicio) {
  try {
    await Curso.findByIdAndUpdate(id, {
      descripcion: descripcion,
      fechaInicio: fechaInicio
    });
    console.log("El Curso fue editado con éxito...");
  } catch (error) {
    console.error(error);
  }
}
//funcion para eliminar un curso 
async function eliminarCurso(id) {
  try {
    await Curso.findByIdAndDelete(id);
    console.log("El curso fue eliminado con éxito...");
  } catch (error) {
    console.error(error);
  }
}
//funcion para guardar un aspirante
async function guardarAspirante(nombre, identificacion) {
  try {
    const nuevoAspirante = new Aspirante({
      nombre: nombre,
      identificacion: identificacion
    });
    const aspiranteSave = await nuevoAspirante.save();
    console.log("Aspirante guardado con éxito...");
  } catch (error) {
    console.error(error);
  }
}
//funcion para editar un aspireante
async function editarAspirante(nombre, identificacion) {
  try {
    await Aspirante.findByIdAndUpdate(id, {
      nombre: nombre,
      identificacion: identificacion
    });
    console.log("Aspirante editado con éxito...");
  } catch (error) {
    console.log(error);
  }
}
//funcion para eliminar un aspirante
async function eliminarAspirante(id) {
  try {
    await Aspirante.findByIdAndDelete(id);
    console.log("Inscripcion realizada fue eliminada con éxito...");
  } catch (error) {
    console.log(error);
  }
}
//funcion para guardar un inscripcion
async function guardarInscripcion(idCurso, idAspirante, fecha, hora, valorCancelado) {
  try {
    const nuevaInscrpcion = new Inscripcion({
      idCurso: idCurso,
      idAspirante: idAspirante,
      fecha: fecha,
      hora: hora,
      valorCancelado: valorCancelado,

    });
    const inscripcionSave = await nuevaInscrpcion.save();
    console.log("Inscripcion realizada con éxito...");
  } catch (error) {
    console.log(error);
  }
}
//funcion para editar un inscripcion
async function editarInscripcion(idCurso, idAspirante, fecha, hora, valorCancelado) {
  try {
    const incripcionEditadoa = await Inscripcion.findByIdAndUpdate(idAspirante, {
      idCurso: idCurso,
      idAspirante: idAspirante,
      fecha: fecha,
      hora: hora,
      valorCancelado: valorCancelado,
    });
    console.log("Inscripcion realizada editada con éxito...");
  } catch (error) {
    console.error(error);
  }
}
//funcion para eliminar un inscripcion
async function eliminarInscripcion(idInscripcion) {
  try {
    const inscripcionEliminada = await Inscripcion.findByIdAndDelete(idInscripcion);
    console.log("Inscripcion eliminada con éxito...");
  } catch (error) {
    console.error(error);
  }
}

// Funciones para listarr los registros de las entidades creadas

//funcion para listar los Cursos con el ciclo ForEach

async function listarCusroForEach() {
  try {
    const lista = await Curso.find();
    console.log(`--- Curso----`);
    lista.forEach((valor) => {
      console.log(`Descripcion: ${valor.descripcion}`);
      console.log(`Fecha de Inicio: ${valor.fechaInicio}`);
    });
  } catch (error) {
    console.log('Curso no enlistado', error);
  }
}

//Funcion para listar los Aspirantes con el ciclo While

async function listarAspirantesWhile() {
  try {
    const aspirante = await Aspirante.find();
    let i = 0;
    console.log(`---Aspirante---`);
    while (i < aspirante.length) {
      console.log(`Nombre: ${aspirante[i].nombre}`);
      console.log(`Identificacion: ${aspirante[i].identificacion}`);
      i++;
    }
  } catch (error) {
    console.log('Error al enlistar los datos del Aspirante', error);
  }
}

// Funcion para listar las Inscripciones con el ciclo ForOf

async function listarInscripcionesForOf() {
  try {
    const inscripciones = await Inscripcion.find().populate('idCurso idAspirante');
    console.log(`--- Inscripcion ---`);
    for (const inscripcion of inscripciones) {
      console.log(`Id: ${inscripcion._id}`);
      console.log(`Curso: ${inscripcion.idCurso.nombre}`);
      console.log(`Aspirante: ${inscripcion.idAspirante.nombre}`);
      console.log(`Fecha: ${inscripcion.fecha}`);
      console.log(`Hora: ${inscripcion.hora}`);
      console.log(`Valor Cancelado: ${inscripcion.valorCancelado}`);
    }
  } catch (error) {
    console.log('Error al enlistar los datos de las Incripciones..', error);
  }
}
module.exports = {
  guardarCurso,
  editarCurso,
  eliminarCurso,
  guardarAspirante,
  editarAspirante,
  eliminarAspirante,
  guardarInscripcion,
  editarInscripcion,
  eliminarInscripcion,
  listarCusroForEach,
  listarAspirantesWhile,
  listarInscripcionesForOf
};