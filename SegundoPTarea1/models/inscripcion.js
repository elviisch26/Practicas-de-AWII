const { model, Schema } = require('mongoose');

const InscripcionSchema = Schema(
    {
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

module.exports = model('Aspirante', InscripcionSchema);