import React, { useEffect } from 'react';
import {useState} from 'react'
import Home from './Home';

const navbar={
  padding:'0px 10px',
  backgroundColor:'#5d6963',
  textAlign:'center',
  display:'flex',
  justifyContent:'center',
  alignItems:"center",
  top:0,
  position: 'fixed',
  width: '100%'
}
const inp={
  height:35,
  borderRadius:20,
  border:'none',
  flex:1,
  maxWidth:300,
  textAlign: 'center',
  paddingLeft:10,
  paddingRight:10,
  backgroundColor: '#9ea8a3',
  color: 'white',
  maxFontSize:20,
  outline: 'none',
}
const button={
  display:'flex',
  justifyContent:'center',
  borderRadius:"0px 20px 20px 0px",
  border:"none",
  height:35,
  width:35,
  backgroundColor: '#9ea8a3',
  marginLeft:"-35px",
  alignItems: 'center',
  cursor: 'pointer',
}
const buttn={
  display:'flex',
  justifyContent:'center',
  borderRadius:"20px 20px 20px 20px",
  border:"none",
  height:35,
  width:35,
  backgroundColor: '#9ea8a3',
  marginLeft:"25px",
  alignItems: 'center',
  cursor: 'pointer',
}
function Forcast(props) {
  let lat= props.lat;
  let lon= props.lon;
  const [isloading, setIsloading] = useState(false);
  const [search,setSearch]= useState('');
  const [weather,setWeather] =useState(
    {
      name:undefined,
      country: undefined,
      state: undefined,
      temp: undefined,
      minidesc: undefined,
      description: undefined,
      daily:undefined,
      hourly:undefined,
      icon: undefined,
      timezone: undefined,

    }
  );

  const APIKEY = '0dd8f02c6ff660858ed332fe8f5711d7';


  useEffect(() => {
    return  getWeather(lat,lon,'Your Location','--');
  }, [lat,lon])


  async function getWeather(latitude, longitude,name,country) {
    if (latitude!== undefined && longitude!== undefined){
      let weatherurl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
      const data=await fetch(weatherurl).then((res)=>
        res.json()).then(data=>data);
        let temp=data.current.temp;
        let description=data.current.weather[0].description;
        let hourly=data.hourly;
        let daily=data.daily;
        let icon=data.current.weather[0].icon;
        let minidesc=data.current.weather[0].main;
        setIsloading(false);
        setWeather({
          ...weather,
          name:name,
          country:country,
          temp:temp,
          description:description,
          daily:daily,
          hourly:hourly,
          icon:icon,
          minidesc:minidesc,
        })
    }
  }


  async function getcoding(e){
    e.preventDefault();
    if(search===""){
      alert("Please enter city name");
    }
    else{
      setIsloading(true);
      let geourl=`https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${APIKEY}`
      const data = await fetch(geourl).then((res)=>
      res.json()).then((data)=>data);
      if(data[0] !== undefined){
        let latitude=data[0].lat;
        let longitude=data[0].lon;
        let name=data[0].name;
        let country=data[0].country;
        getWeather(latitude,longitude,name,country);
      }
      else{
        alert("City Not Found");
      }
    }
  }

  const onChangeHandle=(e)=>{
    let value=e.target.value;
    setSearch(value);
  };
  return (
    <div style={{width: '100%'}}>
        <div style={{}}>
          <div style={navbar}>
              <div style={{fontSize:'40px',paddingRight:'5px',fontFamily:'serif'}}>
                  W
              </div>
              <div style={{flex:1,justifyContent:'center',border:'none'}}>
                  <form style={{display:'flex',justifyContent:'center',border:'none'}} >
                          <input 
                              style={inp}
                              placeholder='Enter a city name'
                              type="text"
                              name='city'
                              onChange={e => onChangeHandle(e)}                                
                          />
                          <button style={button} onClick={e=>getcoding(e)}>
                              <img style={{width:30,height:30,borderRadius:20,backgroundColor: '#9ea8a3'}} src="./magnifier.png" alt="get"/>
                          </button>
                          <button style={buttn} >
                            <img style={{width:30,height:30,borderRadius:20,backgroundColor: '#9ea8a3'}} src="./map.png" alt="get"/>
                          </button>
                  </form>
              </div>
          </div>
        </div>

        {
          weather.temp !== undefined ?
          <div>
            <Home data={weather} isloading={isloading}/>
          </div> :
          <div style={{marginTop:90,color: 'white'}}>
            Getting Location...
          </div>
        }
    </div>
  )
  
}

export default Forcast
