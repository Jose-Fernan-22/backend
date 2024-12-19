const mongoose = require('mongoose');

const PlatilloSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    ingredientes: {
        type: [String],
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Platillo', PlatilloSchema);
