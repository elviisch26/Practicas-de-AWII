const {model, Schema} = require('mongoose');

const CursoSchema = Schema(
    {
        descripcion:{
            type: String,
        },
        fechaInicio:{
            type: String,
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);
CursoSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Curso', CursoSchema );