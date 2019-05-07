const Workout = require('../../db/models/workout.js');



exports.getAll = (req, res) => {
    Workout.find()
      .then((data) => res.send(data))
      .catch(() => res.sendStatus(500))
  }
  
  exports.add = (req, res) => {
    var data = req.body
    Workout.create(data)
      .then(() => res.sendStatus(201).end())
      .catch(() => res.sendStatus(500))
  }

