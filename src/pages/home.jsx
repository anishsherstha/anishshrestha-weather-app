import axios from "axios";
import { useEffect, useState } from "react";

import "./Home.css";


/* =========================================
   OPENWEATHER API KEY
========================================= */

const WEATHER_API_KEY =
  "f1837c15af7a0e18511ac2402f3f7d7c";


/* =========================================
   CITIES
========================================= */

const cities = [
  "Kathmandu",
  "Pokhara",
  "Biratnagar",
  "Gaighat",
  "Janakpur",
  "Butwal",
  "Chitwan",
  "Dharan",
  "Dubai",
  "London",
  "New York",
  "Tokyo",
  "Sydney",
  "Paris",
  "Rome",
  "New Delhi",
  "Beijing",
  "Moscow"
];


function Home() {

  /* =======================================
     STATES
  ======================================= */

  const [city, setCity] = useState(
    localStorage.getItem("city") || "Kathmandu"
  );

  const [weatherData, setWeatherData] =
    useState(null);

  const [unit, setUnit] = useState(
    localStorage.getItem("unit") || "metric"
  );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");


  /* =======================================
     FETCH WEATHER
  ======================================= */

  const fetchWeather = async () => {

    try {

      setLoading(true);
      setError("");

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: WEATHER_API_KEY,
            units: unit
          }
        }
      );

      setWeatherData(response.data);

      localStorage.setItem("city", city);

    } catch (err) {

      console.error(
        "Weather API Error:",
        err.response?.data || err.message
      );

      if (err.response?.status === 401) {

        setError(
          "Invalid or inactive OpenWeather API key."
        );

      } else if (err.response?.status === 404) {

        setError(
          "City not found. Please select another city."
        );

      } else {

        setError(
          "Unable to load weather information. Please check your internet connection."
        );
      }

      setWeatherData(null);

    } finally {

      setLoading(false);

    }
  };


  /* =======================================
     LOAD WEATHER
  ======================================= */

  useEffect(() => {

    fetchWeather();

  }, [city, unit]);


  /* =======================================
     CELSIUS / FAHRENHEIT TOGGLE
  ======================================= */

  const toggleUnit = () => {

    const newUnit =
      unit === "metric"
        ? "imperial"
        : "metric";

    setUnit(newUnit);

    localStorage.setItem(
      "unit",
      newUnit
    );
  };


  /* =======================================
     WEATHER CONDITION
  ======================================= */

  const getWeatherClass = () => {

    if (!weatherData) {
      return "weather-default";
    }

    const condition =
      weatherData.weather[0].main.toLowerCase();


    if (condition.includes("clear")) {
      return "weather-clear";
    }


    if (condition.includes("cloud")) {
      return "weather-clouds";
    }


    if (
      condition.includes("rain") ||
      condition.includes("drizzle")
    ) {
      return "weather-rain";
    }


    if (
      condition.includes("thunderstorm")
    ) {
      return "weather-storm";
    }


    if (condition.includes("snow")) {
      return "weather-snow";
    }


    if (
      condition.includes("mist") ||
      condition.includes("fog") ||
      condition.includes("haze")
    ) {
      return "weather-fog";
    }


    return "weather-default";
  };


  /* =======================================
     DAY / NIGHT
  ======================================= */

  const isDaytime = () => {

    if (!weatherData) {
      return true;
    }

    const current =
      weatherData.dt;

    const sunrise =
      weatherData.sys.sunrise;

    const sunset =
      weatherData.sys.sunset;

    return (
      current >= sunrise &&
      current < sunset
    );
  };


  /* =======================================
     VISUAL WEATHER
  ======================================= */

  const getVisualWeatherClass = () => {

    if (!weatherData) {
      return "weather-default";
    }

    const condition =
      weatherData.weather[0].main.toLowerCase();


    if (condition.includes("clear")) {

      return isDaytime()
        ? "clear-day"
        : "clear-night";
    }


    if (
      condition.includes("haze") ||
      condition.includes("mist") ||
      condition.includes("fog")
    ) {

      return "hazy-weather";
    }


    if (condition.includes("cloud")) {
      return "cloudy-weather";
    }


    if (
      condition.includes("rain") ||
      condition.includes("drizzle")
    ) {

      return "rainy-weather";
    }


    if (
      condition.includes("thunderstorm")
    ) {

      return "storm-weather";
    }


    if (condition.includes("snow")) {

      return "snowy-weather";
    }


    return "weather-default";
  };


  const weatherClass =
    getWeatherClass();

  const visualWeatherClass =
    getVisualWeatherClass();


  /* =======================================
     WIND UNIT
  ======================================= */

  const windUnit =
    unit === "metric"
      ? "m/s"
      : "mph";


  /* =======================================
     RENDER
  ======================================= */

  return (

    <div
      className={`home ${weatherClass} ${visualWeatherClass}`}
    >

      {/* =================================
          SUN
      ================================= */}

      {weatherData &&
        visualWeatherClass === "clear-day" && (

          <div className="weather-sun"></div>

        )}


      {/* =================================
          NIGHT
      ================================= */}

      {weatherData &&
        visualWeatherClass === "clear-night" && (

          <>

            <div className="weather-stars"></div>

            <div className="weather-moon"></div>

          </>

        )}


      {/* =================================
          CLOUDS
      ================================= */}

      {weatherData &&
        (
          visualWeatherClass === "cloudy-weather" ||
          visualWeatherClass === "hazy-weather"
        ) && (

          <div className="thick-clouds">

            <div className="cloud cloud-1"></div>

            <div className="cloud cloud-2"></div>

            <div className="cloud cloud-3"></div>

            <div className="cloud cloud-4"></div>

          </div>

        )}


      {/* =================================
          RAIN
      ================================= */}

      {weatherData &&
        weatherClass === "weather-rain" && (

          <div className="rain-effect">

            {Array.from({
              length: 35
            }).map((_, index) => (

              <span key={index}></span>

            ))}

          </div>

        )}


      {/* =================================
          SNOW
      ================================= */}

      {weatherData &&
        weatherClass === "weather-snow" && (

          <div className="snow-effect">

            {Array.from({
              length: 30
            }).map((_, index) => (

              <span key={index}>
                ❄
              </span>

            ))}

          </div>

        )}


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="home-container">

        {/* HEADER */}

        <div className="home-header">

          <div className="home-icon">
            🌤️
          </div>

          <h1>
            Weather Now
          </h1>

          <p>
            Check the current weather
            of your favorite city
          </p>

        </div>


        {/* =================================
            CONTROLS
        ================================= */}

        <div className="weather-controls">

          {/* CITY */}

          <select
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
          >

            {cities.map((cityName) => (

              <option
                key={cityName}
                value={cityName}
              >
                {cityName}
              </option>

            ))}

          </select>


          {/* CELSIUS / FAHRENHEIT */}

          <div className="unit-toggle">

            <span className={
              unit === "metric"
                ? "unit-active"
                : ""
            }>
              °C
            </span>


            <button
              type="button"
              className={
                `temperature-switch ${
                  unit === "imperial"
                    ? "fahrenheit"
                    : ""
                }`
              }
              onClick={toggleUnit}
              aria-label="Toggle temperature unit"
            >

              <span></span>

            </button>


            <span className={
              unit === "imperial"
                ? "unit-active"
                : ""
            }>
              °F
            </span>

          </div>

        </div>


        {/* =================================
            LOADING
        ================================= */}

        {loading && (

          <div className="status-message">

            <div className="loader"></div>

            <p>
              Loading weather...
            </p>

          </div>

        )}


        {/* =================================
            ERROR
        ================================= */}

        {error && !loading && (

          <div className="error-message">

            <strong>
              ⚠️ Weather Error
            </strong>

            <p>
              {error}
            </p>

            <button
              type="button"
              onClick={fetchWeather}
            >
              Try Again
            </button>

          </div>

        )}


        {/* =================================
            WEATHER DATA
        ================================= */}

        {weatherData &&
          !loading &&
          !error && (

          <div className="weather-board">

            {/* TOP */}

            <div className="weather-top">

              <div>

                <p className="location-label">
                  CURRENT WEATHER
                </p>

                <h2>
                  📍 {weatherData.name}
                </h2>

                <p className="country-code">
                  {weatherData.sys.country}
                </p>

              </div>


              <img
                className="weather-icon"
                src={
                  `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
                }
                alt={
                  weatherData.weather[0].description
                }
              />

            </div>


            {/* TEMPERATURE */}

            <div className="temperature-section">

              <div className="main-temperature">

                {Math.round(
                  weatherData.main.temp
                )}

                <span>
                  °{unit === "metric" ? "C" : "F"}
                </span>

              </div>


              <p className="weather-description">

                {weatherData.weather[0].description}

              </p>


              <p className="feels-like">

                Feels like{" "}

                {Math.round(
                  weatherData.main.feels_like
                )}

                °{unit === "metric" ? "C" : "F"}

              </p>

            </div>


            {/* DETAILS */}

            <div className="weather-details">


              <div className="weather-detail">

                <span>
                  💧
                </span>

                <strong>
                  {weatherData.main.humidity}%
                </strong>

                <small>
                  Humidity
                </small>

              </div>


              <div className="weather-detail">

                <span>
                  💨
                </span>

                <strong>
                  {weatherData.wind.speed}
                </strong>

                <small>
                  Wind ({windUnit})
                </small>

              </div>


              <div className="weather-detail">

                <span>
                  🌡️
                </span>

                <strong>
                  {weatherData.main.pressure}
                </strong>

                <small>
                  Pressure hPa
                </small>

              </div>


              <div className="weather-detail">

                <span>
                  👁️
                </span>

                <strong>
                  {(weatherData.visibility / 1000).toFixed(1)}
                  {" "}km
                </strong>

                <small>
                  Visibility
                </small>

              </div>


              <div className="weather-detail">

                <span>
                  ☁️
                </span>

                <strong>
                  {weatherData.clouds.all}%
                </strong>

                <small>
                  Cloudiness
                </small>

              </div>


              <div className="weather-detail">

                <span>
                  📊
                </span>

                <strong>
                  {Math.round(
                    weatherData.main.temp_min
                  )}°
                </strong>

                <small>
                  Minimum
                </small>

              </div>


              <div className="weather-detail">

                <span>
                  🔥
                </span>

                <strong>
                  {Math.round(
                    weatherData.main.temp_max
                  )}°
                </strong>

                <small>
                  Maximum
                </small>

              </div>


              <div className="weather-detail">

                <span>
                  🧭
                </span>

                <strong>
                  {weatherData.wind.deg}°
                </strong>

                <small>
                  Wind Direction
                </small>

              </div>

            </div>


            {/* SUN */}

            <div className="sun-info">

              <div>

                <span>
                  🌅
                </span>

                <strong>
                  Sunrise
                </strong>

                <p>
                  {new Date(
                    weatherData.sys.sunrise * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </p>

              </div>


              <div>

                <span>
                  🌇
                </span>

                <strong>
                  Sunset
                </strong>

                <p>
                  {new Date(
                    weatherData.sys.sunset * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Home;