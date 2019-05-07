import React from 'react';


const Workoutlist = (props) => (
      
      <div className="workouts">
          <h2>WorksOuts!</h2>
            <h3>Current WorksOuts!</h3>
           <ul>
            {props.exercises.map((ex) =>
                <li name='workout' key={ex.id} onClick={(e) => props.handleClick(ex)} >
                  <div >{ex.name + ' ' + ex.type}</div>
                </li>
            )}
            </ul>
          </div>
   
);    



export default Workoutlist