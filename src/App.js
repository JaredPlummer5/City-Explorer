// Import necessary modules and components
import { useState } from 'react';
import './App.css';
import React from 'react';
import ExploreForm from './ExploreForm';

import Card from 'react-bootstrap/Card'

// Main App component
function App() {

    // Declare state variables for cityInfo and input
    const [cityInfo, setCityInfo] = useState({});
    const [input, setInput] = useState('');
    const [displayMap, setDisplayMap] = useState('none')
    const [errorMessageRerender, seterrorMessageRerender] = useState(null)



    // Generates the map image URL if cityInfo's Latitude and Longitude properties exist 
    const imageSrc = cityInfo.lat && cityInfo.lon ? `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONQI_API_KEY}&center=${cityInfo.lat},${cityInfo.lon}&format=png&zoom=12` : '';

    // The errorDisplay function is defined. 
    // It sets the errorMessageRerender state to the provided error message object.
    function errorDisplay(error) {
        seterrorMessageRerender(error);

    }
    // Render App component
    // The structure of the web page is defined. 
    // It includes the business name, navigation links, and a paragraph to display error messages if any.
    return (
        <div className="App">
            <div id='EyeGraber'>
                <h1 id="nameOfBusiness">Lost&Found: The Wandering Guru</h1>
                <nav>
                    <a href='nowhere.com'>
                        Home
                    </a>
                    <a href='nowhere.com'>
                        Cities
                    </a>
                </nav>
            </div>

            {/* 
            The ExploreForm component is rendered. 
            It passes necessary props, including cityInfo, input, setInput, errorDisplay, and setDisplayMap.
            */}
            <ExploreForm
                cityInfo={cityInfo}
                setCityInfo={setCityInfo}
                input={input}
                setInput={setInput}
                errorMessageRerender={errorMessageRerender}
                errorDisplay={errorDisplay}
                setDisplayMap={setDisplayMap}
            />


            {/*  
                 The Card component is rendered, displaying the city information and the map image. 
                 The card's display depends on the cityInfo and displayMap states. 
                 The city information is displayed in the card's body, 
                 and the map image is displayed using the Card.Img component.
            */}
            <Card style={{ width: '450px', height: '450px' }} id='card'>

                <Card.Body style={{ backgroundColor: '#2E7D32', display: displayMap }}>
                    <Card.Title className='cityInfo'>{cityInfo.display_name}</Card.Title>
                    <Card.Text style={{ display: displayMap }} id='lonAndlad'>
                        <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
                            <span className='cityInfo'>Longitude: {cityInfo.lon}</span>

                            <span className='cityInfo'>Latitude: {cityInfo.lat}</span>
                        </div>
                    </Card.Text>
                    <Card.Img src={imageSrc} />
                </Card.Body>
            </Card>


        </div>
    );
}

// Export App component
export default App;
