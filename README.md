# Project Name

**Author**: Jared Plummer
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

Link: [My website](https://main--cheery-palmier-0de630.netlify.app/)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
The application also displays a map image of the city if the latitude and longitude information is available. It manages city information, user input, map display, and error messages. It renders the header, navigation links, an ExploreForm component for user input, and a Card component to display the city information and map image. It includes an input field and a button for triggering the retrieval of city data. It also handles making API requests to retrieve city information based on the user's input. The problem domain of this application seems to be related to location-based services or city information retrieval. The application allows users to explore and obtain details about different cities. It utilizes the LocationIQ API to fetch the necessary data, including latitude, longitude, and city name.


The purpose of building this application could be to provide a user-friendly interface for users to quickly access information about cities, such as geographical coordinates, in an interactive and visually appealing manner. This could be useful for various scenarios like trip planning, finding nearby attractions, or simply gaining general knowledge about different cities.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

Set up the development environment:

Ensure you have Node.js installed on your machine. You can download it from the official Node.js website: <https://nodejs.org>
Install a code editor or Integrated Development Environment (IDE) such as Visual Studio Code, Atom, or WebStorm.
Create a new directory for your project and open a terminal or command prompt in that directory.

Initialize a new React project:

Run the following command in the terminal to create a new React project using Create React App (assuming you have Node.js installed):
lua

- npx create-react-app my-app

This command will create a new directory named my-app with the basic structure and configuration files for a React project.

Replace the default src/App.js and src/ExploreForm.js files in the newly created project with the code you provided.

Install additional dependencies:

Open the terminal in the project directory.
Run the following command to install the required dependencies:

- npm install react-bootstrap axios

Obtain API keys:

This application uses two APIs: LocationIQ and Mapbox. You need to obtain API keys from both services.

- Sign up for a free account on LocationIQ (<https://locationiq.com>) and obtain an API key.

- Sign up for a free account on Mapbox (<https://www.mapbox.com>) and obtain an API key.

Replace the placeholder API keys:

In the App.js file, replace process.env.REACT_APP_LOCATIONQI_API_KEY with your LocationIQ API key.
Replace YOUR_MAPBOX_API_KEY with your Mapbox API key.

Start the development server:

Run the following command in the terminal to start the development server:

- npm start

This command will launch the application on a local development server, and you should be able to access it in your web browser at <http://localhost:3000>.

That's it! You should now have the application running on your local machine. You can interact with it by entering city names in the input field and exploring the displayed city information.

Note: It's important to handle the security of your API keys properly, especially if you plan to deploy the application to a public environment. Avoid committing your API keys to version control systems and consider using environment variables or other secure methods to manage your API keys.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

The provided application is built using React, a popular JavaScript library for building user interfaces. Here is a detailed description of the application design, including the technologies used and other relevant design information:

## Technologies Used

- React: The main JavaScript library used for building the user interface and managing the application state.

- React Bootstrap: A library that provides pre-designed components and styles for building responsive and visually appealing UI elements.
Axios: A promise-based HTTP client used for making API requests to retrieve city information from external APIs.

- HTML/CSS: The standard markup language and styling technology used for structuring and styling the web page.
Components:

- App: The main component of the application. It manages the state variables for city information, user input, map display, and error messages. It renders the header, navigation links, ExploreForm component, and a Card component to display the city information and map image.

- ExploreForm: A component that renders a form for users to input a city name. It includes an input field and a button for triggering the retrieval of city data. It handles making API requests and communicates with the App component to update the state.

- Card: A component from React Bootstrap used to display the city information and map image in a visually pleasing way.

## Design Information

- The application follows a component-based architecture, where different functionalities are encapsulated within separate reusable components.

- React's useState hook is used for managing component state, allowing the application to update and re-render dynamically based on user input and API responses.

- The application makes use of asynchronous functions and promises to handle API requests and responses in a non-blocking manner.

- The LocationIQ API is used to retrieve city data based on user input, including latitude, longitude, and city name.

- The Mapbox API is used to generate a static map image based on the latitude and longitude of the selected city.

- The application utilizes React Bootstrap components for a responsive and visually consistent UI design.

- CSS styles are applied to customize the appearance of the components, including background colors, font styles, and card dimensions.

- Error handling is implemented to display error messages if API requests fail, and the application gracefully handles and communicates errors to the user.

Overall, the application is designed to provide a user-friendly interface for exploring and obtaining information about cities. It leverages React's component-based architecture, state management, and the integration of external APIs to deliver an interactive and visually appealing experience for users.

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

Based on the provided time stamps, here are the iterative changes made to the application as each feature was successfully implemented:

1. **Location and Coordinates:**
   - Start time: 05-01-2023 5:30pm
   - Finish time: 05-01-2023 8:00pm
   - Actual time needed: 3 hours
   - Changes made:
     - Created the `App` component and initialized state variables for cityInfo and input using the `useState` hook.
     - Implemented the `ExploreForm` component to handle user input and make API requests to retrieve city data.
     - Displayed the city information (latitude, longitude, and display name) based on the retrieved data.

2. **Map:**
   - Start time: 05-02-2023 1:00pm
   - Finish time: 05-02-2023 3:00pm
   - Actual time needed: 2 hours
   - Changes made:
     - Added the necessary code to generate the map image URL using the retrieved latitude and longitude.
     - Rendered the map image using the `Card.Img` component from React Bootstrap.

3. **Error Catching:**
   - Start time: 05-03-2023 9:30am
   - Finish time: 05-03-2023 11:00am
   - Actual time needed: 1.5 hours
   - Changes made:
     - Implemented error handling to catch and display any errors that occur during API requests.
     - Created the `errorDisplay` function to set the `errorMessageRerender` state and show error messages.
     - Added conditional rendering to show error messages and hide the map display in case of errors.

It's important to note that the provided time stamps are fictional and may not reflect actual development times. They are used here as an example for documenting iterative changes.

## Name of feature: **Location and Coordinates**

Estimate of time needed to complete: **1 day**

Start time: **5:30pm**

Finish time: **8pm**

Actual time needed to complete: **3 hours**

## Name of feature: **Map**

Estimate of time needed to complete: **1 day**

Start time: **1:00pm**

Finish time: **3pm**

Actual time needed to complete: **3 hours**

## Name of feature: **Error Catching**

Estimate of time needed to complete: **1 day**

Start time: **9:30am**

Finish time: **11am**

Actual time needed to complete: **2 hours**
