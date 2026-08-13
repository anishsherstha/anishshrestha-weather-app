WeatherNow --- Weather Application

A responsive weather application built with React.js that allows
users to view current weather information for cities around the world.
The application provides a clean and simple interface with light/dark
mode support and Celsius/Fahrenheit temperature conversion.

Project Name

anishshrestha-weather-app

Overview

WeatherNow is a React-based weather application developed as a web
development project. It connects to a weather API to retrieve current
weather information and presents the data in an easy-to-understand
interface.

The application focuses on providing users with:

Current weather information

City-based weather selection

Celsius and Fahrenheit temperature conversion

Light and dark themes

Responsive design

Home, About, and Contact pages

Simple and user-friendly navigation

Note: The project does not include the REST Countries API, a
country list feature, or a search feature.

Features

1. Current Weather

The application retrieves current weather information for the selected
city using a weather API.

Weather information can include:

City name

Country

Current temperature

Weather condition

Weather description

Feels-like temperature

Humidity

Wind speed

Weather icon

2. Celsius / Fahrenheit Toggle

Users can switch the displayed temperature between:

Celsius (°C)

Fahrenheit (°F)

The temperature unit can be changed directly from the weather section.

3. Light and Dark Mode

The application provides two display themes:

Light Mode

Dark Mode

The theme toggle changes the appearance of the application to improve
readability and user experience.

4. Responsive Design

The application is designed to work on:

Desktop computers

Laptops

Tablets

Mobile devices

CSS media queries are used to adapt the layout to different screen
sizes.

5. Navigation

The application contains navigation between the main pages:

Home

About

Contact

6. Contact Page

The Contact page provides a simple interface where users can enter
their:

Name

Email

Subject

Message

Social/contact links can also be provided where required.

7. About Page

The About page explains the purpose of the application and provides
information about the project and its technologies.

Technologies Used

Technology     Purpose

React.js       Building the user interface
JavaScript     Application logic
HTML5          Page structure
CSS3           Styling and responsive design
Axios          Sending HTTP requests
React Router   Page navigation
Weather API    Retrieving weather information
Vite           Development and build tool

API

The application uses a weather API to retrieve current weather
information.

The API request is based on the selected city and temperature unit.

Important

Do not publish your private API key in a public GitHub repository.

If your project currently contains an API key directly in the source
code, replace it with a placeholder before uploading the project
publicly.

Example:

const API_KEY = "YOUR_WEATHER_API_KEY";

The actual API key should be kept private.

Project Structure

A typical project structure is:

anishshrestha-weather-app/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

The exact structure may vary depending on the final project
implementation.

Installation

1. Clone the Repository

git clone https://github.com/anishshrestha/anishshrestha-weather-app.git

Then move into the project directory:

cd anishshrestha-weather-app

2. Install Dependencies

Run:

npm install

3. Start the Development Server

Run:

npm run dev

Vite will provide a local development address, normally similar to:

http://localhost:5173/

Open the address in a web browser.

Available Scripts

Start Development Server

npm run dev

Runs the application in development mode.

Build the Application

npm run build

Creates an optimized production build.

Preview Production Build

npm run preview

Previews the production build locally.

How the Application Works

The user opens the WeatherNow application.

The Home page is displayed.

A city is selected.

The React application sends a request to the weather API.

The API returns the current weather data.

React updates the page with the received information.

The user can switch between Celsius and Fahrenheit.

The user can switch between light and dark mode.

The user can navigate to the About or Contact page.

User Interface

The main interface contains:

Application logo/name

Navigation menu

Theme toggle

Weather section

City selection

Temperature unit toggle

Weather information card

The interface is designed to keep the most important weather information
visible and easy to understand.

Error Handling

The application handles common API-related problems such as:

Invalid city

API request failure

Internet connection problems

Missing weather data

API service errors

When weather information cannot be retrieved, an appropriate error
message is displayed instead of leaving the page blank.

Responsive Design

The application uses responsive CSS so that the layout can adapt to
different screen sizes.

For smaller screens:

Navigation items can wrap or stack

Weather content adjusts to the available width

Buttons and controls remain accessible

Cards resize to fit the screen

Project Limitations

The current version intentionally does not include:

REST Countries API

Country list API

Country selection based on REST Countries

Search functionality

User authentication

Weather history

Weather forecasting

Database storage

The project is focused mainly on displaying current weather information.

Future Improvements

Possible future improvements include:

5-day weather forecast

Automatic location detection

Favorite cities

Recent cities

Weather charts

Weather alerts

Improved animations

More detailed weather statistics

Better mobile navigation

Accessibility improvements

Learning Objectives

This project demonstrates practical knowledge of:

React components

React state management

React hooks such as useState and useEffect

API integration

HTTP requests using Axios

Conditional rendering

React Router

CSS styling

Responsive web design

Theme switching

Temperature unit conversion

Error handling

Author

Anish Shrestha

Bachelor of Information Technology (BIT)

Model Institute of Technology (MIT), Nepal

License

This project was created for educational and academic purposes.

You may modify and improve the project for learning and personal
development.

Acknowledgements

React.js documentation

Vite documentation

Weather API documentation

Axios documentation

React Router documentation

Conclusion

WeatherNow is a simple and responsive React weather application that
demonstrates how a modern web application can communicate with an
external API and display real-time weather information.

The project combines React, JavaScript, Axios, CSS, and responsive
design to create a practical weather application with light/dark mode
and Celsius/Fahrenheit temperature conversion.