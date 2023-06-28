const { response } = require('express');
const { Inscripcion } = require('../models');


const getInscripcion = async (req, res = response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { status: true };

    const [sum, inscripcion] = await Promise.all([
        Inscripcion.countDocuments(query),
        Inscripcion.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        sum,
        inscripcion
    })
}

const getInscripciones = async (req, res = response) => {
    const { id } = req.params
    const inscripcion = await Inscripcion.findById(id);
    res.json(inscripcion);
}
const createInscripciones = async (req, res = response) => {
    const { status, ...body } = req.body;

    const existInscripcion = await Inscripcion.findOne({ body })

    if (existInscripcion) 
    {
        return res.status(400).json({
            msg: `la inscripcion ${ existInscripcion.fecha} ya existe`
        })
    }

    const data = {
        ...body,    }

    const inscripcion = new Inscripcion(data);

    const newInscripcion = await inscripcion.save();
    res.status(201).json(newInscripcion);
}
const updateInscripcion = async (req, res = response) => {
    const { id } = req.params;
    const { status, ...data } = req.body;
    const inscripcioUpdated = await Inscripcion.findByIdAndUpdate(id, data, { new: true })
    res.json(inscripcioUpdated);
}
const deleteIsncripcion = async (req, res = response) => {
    const { id } = req.params;
    const deleteinscripcion = await Inscripcion.findByIdAndUpdate(id, { status: false }, { new: true });
    res.json(deleteinscripcion);
}


module.exports = {
    getInscripcion,
    getInscripciones,
    createInscripciones,
    updateInscripcion,
    deleteIsncripcion
};