import React, { Component } from 'react';
import axios from 'axios';
import Buildworkout from './buildworkout.jsx';
import Workoutlist from './Workoutlist.jsx';

class Checkout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        view: 'create',
        workouts: [],
        pastworksouts: [],
          
      };
      this.submitExercise = this.submitExercise.bind(this);
      this.getExercises = this.getExercises.bind(this);
      this.addExercise = this.addExercise.bind(this);
      
  };

  componentDidMount() {
    this.getExercises();

  }

  getExercises() {
    axios.get('/workouts')
      .then(res => {
        this.setState({
          pastworksouts: res.data,
        });
      });
  }
  

  addExercise(exercise) {
    axios.post('/workouts', exercise)
      .then(() => {
        this.getExercises();
      });
  }

  submitExercise(e) {
    this.setState({ view: 'create', clicked: e })
    // this.setState(prevState => ({
    //   workouts: [ {"name": "object"}, ...prevState.myArray]
    // }))
    
  }


  render() {
    if(this.state.view === 'create') { return (
      <div>
        <div id="app">
          <div className="main">
            <Buildworkout submitExercise={this.submitExercise} addExercise={this.addExercise} />
            <Workoutlist exercises={this.state.pastworksouts}/> 
         </div>
         </div>
      </div>
    )
   } 
  };
};

export default Checkout;
