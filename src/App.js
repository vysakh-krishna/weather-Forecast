import { useEffect, useState } from 'react';
import './App.css';
import Forcast from './components/Forcast';
function App() {
  const [latandlon, setLatandlon] = useState({lat: undefined, lon: undefined});
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLatandlon({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      }, () => {
        console.log('Unable to retrieve your location');
        setStatus('Unable to retrieve your location');
      });
    }
  };

  useEffect(() => {
    getLocation();
  },[window.navigator.geolocation] )

  return (
    <div className="App">
        <Forcast lat={latandlon.lat} lon={latandlon.lon} status={status}/>
    </div>
  );
}

export default App;
