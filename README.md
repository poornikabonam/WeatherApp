# Weather App

A simple and elegant weather application built with React that provides current weather details and a 5-day forecast for any city. The application includes a visually appealing interface, interactive weather cards, and a custom info section about the PM Accelerator.

## Features

- **Current Weather:** Displays the current weather with details like temperature, weather description, humidity, and wind speed.
- **5-Day Forecast:** Provides a 5-day weather forecast with clickable cards to view more details for each day.
- **Interactive UI:** Includes icons and visual elements for a better user experience.
- **Info Section:** A custom info button that shows a brief description of the PM Accelerator program and a link to the LinkedIn page.
- **Responsive Design:** The app is responsive and works well on both desktop and mobile devices.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **OpenWeatherMap API**: Used for fetching current weather data and 5-day forecasts.
- **CSS**: For styling the application.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) as your package manager.

### Steps to Run

1. **Clone the Repository**:

```
git clone https://github.com/your-username/weather-app.git 
cd weather-app
```


2. **Install Dependencies**:
Run the following command to install the required dependencies:
```
npm install
```


3. **Get Your OpenWeatherMap API Key**:
- Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) to get your free API key.

4. **Add Your API Key**:
- In the `Weather.js` file, replace the placeholder with your OpenWeatherMap API key:
```javascript
const apiKey = 'YOUR_API_KEY_HERE';

5. **Run the Application: Start the development server by running:**
```npm start```