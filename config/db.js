const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async() => {

    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });
        console.log('BD conectada');

    } catch(error) {
        console.log('Error de conexión a la base de datos:', error.message);
        process.exit(1);//detenemos la app
    }
}
 
module.exports = conectarDB;