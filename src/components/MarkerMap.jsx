import React from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet';
import { NavLink } from 'react-router-dom'

const MarkerMap = (props) => {

    const map = useMap();
    map.flyTo(props.position);

    const iconObj = { iconUrl: "https://cdn-icons-png.freepik.com/512/4284/4284088.png", iconSize: [50, 60] }
    const MyIcon = new Icon(iconObj);


    return (
        <>
            <Marker position={props.position} icon={MyIcon}>
                <Popup>
                    <NavLink target='_blank'
                        className='text-decoration-none fw-bold'
                        to={"https://c.ort.org.il/singalovski-telaviv/"}>Ort Singalovski
                    </NavLink>
                </Popup>
            </Marker>
        </>
    )
}

export default MarkerMap