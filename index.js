const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
//Creamos el servidor
const app = express();


// Conectamos a la BD, asegurate de que mongo compas este ejecutandose(conectado) primero 
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
/* */
app.use('/api/platillos', require('./routes/platillo'));
app.use('/api/clientes', require('./routes/cliente'));
app.use('/api/ordenes', require('./routes/orden'));
app.use('/api/categorias', require('./routes/categoria'));

//Definimos ruta principal
//app.get('/', (req, res) => {
//  res.send('Hola soy jose');
//})

app.listen(4000, () => {
  console.log('Estoy corriendo el servidor!!');
})