const {
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
} = require('./funciones')

// Funciones para guaradar entidades
guardarCurso("Base de Datos", "27/04/2023");
guardarAspirante("Elvis Chavez ", "1316611332");
guardarInscripcion("id del cuso existente", "id del aspirante existente", "27/04/2023", "13:50", "30.90");

// Funciones para editar entidades 

editarCurso("id del curso a editar", "Sitemas Digitales", "23/02/2023");
editarAspirante("id del aspirante a editar", "Samantha Oveido", "1321458778");
editarInscripcion("id de la inscripcion a editar", "id del curso", "id del aspirante", "23/02/2023", "14:20", "25.90");

// Funciones para eliminar entidades
eliminarCurso("id del curso que desea elimianr");
eliminarAspirante("id del aspirante que desea eliminar");
eliminarInscripcion("id de la inscripcion que desea elimiar");


// Funcion para mostrar los datos registrados por consola
listarCusroForEach();
listarAspirantesWhile();
listarInscripcionesForOf();

