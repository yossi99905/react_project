import React, { useContext, useEffect, useState } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet';
import { Postion } from './Location'
import { OpenStreetMapProvider } from "leaflet-geosearch";
import MarkerMap from './MarkerMap';

const Maps = () => {
  const pos = useContext(Postion);
  const [postionCity, setpostionCity] = useState([-43.2093727,-22.9110137]);

  useEffect(()=>{
    locationSearch();
  },[pos])

  const mapProvider = new OpenStreetMapProvider();

  const locationSearch = async () => {
    let inputValue = pos;
    let cities = await mapProvider.search({ query: inputValue });
    // console.log(cities);
    if (cities.length > 0)
    setpostionCity([cities[0].y, cities[0].x])
  }


  return (
    <div className='maps'>
      <MapContainer center={postionCity} zoom={13} style={{ height: '400px', width: '100%',zIndex:0}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy;<a href="https://openstreetmap.org/copyright">OpenSteertMap</a>contributors' />
          <MarkerMap position={postionCity}/>
      </MapContainer>

      
    </div>
  )
}

export default Maps