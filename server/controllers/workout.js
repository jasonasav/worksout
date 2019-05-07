const Workout = require('../../db/models/workout');



exports.getAll = (req, res) => {
  console.log(req.data)
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
  var names = req.body.name;
  var types = req.body.type;
  var setss = req.body.sets;
  var repss = req.body.reps;
  var weights = req.body.weight;
  var durations = req.body.duration;
  var id = req.body._id
  Workout.updateOne({_id: id}, {name: names, type: types, sets: setss, reps: repss, weight: weights, duration: durations})
    .then(() => res.sendStatus(202))
    .catch(() => res.sendStatus)
}

