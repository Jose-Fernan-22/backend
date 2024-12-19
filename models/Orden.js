const mongoose = require('mongoose');

const OrdenSchema = mongoose.Schema({
    mesaId: {
        type: String,
        required: true
    },
    platillos: [{
        platilloId: { type: mongoose.Schema.Types.ObjectId, ref: 'Platillo' },
        cantidad: { type: Number, required: true }
    }],
    estado: {
        type: String,
        required: true,
        enum: ['pendiente', 'entregado', 'cancelado'],
        default: 'pendiente'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Orden', OrdenSchema);
