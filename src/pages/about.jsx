import "./About.css";

function About() {

  return (

    <div className="about-container">

      <section className="about-hero">

        <div className="about-icon">
          🌤️
        </div>

        <h1>
          About Weather
        </h1>

        <p>
          WeatherNow is a React-based weather
          application that provides current
          weather information for cities around
          the world using the OpenWeather API.
        </p>

      </section>


      <section className="about-section">

        <h2>
          💡 Project Idea
        </h2>

        <p>
          WeatherNow was developed to provide
          users with an easy and attractive way
          to check current weather information.
        </p>

        <p>
          Users can select different cities and
          view temperature, humidity, wind speed,
          pressure, visibility, cloudiness,
          sunrise, sunset and weather conditions.
        </p>

        <p>
          The application also provides a
          Celsius/Fahrenheit switch and a global
          Light/Dark theme switch.
        </p>

      </section>


      <section className="about-section">

        <h2>
          💻 Technologies Used
        </h2>

        <div className="technology-grid">

          <div className="technology-card">

            <div>⚛️</div>

            <h3>
              React
            </h3>

            <p>
              Used to build the interactive
              user interface.
            </p>

          </div>


          <div className="technology-card">

            <div>🟨</div>

            <h3>
              JavaScript
            </h3>

            <p>
              Used for application logic,
              state management and events.
            </p>

          </div>


          <div className="technology-card">

            <div>🎨</div>

            <h3>
              CSS3
            </h3>

            <p>
              Used to create responsive layouts,
              animations and themes.
            </p>

          </div>


          <div className="technology-card">

            <div>🌐</div>

            <h3>
              OpenWeather API
            </h3>

            <p>
              Provides current weather data
              for selected cities.
            </p>

          </div>


          <div className="technology-card">

            <div>📦</div>

            <h3>
              Axios
            </h3>

            <p>
              Used to send HTTP requests to
              the weather API.
            </p>

          </div>


          <div className="technology-card">

            <div>🧭</div>

            <h3>
              React Router
            </h3>

            <p>
              Used for Home, About and Contact
              page navigation.
            </p>

          </div>


          <div className="technology-card">

            <div>💾</div>

            <h3>
              Local Storage
            </h3>

            <p>
              Stores the selected theme,
              city and temperature unit.
            </p>

          </div>


          <div className="technology-card">

            <div>⚡</div>

            <h3>
              Vite
            </h3>

            <p>
              Used as the React development
              and build environment.
            </p>

          </div>

        </div>

      </section>


      <section className="about-section">

        <h2>
          ⚛️ React Concepts Used
        </h2>

        <div className="concept-list">

          <div>

            <strong>
              useState()
            </strong>

            <p>
              Stores city, weather data,
              theme, unit and loading state.
            </p>

          </div>


          <div>

            <strong>
              useEffect()
            </strong>

            <p>
              Automatically requests weather
              when city or unit changes.
            </p>

          </div>


          <div>

            <strong>
              Components
            </strong>

            <p>
              Navbar, Home, About and Contact
              are separate components.
            </p>

          </div>


          <div>

            <strong>
              React Router
            </strong>

            <p>
              Provides navigation between
              different pages.
            </p>

          </div>


          <div>

            <strong>
              Conditional Rendering
            </strong>

            <p>
              Displays loading, errors and
              weather content according to state.
            </p>

          </div>

        </div>

      </section>


      <section className="about-section">

        <h2>
          🔄 How WeatherNow Works
        </h2>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <h3>Select City</h3>
            <p>
              User selects a city.
            </p>
          </div>


          <div className="step">
            <span>2</span>
            <h3>API Request</h3>
            <p>
              Axios sends a request.
            </p>
          </div>


          <div className="step">
            <span>3</span>
            <h3>Receive Data</h3>
            <p>
              OpenWeather returns current data.
            </p>
          </div>


          <div className="step">
            <span>4</span>
            <h3>Update State</h3>
            <p>
              React stores the response.
            </p>
          </div>


          <div className="step">
            <span>5</span>
            <h3>Display</h3>
            <p>
              Weather information is displayed.
            </p>
          </div>

        </div>

      </section>


      <section className="about-section">

        <h2>
          ✨ Main Features
        </h2>

        <div className="feature-grid">

          <div>🌡️ Current Temperature</div>
          <div>🌧️ Weather Condition</div>
          <div>💧 Humidity</div>
          <div>💨 Wind Speed</div>
          <div>📊 Atmospheric Pressure</div>
          <div>👁️ Visibility</div>
          <div>☁️ Cloudiness</div>
          <div>🌅 Sunrise</div>
          <div>🌇 Sunset</div>
          <div>🌙 Dark Mode</div>
          <div>☀️ Light Mode</div>
          <div>🌡️ Celsius / Fahrenheit</div>
          <div>📱 Responsive Design</div>
          <div>🌍 Multiple Cities</div>
          <div>🌦️ Dynamic Weather Background</div>
        </div>

      </section>


      <section className="about-section">

        <h2>
          🚀 Future Improvements
        </h2>

        <ul className="future-list">

          <li>
            Add a 5-day weather forecast.
          </li>

          <li>
            Add automatic location detection.
          </li>

          <li>
            Add hourly weather information.
          </li>

          <li>
            Add weather alerts.
          </li>

          <li>
            Add temperature charts.
          </li>

          <li>
            Improve accessibility.
          </li>

        </ul>

      </section>


      <section className="about-final">

        <h2>
          🌍 Why WeatherNow?
        </h2>

        <p>
          WeatherNow combines React, JavaScript,
          APIs, CSS, React Router and browser
          storage to create a complete interactive
          weather application.
        </p>

      </section>

    </div>

  );
}

export default About;