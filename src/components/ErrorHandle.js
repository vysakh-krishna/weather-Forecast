import React from 'react';

function ErrorHandle(props) {
  return (
    <div>
      <h2>
        {props.data.message}
      </h2>
    </div>
  )
}

export default ErrorHandle;
