const mongoose = require('mongoose');

var pokemonSchema = new mongoose.Schema({
    name:{
        type: String
    },
    type:{
        type: String
    },
    attack:{
        type: String
    }
});

mongoose.model('Pokemon', pokemonSchema);