// Import necessary modules and components
import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

// ExploreForm component
function ExploreForm(props) {

  // useData function to handle fetchData and set cityName
  const useData = async () => {
    // Call fetchData with input and store the data
    const data = await props.fetchData(props.input);
    // Updates the CityName variable to the first objects display_name property it gets from the API 
    props.setCityName(data[0]);
    // Log data and location information
    console.log('data', data);
    
    console.log("Location name", data[0].display_name);
  };

  // handleInputChange function to update input value
  const handleInputChange = (event) => {
    props.setInput(event.target.value);
  };

  // Render ExploreForm component
  return (
    <Form.Group>
      {/* Label for input field */}
      <Form.Label htmlFor="city">Enter a city name:</Form.Label>
      <br />
      {/* Input field to enter city name */}
      <Form.Control
        type="city"
        placeholder="City Name"
        value={props.input}
        onChange={handleInputChange}
      />
      {/* Button to trigger useData function */}
      <Button onClick={useData}>submit</Button>
    </Form.Group>
  );
}

// Export ExploreForm component
export default ExploreForm;
