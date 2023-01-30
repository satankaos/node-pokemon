const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medallasSchema = new Schema({
    nombre: String,
    ciudad: String,
    gimnasio:String
})

//Creamos el modelo
const Entrenador = mongoose.model('dbmedallas', medallasSchema, "medallas");

module.exports = Entrenador;
