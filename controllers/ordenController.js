const Orden = require("../models/Orden");

exports.crearOrden = async (req, res) => {
    try {
        let orden = new Orden(req.body);
        await orden.save();
        res.send(orden);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerOrdenes = async (req, res) => {
    try {
        const ordenes = await Orden.find().populate('platillos.platilloId');
        res.json(ordenes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerOrden = async (req, res) => {
    try {
        let orden = await Orden.findById(req.params.id).populate('platillos.platilloId');
        if (!orden) {
            res.status(404).json({ msg: 'No existe la orden' });
        }
        res.json(orden);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.actualizarOrden = async (req, res) => {
    try {
        const { estado } = req.body;
        let orden = await Orden.findById(req.params.id);

        if (!orden) {
            res.status(404).json({ msg: 'No existe la orden' });
        }

        orden.estado = estado;

        orden = await Orden.findByIdAndUpdate(req.params.id, orden, { new: true });
        res.json(orden);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.eliminarOrden = async (req, res) => {
    try {
        let orden = await Orden.findById(req.params.id);
        if (!orden) {
            res.status(404).json({ msg: 'No existe la orden' });
        }

        await Orden.deleteOne({ _id: req.params.id });
        res.json({ msg: 'La orden ha sido eliminada con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
