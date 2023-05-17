# Project Name

**Author**: Jared Plummer
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

Link: [My website](https://main--cheery-palmier-0de630.netlify.app/)

Trello:[Trello Link](https://trello.com/b/1R47rTDt/city-explorer)

## Overview

This application is a weather and movie exploration tool that allows users to search for weather forecasts and movie information based on a city name. The application integrates with external APIs to fetch weather data and movie data. The main purpose of this application is to provide users with an easy way to explore weather conditions and discover movies related to a specific city.

## Getting Started

To build and run this application on your own machine, follow these steps:

1. Clone the repository or download the source code.
2. Install the required dependencies by running `npm install` or `yarn install` in the project directory.
3. Set up the necessary environment variables. Create a `.env` file in the root directory and define the required variables (e.g., `REACT_APP_LOCATIONQI_API_KEY` for the LocationIQ API key).
4. Start the development server by running `npm start` or `yarn start`.
5. Access the application in your web browser at `http://localhost:3000` (or a different port if specified).

## Architecture
The application is built using React, a JavaScript library for building user interfaces. It leverages React Bootstrap for styling and components. The client-side code is written in JavaScript (ES6+). The backend server is built using Express, a Node.js web application framework. It handles API requests to retrieve weather and movie data from external APIs. The server uses Axios for making HTTP requests. The frontend and backend communicate via RESTful API endpoints.

The application architecture includes the following components:

- **App.js**: The main component that serves as the entry point for the application. It manages the state, handles API requests, and renders other components.

- **ExploreForm**: A form component that allows users to enter a city name and trigger the API requests to fetch weather and movie data.

- **Weather**: A component that displays weather forecast information for a specific city. It receives weather data as props and renders the forecast details.

- **CityInfoCard**: A component that displays city information, including a map image and other details.

- **Movie**: A modal component that displays movie data in a carousel format. It receives movie data as props and renders the movie details.

## Change Log

- 05-01-2023 5:30pm - Implemented location and coordinate retrieval functionality.

- 05-02-2023 1:00pm - Added map display using retrieved latitude and longitude.

- 05-03-2023 9:30am - Implemented error handling and display for API requests.

- 05-04-2023 2:30pm - Added movie API integration and modal component to display movie details.

## Credit and Collaborations

No credit or collaborations at this time.

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

Finish time: **10:30am**

Actual time needed to complete: **1 hour**

Actual time needed to complete: **2 hours**

Actual time needed to complete: **2 hours**

## Name of feature: **Making an API**

Estimate of time needed to complete: **5 hours**

Start time: **9:30am**

Finish time: **12:30am**

Actual time needed to complete: **2 hours**

## Name of feature: **Weather Bit API**

### Day 1

Estimate of time needed to complete: **4 hours**

Start time: **9:30am**

Finish time: **1:30pm**

Actual time needed to complete: _____

### Day 2

Estimate of time needed to complete: **7 hours**

Start time: **9:30am**

Finish time: **4:30pm**

Actual time needed to complete: _____

### Day 3

Estimate of time needed to complete: **2 hours**

Start time: **9:30am**

Finish time: **11:30pm**

Actual time needed to complete: **3 days**

## Name of feature: **Movie API**

Estimate of time needed to complete: **7 hours**

Start time: **9:30am**

Finish time: **4:30pm**

Actual time needed to complete: **7 hours**