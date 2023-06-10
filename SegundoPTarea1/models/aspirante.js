const {model, Schema} = require('mongoose');

const AspiranteSchema = Schema(
    {
        nombre:{
            type: String,
            unique:true
        },
        identificacion:{
            type: Number,
            unique
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