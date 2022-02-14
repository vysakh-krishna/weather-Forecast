import React from 'react'
import CurrentWeather from './CurrentWeather';
const current={
    width:'100%',
    margin: "auto",
    height: "auto",
    marginTop: 100
}
function Home(props) {
    let data=props;
    // console.log(data);
    return (
        <div style={current}>
            {
                data.isloading?
                <div>
                    Loading...
                </div>:
                <div>
                    <CurrentWeather data={data}/>
                </div>
            }
            
        </div>
    )
}

export default Home
