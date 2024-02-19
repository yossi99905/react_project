import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css';
import Maps from './Maps';
import Weather from './Weather';

export const Postion = React.createContext();

const Location = () => {
    const [locationPlace, setlocationPlace] = useState("Rio de Janeiro")
  
    return (
        <div className='location mt-4 '>
            <h2>Our most requested travel destinations: </h2>
            <form>
                <select className='m-3 text-center' onChange={(e) => setlocationPlace(e.target.value)}>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Queenstown">Queenstown</option>
                    <option value="Quebec City">Quebec City</option>
                    <option value="Queenstown">Queenstown</option>
                </select>
            </form>

            {/* <img src="./images/rain.gif" alt="" /> */}


            <Postion.Provider value={locationPlace}>
                <div>
                    <Maps />
                </div>
                <div className='mt-4 fs-4'>
                    <Weather />
                </div>

            </Postion.Provider>
            

        </div>
    )
}

export default Location