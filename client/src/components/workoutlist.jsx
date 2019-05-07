import React from 'react';


const Workoutlist = (props) => (
      
      <div className="workouts">
          <h2>WorksOuts!</h2>
            <h3>Current WorksOuts!</h3>
           <ul>
            {props.exercises.map((ex, i) =>
                <li name='workout' key={i} onClick={(e) => props.clickExercise(ex)} >
                  <div >{ex.name + ' ' + '['+ex.type+']'}</div>
                </li>
            )}
            </ul>
          </div>
   
);    



export default Workoutlist