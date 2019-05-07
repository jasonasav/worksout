import React, { Component } from 'react';
import axios from 'axios';
import Buildworkout from './buildworkout.jsx';
import Workoutlist from './Workoutlist.jsx';
import Exercise from './exercise.jsx';

class Checkout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        view: 'create',
        workouts: [],
        pastworksouts: [],
        clicked: []
          
      };
      this.submitExercise = this.submitExercise.bind(this);
      this.getExercises = this.getExercises.bind(this);
      this.addExercise = this.addExercise.bind(this);
      this.clickExercise = this.clickExercise.bind(this);
      this.changeView = this.changeView.bind(this);
      this.updateExercise = this.updateExercise.bind(this);

      
  };

  componentDidMount() {
    this.getExercises();

  }


  getExercises () {
    axios.get('/workout')
      .then( res => this.setState({pastworksouts: res.data}))
      .catch((err) => {console.log(err)}) 
    }

  addExercise (exercise) {
      axios.post('/workout', exercise)
        .then( () => this.getExercises())
        .catch((err) => {console.log('derrrrrrrr')}) 
      }
  
  updateExercise(exercise) {
    axios.patch('/workout', exercise)
    .then( () => this.getExercises())
    .catch((err) => {console.log('derrrrrrrr')}) 
    }

  clickExercise(e) {
      this.setState({ view: 'update', clicked: e })
        
  }
    
  

  submitExercise(e) {
    this.setState({ view: 'update', clicked: e })

    
  }

  changeView() {
    this.setState({view: 'create'})
  }


  render() {
    if(this.state.view === 'create') { return (
      <div>
        <div id="app">
          <div className="main">
            <Buildworkout submitExercise={this.submitExercise} addExercise={this.addExercise} />
            <Workoutlist clickExercise={this.clickExercise} exercises={this.state.pastworksouts}/> 
         </div>
         </div>
      </div>
    )
   } 
   if(this.state.view === 'update') { return (
    <div>
      <div id="app">
        <div className="main">
          <Exercise view={this.changeView} exercise={this.state.clicked} updateExercise={this.updateExercise} submitExercise={this.submitExercise} addExercise={this.addExercise} />
          <Workoutlist clickExercise={this.clickExercise} exercises={this.state.pastworksouts}/> 
       </div>
       </div>
    </div>
  )
 } 
  };
};

export default Checkout;
