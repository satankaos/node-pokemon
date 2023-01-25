const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrenadorSchema = new Schema({
    nombre: String,
    Bio: String,
    Ciudad: String,
    Lista_Pokemon: String,
    Lista_objetos:String
})

//Creamos el modelo
const Entrenador = mongoose.model('dbentrenador', entrenadorSchema, "entrenador");

module.exports = Entrenador;
