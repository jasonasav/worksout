const Workout = require('../../db/models/workout.js');



exports.getAll = (req, res) => {
    Workout.find()
      .then((data) => res.send(data))
      .catch((err) => res.sendStatus(500).send(err))
  }
  
  exports.add = (req, res) => {
    var data = req.body
    Workout.create(data)
      .then(() => res.sendStatus(201).end())
      .catch((err) => res.sendStatus(500).send(err))
  }

  exports.edit = (req, res) => {
    var first = req.body.firstName;
    var last = req.body.lastName;
    var mail = req.body.email;
    var tshirt = req.body.shirt;
    var skill = req.body.skillLevel;
    var id = req.body._id
    Attendee.updateOne({_id: id}, {firstName: first, lastName: last, email: mail, shirt: tshirt, skillLevel: skill})
      .then(() => res.sendStatus(202))
      .catch(() => res.sendStatus)
  }