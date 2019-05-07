const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String},
  sets: {type: Number},
  reps: {type: Number},
  weight: {type: Number},
  duration: {type: Boolean, time: Number}
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
// const workoutSchema = new mongoose.Schema({
//   startDate: {type: Date, required: true},
//   endDate: {type: Date, required: true},
//   stretch: {type: Boolean, time: Number},
//   cardio: {type: Boolean, time: Number},
//   exerciseOne: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
//              sets: Number,
//              reps: Number,
//              weight: Number
//              },
//   exerciseTwo: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
//              sets: Number,
//              reps: Number,
//              weight: Number
//              },
//   exerciseThree: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
//              sets: Number,
//              reps: Number,
//              weight: Number
//              },
//   exerciseFour: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
//              sets: Number,
//              reps: Number,
//              weight: Number
//              },
//   exerciseFive: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
//              sets: Number,
//              reps: Number,
//              weight: Number
//              },
//   exerciseSix: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
//              sets: Number,
//              reps: Number,
//              weight: Number
//              },
//   exerciseSeven: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
//              sets: Number,
//              reps: Number,
//              weight: Number
//              },
//   exerciseEight: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
//              sets: Number,
//              reps: Number,
//              weight: Number
//              },
//   excessExercise: {type: String}
// });

