// const mongoose = require('mongoose');

// const workoutSchema = new mongoose.Schema({
//   name: {type: String, required: true},
//   type: {type: String},
//   sets: {type: Number},
//   reps: {type: Number},
//   weight: {type: Number},
//   duration: {type: Boolean, time: Number}
// });

// const Workout = mongoose.model('workout', workoutSchema);

// module.exports = Workout;


const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String},
  sets: {type: String},
  reps: { type: String},
  weight: { type: String},
  duration: {type: String}

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
