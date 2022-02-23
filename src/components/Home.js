import React from 'react'
import CurrentWeather from './CurrentWeather';
import Daily from './Daily';
import Hourly from './Hourly';
const current={
    width:'100%',
    margin: "auto",
    height: "auto",
    marginTop: 80
}
function Home(props) {
    let data=props;
    return (
        <div style={current}>
            {
                data.isloading?
                <div style={{color: 'white'}}>
                    Loading...
                </div>:
                <div>
                    <CurrentWeather data={data}/>
                    <Hourly data={data}/>
                    <Daily data={data}/>
                </div>
            }
            
        </div>
    )
}

export default Home
