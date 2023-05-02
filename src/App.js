// Import necessary modules and components
import { useState } from 'react';
import './App.css';
import ExploreForm from './ExploreForm';
import axios from "axios";

// Main App component
function App() {
  // Declare state variables for cityName and input
  const [cityName, setCityName] = useState('');
  const [input, setInput] = useState('');

  // fetchData function to make API call using inputCity
  const fetchData = async (inputCity) => {
    // Make API call and store response
    const response = await axios.get(`https://us1.locationiq.com/v1/search?key=pk.e04b28f38ac20e3763b4cea92cd9d579&q=${inputCity}&format=json`);
    // Return data from the response
    console.log("cityName", cityName);
    return response.data;
  };

  // Render App component
  return (
    <div className="App">
      {/* Pass necessary props to ExploreForm component */}
          <ExploreForm
              cityName={cityName}
              setCityName={setCityName}
              input={input}
              setInput={setInput}
              fetchData={fetchData}
          />
          <h2>{cityName.display_name}</h2>
          <span>Longitude: {cityName.lon}</span>
          <br/>
          <span>Latitude: {cityName.lat}</span>
    </div>
  );
}

// Export App component
export default App;


// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header> */}