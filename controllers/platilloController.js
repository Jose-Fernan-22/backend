const Platillo = require("../models/Platillo");

exports.crearPlatillo = async (req, res) => {
    try {
        let platillo = new Platillo(req.body);
        await platillo.save();
        res.send(platillo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerPlatillos = async (req, res) => {
    try {
        const platillos = await Platillo.find();
        res.json(platillos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerPlatillo = async (req, res) => {
    try {
        let platillo = await Platillo.findById(req.params.id);
        if (!platillo) {
            res.status(404).json({ msg: 'No existe el platillo' });
        }
        res.json(platillo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.actualizarPlatillo = async (req, res) => {
    try {
        const { nombre, ingredientes, precio, categoria } = req.body;
        let platillo = await Platillo.findById(req.params.id);

        if (!platillo) {
            res.status(404).json({ msg: 'No existe el platillo' });
        }

        platillo.nombre = nombre;
        platillo.ingredientes = ingredientes;
        platillo.precio = precio;
        platillo.categoria = categoria;

        platillo = await Platillo.findByIdAndUpdate(req.params.id, platillo, { new: true });
        res.json(platillo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.eliminarPlatillo = async (req, res) => {
    try {
        let platillo = await Platillo.findById(req.params.id);
        if (!platillo) {
            res.status(404).json({ msg: 'No existe el platillo' });
        }

        await Platillo.deleteOne({ _id: req.params.id });
        res.json({ msg: 'El platillo ha sido eliminado con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
