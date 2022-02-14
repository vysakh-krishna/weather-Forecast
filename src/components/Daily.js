import React from 'react'

const outer={
    display: 'flex',
    height: '100px',
    backgroundColor: '#9ea8a3',
}
function Daily(props) {
    let data = props;
    console.log(data);
  return (
    <div style={outer}>

    </div>
  )
}

export default Daily