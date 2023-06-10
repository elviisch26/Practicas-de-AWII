const { response } = require('express');
const { Curso } = require('../models');

const getCurso = async (req, res = response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { status: true };

    const [sum, cursos] = await Promise.all([
        Curso.countDocuments(query),
        Curso.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        sum,
        cursos
    })
}

const getCursos = async (req, res = response) => {
    const { id } = req.params
    const cursos = await Curso.findById(id);
    res.json(cursos);
}
const createCursos = async (req, res = response) => {
    const { status, ...body } = req.body;

    const existCurso = await Curso.findOne({ descripcion: body.descripcion })

    if (existCurso) {
        return res.status(400).json({
            msg: `El curso ${existAspirante.descripcion} ya existe`
        })
    }

    const data = {
        ...body,
        descripcion: body.descripcion
    }

    const cursos = new Curso(data);

    const newCursos = await cursos.save();
    res.status(201).json(newCursos);
}
const updateCursos = async (req, res = response) => {
    const { id } = req.params;
    const { status, ...data } = req.body;
    const cursoUpdated = await Curso.findByIdAndUpdate(id, data, { new: true })
    res.json(cursoUpdated);
}
const deleteCursos = async (req, res = response) => {
    const { id } = req.params;
    const deleteCurso = await Curso.findByIdAndUpdate(id, { status: false }, { new: true });
    res.json(deleteCurso);
}


module.exports = {
    getCurso,
    getCursos,
    createCursos,
    updateCursos,
    deleteCursos
};

