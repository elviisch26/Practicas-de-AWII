const { model, Schema } = require('mongoose');

const InscripcionSchema = Schema(
    {
        idcurso: {
            type: Schema.Types.ObjectId,
            ref:'Curso',
            required:false
        },
        idaspirante: {
            type: Schema.Types.ObjectId,
            ref:'Aspirante',
            required:false
        },
        fecha: {
            type: Date,
            unique: true
        },
        hora: {
            type: Number,
            unique: true
        },
        valorCancelado: {
            type: String,
            unique: true
        },
        status: {
            type: Boolean,
            default: true,
            required: true
        }

    }
);
InscripcionSchema.methods.toJSON = function () {
    const { __v, status, ...data } = this.toObject();
    return data;
}

module.exports = model('Inscripcion', InscripcionSchema);