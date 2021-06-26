const db = require("../models");
const User = db.users;

exports.create = (req, res) => {
  const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
  });

  user.save(user)
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
            err.message || "Erreur de sauvegarde"
      });
  });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findById(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: "Utilisatuer introuvable"});
        }
        else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500)
        .send({message: "Une erreur est survenue"})
    });
};