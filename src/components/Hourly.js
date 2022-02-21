import moment from 'moment-timezone';
import React from 'react';


const outer={
  padding:"0px 15px 15px",
  display: 'flex',
  backgroundColor: "rgba(255, 255, 255, 0.4)", 
  color: "rgba(255, 255, 255, 0.7)",
  width:"80%",
  borderRadius:10,
  margin:"auto",
  marginTop:25,
  marginBottom:25,
  overflowY: 'auto',
  justifyContent: 'flex-start',
  border: "1px solid black",
  maxHeight:230,
  flexDirection: 'column',
}


function Hourly(props) {
  let hourly = props.data.data.hourly;
  // console.log(hourly);
  // let m=moment.unix(hourly[0].dt).format('ddd HH:mm');
  // console.log(m);
  return (
    <>
    <div style={outer}>
      <div style={{backgroundColor: "rgba(255, 255, 255, 0.4)",color: "black",borderRadius:10}}>
        Hourly Forcast
      </div>
      <div style={{flexDirection: 'column',justifyContent: 'flex-start',overflowY: 'auto',}}>
      {
        hourly.map((hour)=>
          <div key={hour.dt} style={{color:"black",backgroundColor: '#9ea8a3',padding:4,margin:3,borderRadius:10,display:'flex',alignItems: 'center'}}>
            <div style={{flex:1, fontSize:18}}>
              <strong>{moment.unix(hour.dt).format('ddd HH:mm')}</strong>
            </div>
            <div style={{flex:1}}>
              <strong style={{fontSize:18}}>{Math.floor(hour.temp-273.15)}<sup>o</sup></strong>
            </div>
            <div style={{flex:1}}>
              {hour.weather[0].main}
            </div>
          </div>
        )
      }
      </div>
    </div>
    </>
  )
}

export default Hourly;
