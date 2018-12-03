import React from 'react';


const StravaStats = props => {
    return (
    <div className="textContainer">
     <p>Since 2016 have been running {props.distance} km on {props.count} runs.</p>
  </div>
  
    )
    };

export default StravaStats