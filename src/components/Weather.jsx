import React, { useContext, useEffect, useState } from 'react'
import { Postion } from './Location'




const Weather = () => {



    const pos = useContext(Postion);
    const [dataWeather, setdataWeather] = useState(pos)
    useEffect(() => getAPi(), [pos]);
    const apiKey = process.env.REACT_APP_TOKEN;
 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${pos}&appid=${apiKey}&units=metric`;

    const getAPi = () => {
        setdataWeather(pos);
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                // console.log(pos)
                // console.log(data)
                setdataWeather(data.main.temp)


            })
            .catch(arr => console.log(arr));


    }
    return (
        <>
            <div>The temperature at the place of the planned trip: {dataWeather} c</div>
            <div>You should bring: {dataWeather > 20? "🩴🩴 🩳":"🧤🧣"}</div>
        </>
    )
}

export default Weather