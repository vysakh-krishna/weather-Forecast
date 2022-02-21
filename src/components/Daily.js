import React from 'react'
import moment from 'moment'
const outer={
  padding:"0px 15px 15px",
  // display: 'flex',
  backgroundColor: "rgba(255, 255, 255, 0.4)", 
  color: "rgba(255, 255, 255, 0.7)",
  width:"80%",
  borderRadius:10,
  margin:"auto",
  marginBottom:25,
  // marginTop:25,
  // overflowX: 'auto',
  // justifyContent: 'flex-start',
  border: "1px solid black",

}




// function CurrentWeather(props) {
//   // console.log(props.data.data);
//   // let data=props.data.data;
//   console.log(props);
//   const icon=`http://openweathermap.org/img/wn/${props}.png`
// }


function Daily(props) {
    let daily = props.data.data.daily;
    // console.log(daily);
    // var utc = 1645252200;
    // var m = moment.unix(utc).format('llll');
    // YYYY-MM-DD HH:mm:ss
    // console.log(m);
  return (
    <>
    <div style={outer}>
      <div style={{backgroundColor: "rgba(255, 255, 255, 0.4)",color: "black",borderRadius:10}}>
      Daily Forcast
    </div>
      <div style={{justifyContent: 'flex-start',overflowX: 'auto',display:'flex'}}>
      {
        daily.map((day)=>
          <div key={day.dt} style={{width:150,color:"black",backgroundColor: '#9ea8a3',padding:4,margin:3,borderRadius:10,display: 'flex',flexDirection: 'column'}}>
            <div style={{width:60,margin:'auto',}}>
              <strong>
                {moment.unix(day.dt).format('ddd DD')}
              </strong>
            </div>
            <div>
              <div style={{ fontSize:20, marginBottom:5}}>
              {Math.floor(day.temp.min - 273.15)}<sup>o</sup>
              </div>
              {/* <div>
                <span>
                  <img src="{CurrentWeather(day.weather[0].icon)}" alt="weather icon" />
                </span>
              </div> */}
              <div style={{ fontSize:20}}>
              {Math.floor(day.temp.max - 273.15)}<sup>o</sup>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
    </>
  )
}

export default Daily