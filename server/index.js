const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const workouts = require('./controllers/workout.js')

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/workouts', workouts.getAll)
app.post('/workouts', workouts.add)

let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));