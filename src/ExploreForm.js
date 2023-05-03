// Import necessary modules and components
import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import axios from "axios";
// ExploreForm component

function ExploreForm(props) {



    //If an error occurs, it calls the errorDisplay function to handle the error and display it.
    const fetchData = async () => {
        // The fetchData function is defined as an asynchronous function. 
        try {
            // It uses the axios.get method to perform the GET request to the LocationIQ API.
            // The URL of the API call includes the API key and the user's input.
            // It handles making the API call to retrieve city data based on the user's input. 
            // The response is stored in the response variable. 
            const response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONQI_API_KEY}&q=${props.input}&format=json`);
            // If the API call is successful, the city information is extracted from the response(response.data[0]) and passed to the setCityInfo function to update the state.
            props.setCityInfo(response.data[0]);
            // The map display is set to block, indicating it should be shown.
            props.setDisplayMap('block');
            // If the is no error it set the error state variable to back to null
            props.errorDisplay(null);
            
        } catch (error) {
            //If an error occurs during the API call, it is caught in the catch block, 
            //and the errorDisplay function is called to handle the error.
            props.errorDisplay(error);
            // And the Card is no longer displayed
            props.setDisplayMap('none');


        }
        // Set the cityInfo state with the response data
    };
    // The handleInputChange function is defined. 
    // It updates the input state value when the user types in the input field.
    // The handleInputChange function is defined to handle changes in the input field. 
    // It receives an event object representing the input change event. 
    // It updates the input state value by calling the setInput function and passing the new value from event.target.value.
    const handleInputChange = (event) => {
        props.setInput(event.target.value);
    };
    
    return (
        
        // The ExploreForm component is rendered, displaying a form for user input. 
        // It uses the Form component from react - bootstrap to create the form structure. 
          
        <div className='ExploreFormContainer'>

            <Form.Group className='ExploreForm'>
                {/* Label for input field */}
                <Form.Label id='formLabel' htmlFor="city">Enter a city name:</Form.Label>
                <br />
                {/* Input field to enter city name */}
                <Form.Control

                    className='ExploreFormParts'
                    id='ExploreFormInputBox'
                    type="city"
                    placeholder="City Name"
                    value={props.input}
                    // The input field is bound to the input state value, and the handleInputChange function handles the changes. 
                    onChange={handleInputChange}
                    required
                />
                <Form.Text style={{ color: 'rgb(196, 2, 2)' }}>
                    {props.errorMessageRerender ? props.errorMessageRerender.message + ": Please enter a vaild location" : ''}
                </Form.Text>
                {/* Button to trigger useData function */}
                <Button
                    variant="success"
                    className='ExploreFormParts'
                    id='ExploreFormButton'
                    // Clicking the button triggers the fetchData function.
                    onClick={fetchData}
                >
                    Explore!
                </Button>
            </Form.Group>
        </div>
    );
}

// Export ExploreForm component
export default ExploreForm;
