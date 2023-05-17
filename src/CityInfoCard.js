import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Card from 'react-bootstrap/Card';


export default function CityInfoCard(props) {
    return (

        <div style={{ marginTop: '45px', borderRadius: '130px' }}>

            <Card className="map-card">

                <Card.Body style={{ backgroundColor: '#2E7D32', display: props.displayMap }}>

                    <Card.Title className='cityInfo'>

                        {props.cityInfo.display_name}
                    
                    </Card.Title>

                    <Card.Text style={{ display: props.displayMap }} id='lonAndlad'>

                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <span className='cityInfo'>Longitude: {props.cityInfo.lon}</span>
                            <span className='cityInfo'>Latitude: {props.cityInfo.lat}</span>
                        </div>

                    </Card.Text>
                    {
                        props.cityInfo.lat && props.cityInfo.lon && (
                            <MapContainer center={[props.cityInfo.lat, props.cityInfo.lon]} zoom={12} scrollWheelZoom={false} style={{ height: "600px" }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[props.cityInfo.lat, props.cityInfo.lon]}>
                                    <Popup>
                                        {props.cityInfo.display_name}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        )
                    }
                </Card.Body>
            </Card>
        </div>

    )
}
