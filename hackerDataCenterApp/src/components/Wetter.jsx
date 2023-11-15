import { useState, useEffect } from "react"
import "./Wetter.css"

const Wetter = () => {
  const [weatherData, setWeatherData] = useState()
  const [city, setCity] = useState("")
  const API_Key = "580c2c1d032e7ff14e18860609014030"

  useEffect(() => {}, []);

  useEffect(() => {
    console.log(city);
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric&lang=de`
        );
        const data = await res.json()
        console.log(data)
        setWeatherData(data)
      } catch (error) {
        console.log(error)
      }
    }
    city && fetchWeather();
  }, [city])

  const submitHandler = (e) => {
    e.preventDefault()
    setCity(e.target.cityInput.value)
  }

  const getWeatherIconUrl = (iconId) => {
    return `http://openweathermap.org/img/w/${iconId}.png`;
  };

  return (
    <section className="wetterSection">
        <h1>Wetter in deiner Stadt</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <input type="text" name="cityInput" placeholder="Trage deine Stadt ein" />
          <button type="submit">suchen</button>
        </form>
        {weatherData && (
          <div>
            <h2>{city}</h2>
            <div className="temp">
              <p>Aktuell {weatherData.main.temp}°C</p>
              <p>Gefühlt wie {weatherData.main.feels_like}°C</p>
            </div>
            <div className="weather">
              <p>{weatherData.weather[0].description}</p>
              <img src={getWeatherIconUrl(weatherData.weather[0].icon)} alt={weatherData.weather[0].description} width="70px" />
            </div>
          </div>
        )}
    </section>
  )
}

export default Wetter;