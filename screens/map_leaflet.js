import React from 'react'
import { MapContainer, TileLayer, Marker, Popup,Circle,useMap } from 'react-leaflet'
import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet'
import busico from './markers/bus_marker.png'
import usrico from './markers/user_loc_marker.png'
import bus_stop_loc from './bus_stops_data';
import bstp from './markers/bus_stop.png'

export default function MapLeaflet(props) {
    
    const [coord, setcoord] = useState({lat:props.coord.lat, lon: props.coord.lon})
    const [mapcenter, setmapcenter] = useState([28.54596301484667, 77.19319704919322])
    const [fly, setfly] = useState(false)

    const updatemap = async () => {
        setcoord(props.coord)
    }
    const movemap = async () => {
        let hdist = Math.abs((parseFloat(coord.lon)-mapcenter[1]))*340000
        let vdist = Math.abs((parseFloat(coord.lat)-mapcenter[0]))*340000

        if (hdist>(window.innerWidth*0.9) || vdist>(window.innerHeight*0.9)){
            setmapcenter([parseFloat(coord.lat),parseFloat(coord.lon)])
            setfly(true)
        }
    }
    const busicon = new Icon({
        iconUrl: busico,
        iconSize: [75, 85],

    })
    const usricon = new Icon({
        iconUrl: usrico,
        iconSize: [45, 45],

    })
    const bstpicon = new Icon({
        iconUrl: bstp,
        iconSize: [80, 80],

    })
    useEffect(() => {
        updatemap()
        movemap()
    },[props.coord,mapcenter])

    // getting user location
    const [position, setPosition] = useState(null);
    function FlyMapTo() {
        const map = useMap()
        useEffect(() => {
            map.flyTo(mapcenter)
            setfly(false)
        }, [mapcenter])
    }
    
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, [props.coord]);
    return (
            <MapContainer style={{ height: window.innerHeight*0.9, width: window.innerWidth*0.9}} center={[mapcenter[0],mapcenter[1]]} zoom={17} scrollWheelZoom={true}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {position && <Marker position={[position.latitude, position.longitude]} icon={usricon}>
                    <Popup>
                        You are here
                    </Popup>
                </Marker>}
                <Marker position={[coord.lat, coord.lon]} icon={busicon}>
                    <Popup>
                        Your Bus is here
                    </Popup>
                <Circle center={[coord.lat-0.00015, coord.lon]} radius={10} fillColor='blue'/>
                </Marker>
                {bus_stop_loc.map((bsl) => {
                    // console.log(bsl)
                    return (
                        <Marker id={bsl.name} position={[bsl.latitude, bsl.longitude]} icon={bstpicon}>
                            <Popup>
                                Bus stop : {bsl.name}
                            </Popup>
                        </Marker>)
                })}
                {fly && <FlyMapTo/>}
            </MapContainer>
    )
}
