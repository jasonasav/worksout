const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const workout = require('./controllers/workout.js')
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/workout', workout.getAll)
app.post('/workout', workout.add)
app.patch('/workout', workout.edit)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});


