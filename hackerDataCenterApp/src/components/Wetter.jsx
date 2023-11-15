import { useState, useEffect } from "react"
import styles from "./wetter.module.css"

const Wetter = () => {
  const [weatherData, setWeatherData] = useState()
  const [city, setCity] = useState("Germany")
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
    <section className={styles.wetterSection}>
        <h1 className={styles.h1}>{city}</h1>
        <form onSubmit={(e) => submitHandler(e)} className={styles.form}>
          <input type="text" name="cityInput" placeholder="Trage deine Stadt ein" />
          <button type="submit">suchen</button>
        </form>
        {weatherData && (
          <div>
            <div className={styles.temp}>
              <p>Aktuell: {weatherData.main.temp}°C</p>
              <p>Gefühlt: {weatherData.main.feels_like}°C</p>
            </div>
            <div className={styles.weather}>
              <p>{weatherData.weather[0].description}</p>
              <img src={getWeatherIconUrl(weatherData.weather[0].icon)} alt={weatherData.weather[0].description} />
            </div>
          </div>
        )}
    </section>
  )
}

export default Wetter;