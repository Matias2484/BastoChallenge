const { Schema, model } = require('mongoose');

//Scheman Animal
const AnimalSchema = Schema({
    
  
    idSenasa: {
        type: String,
        required: true
    },
    tipoAnimal:{
        type: String,
        required: true
    },
    peso:{
        type: String,
        required: true
    },
    nacimiento:{
        type: Date,
        required: true
    },
    raza:{
        type: String,
    },
    preñada:{
        type: String,
        required: true
    },
    establecimiento:{
        type: String,
        required: true
    },
    tipoDispositivo:{
        type: String,
        required: true
    },
    numeroDispositivo:{
        type: String,
        required: true
    },
    nombrePotrero:{
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now

    }



});

module.exports= model('Animal', AnimalSchema)