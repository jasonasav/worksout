import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        view: 'opening',
        workouts: ''
          
      };
      
  };

  componentDidMount() {
    
  }


  render() {
      return (
      
        <div>
            <h1>React App BoilerPlate from Sen</h1>
        </div>
        
      )
  };
};

export default Checkout;
