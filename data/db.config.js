const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PokeartDB', {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log("MongoDB connected")
    }
});

module.exports = {
    url: "mongodb://localhost:27017/PokeartDB"
};
