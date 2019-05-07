import React from 'react';
import axios from 'axios';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id:this.props.exercise._id, name: this.props.exercise.name, type: this.props.exercise.type, 
      sets: this.props.exercise.sets, reps:this.props.exercise.reps, weight:this.props.exercise.weight, duration:this.props.exercise.duration
    
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange (e) { 
      this.setState({[e.target.name]: e.target.value})
    }

  handleUpdate () {
      this.props.updateExercise(this.state);
      // e.preventDefault();
      this.setState({
        _id:'', 
        name: '', 
        type: '', 
        sets:'', 
        reps:'', 
        weight:'', 
        duration:''        
      })
      this.props.view();

  }

  

render() {
  return (
  <div className="workout-form">
    <h2>Record Your Workout</h2> 
    <label>Exercise: 
      <input type="text" name='name' onChange={this.handleChange} value={this.state.name}></input>
    </label>
  <label>
  <select className="exercises" type="text" name='type' value={this.state.type} onChange={this.handleChange} >
    <option value='-'>-</option>
    <option value='Stretch'>Stretch</option>
    <option value='Cardio'>Cardio</option>
    <option value='Chest'>Chest</option>
    <option value='Core'>Core</option>
    <option value='Back'>Back</option>
    <option value='Legs'>Legs</option>
    <option value='Arms'>Arms</option>
    <option value='Other'>Other</option>
  </select> 
  <select className="exercises" type="text" name='sets' value={this.state.sets} onChange={this.handleChange} >
    <option value='-'>-</option>
    <option value='1'>One Sets</option>
    <option value='2'>Two Sets</option>
    <option value='3'>Three Sets</option>
    <option value='4'>Four Sets</option>
    <option value='5'>Five Sets</option>
    <option value='6'>Six Sets</option>
    <option value='7'>Seven Sets</option>
    <option value='8'>Eight Sets</option>
  </select>
  <select className="exercises" type="text" name='reps' value={this.state.reps} onChange={this.handleChange} >
    <option value='-'>-</option>
    <option value='1'>One Reps</option>
    <option value='2'>Two Reps</option>
    <option value='3'>Three Reps</option>
    <option value='4'>Four Reps</option>
    <option value='5'>Five Reps</option>
    <option value='6'>Six Reps</option>
    <option value='7'>Seven Reps</option>
    <option value='8'>Eight Reps</option>
    <option value='9'>Nine Reps</option>
    <option value='10'>Ten Reps</option>
    <option value='11'>Eleven Reps</option>
    <option value='12'>Twelve Reps</option>
    <option value='13'>Thirteen Reps</option>
    <option value='14'>Fourteen Reps</option>
    <option value='15'>Fifteen Reps</option>
    <option value='16'>Sixteen Reps</option>
    <option value='17'>Seventeen Reps</option>
    <option value='18'>Eighteen Reps</option>
    <option value='19'>Nineteen Reps</option>
    <option value='20'>Twenty Reps</option>
    <option value='21'>Twenty-One Reps</option>
    <option value='22'>Twenty-Two Reps</option>
    <option value='23'>Twenty-Three Reps</option>
    <option value='24'>Twenty-Four Reps</option>
    <option value='25'>Twenty-Five Reps</option>
  </select>
  <select className="exercises" type="text" name='weight' value={this.state.weight} onChange={this.handleChange} >
    <option value='-'>-</option>
    <option value='5'>5 lbs</option>
    <option value='10'>10 lbs</option>
    <option value='15'>15 lbs</option>
    <option value='20'>20 lbs</option>
    <option value='25'>25 lbs</option>
    <option value='30'>30 lbs</option>
    <option value='35'>35 lbs</option>
    <option value='40'>40 lbs</option>
    <option value='45'>45 lbs</option>
    <option value='50'>50 lbs</option>
    <option value='55'>55 lbs</option>
    <option value='60'>60 lbs</option>
    <option value='65'>65 lbs</option>
    <option value='70'>70 lbs</option>
    <option value='75'>75 lbs</option>
    <option value='80'>80 lbs</option>
    <option value='85'>85 lbs</option>
    <option value='90'>90 lbs</option>
    <option value='95'>95 lbs</option>
    <option value='100'>100 lbs</option>
    <option value='105'>105 lbs</option>
    <option value='110'>110 lbs</option>
    <option value='115'>115 lbs</option>
    <option value='120'>120 lbs</option>
    <option value='125'>125 lbs</option>
    <option value='150'>150 lbs</option>
    <option value='175'>175 lbs</option>
    <option value='200'>200 lbs</option>
    <option value='225'>225 lbs</option>
    <option value='250'>250 lbs</option>
    <option value='300'>300 lbs</option>
    <option value='350'>350 lbs</option>
    <option value='400'>400 lbs</option>
    <option value='450'>450 lbs</option>
    <option value='500'>500 lbs</option>
    <option value='550'>550 lbs</option>
  </select>
  <select className="exercises" type="text" name='duration' value={this.state.duration} onChange={this.handleChange}>
    <option value='-'>-</option>
    <option value='5'>5 Minutes</option>
    <option value='10'>10 Minutes</option>
    <option value='15'>15 Minutes</option>
    <option value='20'>20 Minutes</option>
    <option value='25'>25 Minutes</option>
    <option value='30'>30 Minutes</option>
    <option value='35'>35 Minutes</option>
    <option value='40'>40 Minutes</option>
    <option value='45'>45 Minutes</option>
    <option value='50'>50 Minutes</option>
    <option value='55'>55 Minutes</option>
    <option value='60'>60 Minutes</option>
    <option value='65'>65 Minutes</option>
    <option value='70'>70 Minutes</option>
    <option value='75'>75 Minutes</option>
    <option value='80'>80 Minutes</option>
    <option value='85'>85 Minutes</option>
    <option value='90'>90 Minutes</option>
  </select>
  </label>
  <button onClick={this.handleUpdate}>Update Workout!!</button>
  </div>
      )
  }
}

export default Exercise;