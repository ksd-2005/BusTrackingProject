import React, { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios
import MapLeaflet from './map_leaflet';

const GPSData = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const ADAFRUIT_IO_USERNAME = 'arnav_abhishek_';
  const ADAFRUIT_IO_KEY = 'aio_aaiv04vl9AUthUkrdD36WRJemXpA';

  const fetchGPSData = async () => {
    try {
      // const latitudeUrl = `https://io.adafruit.com/api/v2/arnav_abhishek_/feeds/latitude/data`
      const locationUrl = `https://io.adafruit.com/api/v2/${ADAFRUIT_IO_USERNAME}/feeds/latitude/data`;

      const headers = {
        'X-AIO-Key': ADAFRUIT_IO_KEY
      };

      const [locationResponse] = await Promise.all([
        axios.get(locationUrl, { headers }),
      ]);
      // let latitudedata= await fetch(latitudeUrl)
      // let latdata= await latitudedata.json()
      // let longitudedata= await fetch(longitudeUrl)
      // let londata= await longitudedata.json()

      setLatitude(locationResponse.data[0].lat);
      setLongitude(locationResponse.data[0].lon);
    } catch (error) {
      console.log(error)
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchGPSData(); // Initial fetch
    const interval = setInterval(fetchGPSData, 2000); // Fetch every 1 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [latitude,longitude]);
  if (latitude && longitude) {
    // data lagging alternate
    return (
      <div>
        <MapLeaflet coord={{ lat: latitude.toString(), lon: longitude.toString() }} />
      </div>
    );
  }
  // [ latitude, longitude ]
  // variables storing lat and long
};

export default GPSData;