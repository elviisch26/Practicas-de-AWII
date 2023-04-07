const curso =[
    {id:1, descripcion:'Redes', fechaInicio:'23/04/2023'},
    {id:2, descripcion:'Programacion', fechaInicio:'31/04/2023'},
    {id:3, descripcion:'Ingles', fechaInicio:'18/04/2023'},
    {id:4, descripcion:'Sistema Operativos', fechaInicio:'20/04/2023'},
    {id:5, descripcion:'Base de datos', fechaInicio:'12/04/2023'}
]


const aspirante =[
    {id:1, nombre:'Leonardo Moreira', identificacion:'1316611332'},
    {id:2, nombre:'Steffy Perez', identificacion:'1314568542'},
    {id:3, nombre:'Dennis Murillo', identificacion:'1785091563'},
    {id:4, nombre:'Luis Cervantes', identificacion:'1452546235'},
    {id:5, nombre:'Samanta Oveido', identificacion:'1315486922'}
]

const inscripcion =[
    {id:1, id_curso:1, id_aspirante:1, fecha:'6/42023', hora:'14:54:05', valorCancelodo:''},
    {id:2, id_curso:1, id_aspirante:2, fecha:'6/42023', hora:'18:15:55', valorCancelodo:''},
    {id:3, id_curso:1, id_aspirante:3, fecha:'6/42023', hora:'11:25:10', valorCancelodo:''},
    {id:4, id_curso:1, id_aspirante:4, fecha:'6/42023', hora:'', valorCancelodo:''},    
    {id:5, id_curso:1, id_aspirante:5, fecha:'6/42023', hora:'', valorCancelodo:''},
]


//Se exportan los arrays para poder utilizarlos en las funciones 
module.exports ={
    curso,
    aspirante,
    inscripcion
};

