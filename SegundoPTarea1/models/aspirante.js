const {model, Schema} = require('mongoose');

const AspiranteSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del Aspirante es necesario'],
            unique:true
        },
        identificacion:{
            type: Number,
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);
AspiranteSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Aspirante', AspiranteSchema );