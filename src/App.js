// Import necessary modules and components
import { useState } from 'react';
import './App.css';
import React from 'react';
import ExploreForm from './ExploreForm';
import axios from 'axios';
import Nav from './Nav.js';
import Weather from './WeatherDay';
import CityInfoCard from './CityInfoCard';
import Movie from './Movie';

// Main App component
function App() {

    // Declare state variables for cityInfo and input
    // States for LocationIQ 
    const [cityInfo, setCityInfo] = useState({});
    const [input, setInput] = useState('');
    const [displayMap, setDisplayMap] = useState('none');
    const [errorMessageRerender, seterrorMessageRerender] = useState(null);

    // States for Weather 
    const [location, setLocation] = useState('');
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [displayWeatherData, setDisplayWeatherData] = useState('none');

    const [movieData, setMovieData] = useState([]);
    const [show, setShow] = useState(false);
    const [movieError, setMovieError] = useState('');

    // Function to fetch movie data from the server
    const fetchMovieData = async () => {
        try {
            let response = await axios.get(`https://explore-yxyu.onrender.com/movie?searchQuery=${input}`);
            setMovieData(response.data);
            setMovieError('')
        } catch (error) {
            console.log(error);
            setMovieError(error);
        }
    };

    // Function to fetch weather data from the server
    const fetchDataWeatherData = async () => {
        try {
            let response = await axios.get(`https://explore-yxyu.onrender.com/weather/?searchQuery=${input}`);
            console.log(response.data);
            setData(response.data);
            setErrorMessage('');
            setDisplayWeatherData('block');
            console.log(response);
            fetchMovieData();
        } catch (error) {
            setDisplayWeatherData('none');
            setErrorMessage(error.response.data.message);
            console.log(error.response.data.message);
        }
    };

    let daysOfTheWeek;
    console.log("data", data)
    if (data !== "Request failed with status code 429") {

        daysOfTheWeek = data.map(days => {
            let weatherComponent = (
                <Weather
                    errorMessage={errorMessage}
                    errorMessageRerender={errorMessageRerender}
                    displayWeatherData={displayWeatherData}
                    key={days?.date}
                    displayMap={displayMap}
                    cityName={days?.city_name}
                    input={input}
                    lon={days?.lon}
                    lat={days?.lat}
                    date={days?.date}
                    description={days?.description}
                    location={location}
                />
            );
            return weatherComponent;
        });
    } else {
        daysOfTheWeek = (
            <div style={{ display: 'flex', justifyContent: 'center',flexDirection:'column', alignItems: 'center', color: 'red' }}>
                <h2>{data}</h2>
                <p>Please come back later and try again</p>
            </div>
        )
    }

    // Generates the map image URL if cityInfo's Latitude and Longitude properties exist 

    // The errorDisplay function is defined. 
    // It sets the errorMessageRerender state to the provided error message object.
    function errorDisplay(error) {
        seterrorMessageRerender(error);
    }

    // Render App component
    // The structure of the web page is defined. 
    // It includes the business name, navigation links, and a paragraph to display error messages if any.
    return (
        <div>
            <Nav key={'Nav'} />

            {/* The ExploreForm component is rendered. */}
            <ExploreForm
                key={'ExploreForm'}
                fetchDataWeatherData={fetchDataWeatherData}
                cityInfo={cityInfo}
                setCityInfo={setCityInfo}
                input={input}
                setInput={setInput}
                errorMessageRerender={errorMessageRerender}
                errorDisplay={errorDisplay}
                setDisplayMap={setDisplayMap}
                setLocation={setLocation}
                setShow={setShow}

            />

            <div style={{ display: 'flex', justifyContent: 'center', margin:'10px 10px 10px 10px' }}>
                <div id='weatherDisplay' style={{ display: displayWeatherData, padding: '6px 6px 6px 6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '45px auto auto auto' }}>
                        <img src='https://i.gifer.com/4jwl.gif' alt='thunder cloud' style={{ width: '100px', height: '100px', alignItems: 'center' }} />
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Weather</h1>
                        <img src='https://i.gifer.com/4jwl.gif' alt='thunder cloud' style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div className='weather-cards-wrapper'>
                        {daysOfTheWeek}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CityInfoCard key={'CityInfoCard'} displayMap={displayMap} cityInfo={cityInfo} />
                </div>
            </div>
            <Movie key={'Movie'} movieError={movieError} show={show} setShow={setShow} movieData={movieData} />
        </div>
    );

}

// Export App component
export default App;
