import React from 'react';
import axios from 'axios';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        body: '',
        sets: '',
        reps: '',
        weight: ''

    }
  }
  handleChange (e) { 
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({
        body: '',
        sets: '',
        reps: '',
        weight: ''        
    })

}

  render() {
    return (
    <label>
    <select className="exercises" type="text" name='exerciseOne' value={this.state.body} onChange={this.handleChange} >
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
      <option value='1'>One</option>
      <option value='2'>Two</option>
      <option value='3'>Three</option>
      <option value='4'>Four</option>
      <option value='5'>Five</option>
      <option value='6'>Six</option>
      <option value='7'>Seven</option>
      <option value='8'>Eight</option>
    </select>
    <select className="exercises" type="text" name='reps' value={this.state.reps} onChange={this.handleChange} >
      <option value='-'>-</option>
      <option value='1'>One</option>
      <option value='2'>Two</option>
      <option value='3'>Three</option>
      <option value='4'>Four</option>
      <option value='5'>Five</option>
      <option value='6'>Six</option>
      <option value='7'>Seven</option>
      <option value='8'>Eight</option>
      <option value='9'>Nine</option>
      <option value='10'>Ten</option>
      <option value='11'>Eleven</option>
      <option value='12'>Twelve</option>
      <option value='13'>Thirteen</option>
      <option value='14'>Fourteen</option>
      <option value='15'>Fifteen</option>
      <option value='16'>Sixteen</option>
      <option value='17'>Seventeen</option>
      <option value='18'>Eighteen</option>
      <option value='19'>Nineteen</option>
      <option value='20'>Twenty</option>
      <option value='21'>Twenty-One</option>
      <option value='22'>Twenty-Two</option>
      <option value='23'>Twenty-Three</option>
      <option value='24'>Twenty-Four</option>
      <option value='25'>Twenty-Five</option>
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
    </label>
    )
   
  }
}

export default Exercise;