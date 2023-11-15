import React, { useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import Card from 'react-bootstrap/Card';

function ChangeMapView({ center }) {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
}


export default function CityInfoCard(props) {
    const position = useMemo(() => [props.cityInfo.lat, props.cityInfo.lon], [props.cityInfo.lat, props.cityInfo.lon]);
    const mapRef = useRef();

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.flyTo(position);
        }
    }, [position]);
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
                            <MapContainer 
                                center={position} 
                                zoom={12} 
                                scrollWheelZoom={false} 
                                style={{ height: "600px" }} 
                                ref={mapRef}>
                                <ChangeMapView center={position} />
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
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
