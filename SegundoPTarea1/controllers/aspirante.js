const { response } = require('express');
const{ Aspirante } = require('../models');

const getAspirante = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, aspirantes ] = await Promise.all([
        Aspirante.countDocuments(query),
        Aspirante.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      aspirantes
    })
}

const getAspirantes = async (req, res= response)=>{
    const {id} = req.params
    const aspirante=  await Aspirante.findById(id);
    res.json(aspirante);
}
const createAspirantes = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existAspirante =  await Aspirante.findOne({nombre: body.nombre})

    if (existAspirante)
    {
        return res.status(400).json({
            msg:`El aspirante ${ existAspirante.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre
    }

    const aspirante = new Aspirante(data);

    const newAspirante =  await aspirante.save();
    res.status(201).json(newAspirante);
}
const updateAspirante = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const aspiranteUpdated =  await Aspirante.findByIdAndUpdate(id,data, {new: true} )
    res.json(aspiranteUpdated);
}
const deleteAspirante =  async (req, res= response)=>{
    const {id} = req.params;
    const deleteAspirante =  await Aspirante.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deleteAspirante);
}


module.exports = {
    getAspirante,
    getAspirantes,
    createAspirantes,
    updateAspirante,
    deleteAspirante
};

