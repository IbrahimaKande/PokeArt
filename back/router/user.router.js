module.exports = app =>{
    const user = require("../controllers/userController");

    var router = require("express").Router();

    router.post('/',user.create);
    router.get('/:email',user.findOne);

    app.use('/auth',router)
}