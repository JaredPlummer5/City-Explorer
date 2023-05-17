import React from 'react';
import Card from 'react-bootstrap/Card';


export default function Weather(props) {
    let forecast;

    // Check if an error message exists
    if (props.errorMessage !== '') {
        forecast = `${props?.errorMessage} : Forecast not found`;
    } else {
        // Set the forecast data if no error message exists
        forecast = [
            <Card.Text>{props?.description}</Card.Text>,
            <Card.Text>Date: {props?.date}</Card.Text>,
            <Card.Text>Longitude: {props?.lon}</Card.Text>,
            <Card.Text>Latitude: {props?.lat}</Card.Text>
        ];
    }
    let weatherEffect = ['https://i.gifer.com/3F3I.gif', 'https://i.gifer.com/ODkn.gif', 'https://i.gifer.com/Y60T.gif', 'https://i.gifer.com/ZGZ8.gif',  'https://i.gifer.com/ZDce.gif'];
    // Render the Weather component
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card  id="weather-card">
                <div id="Weather-card-header-Container">
                    <Card.Header id="Weather-card-header">{props.location}</Card.Header>
                </div>
                <Card.Body>
                    <div id="raindrop" className="raindrop-content" style={{backgroundImage: `url(${weatherEffect[Math.floor((Math.random() * weatherEffect.length ))]})`}}>
                        <Card.Title style={{ color: '#2E7D32', fontWeight: 'bold' }}>Weather Forecast</Card.Title>
                        {forecast}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
