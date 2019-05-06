const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  cardio: {type: Boolean, time: Number},
  stretch: {type: Boolean, time: Number},
  caloriesConsumed: {type: Number},
  exerciseOne: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
             sets: Number,
             reps: Number,
             weight: Number
             },
  exerciseTwo: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
             sets: Number,
             reps: Number,
             weight: Number
             },
  exerciseThree: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
             sets: Number,
             reps: Number,
             weight: Number
             },
  exerciseFour: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
             sets: Number,
             reps: Number,
             weight: Number
             },
  exerciseFive: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
             sets: Number,
             reps: Number,
             weight: Number
             },
  exerciseSix: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
             sets: Number,
             reps: Number,
             weight: Number
             },
  exerciseSeven: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
             sets: Number,
             reps: Number,
             weight: Number
             },
  exerciseEight: {type: String, enum: [`Chest`, `Core`, `Back`, `Legs`, `Arms`, `Other`],
             sets: Number,
             reps: Number,
             weight: Number
             },
  excessExercise: {type: String}
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;