import React from 'react';
// import Daily from './Daily';
import ErrorHandle from './ErrorHandle';

const outer={
    padding:"0px 15px",
    // display: 'flex',
    backgroundColor: "rgba(255, 255, 255, 0.4)", 
    color: "rgba(255, 255, 255, 0.7)",
    width:"80%",
    borderRadius:10,
    margin:"auto",
    marginTop:25,
    // marginBottom:25,
    border: "1px solid black",

}
function CurrentWeather(props) {
    // console.log(props.data.data);
    let data=props.data.data;
    // console.log(props);
    const icon=`http://openweathermap.org/img/wn/${data.icon}.png`
  return (
    <div style={outer}>
      {
        data.temp !== undefined ? 
        // console.log()
        <>
            <div style={{backgroundColor: "rgba(255, 255, 255, 0.4)",color: "black",borderRadius:10}}>
              Current Weather
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ color: "#000000", flex: 1 }}>
                <div style={{ fontSize: "25px", color: "#000000", textAlign: 'left' }}>
                  {data.name}, {data.country}<br />
                  <span style={{ color: "black", fontSize: 20 }}>As of {new Date().toLocaleTimeString()}</span>
                </div>
                <span style={{ color: "#000000", fontSize: 50 }}>{Math.floor(data.temp - 273.15)}<sup>o</sup></span>
                <span style={{ color: "#000000", fontSize: 30, marginLeft: 10 }}>{data.minidesc}</span>
                <span>
                  <img src={icon} alt="weather icon" />
                </span>
                <div>
                  <span style={{ fontSize: 20, color: "black", }}>
                    {data.description}
                  </span>
                </div>
              </div>
            </div>
          </>
          :
          <div>
              <ErrorHandle data={data} />

          </div>
      } 
    </div>
  )
}

export default CurrentWeather;