import React from 'react';

function Hourly(props) {
  return (
    <div>
      <div>
        {props.current.temp}
      </div>
    </div>
  )
}

export default Hourly;
