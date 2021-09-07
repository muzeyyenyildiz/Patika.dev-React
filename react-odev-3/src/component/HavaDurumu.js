import { useState, useEffect, useContext } from "react";
import MyContext from "../context/MyContext";
import axios from "axios";



function HavaDurumu() {
  const [weatherdata, setWeatherdata] = useState();
  const [loading, setLoading] = useState(true);
  const { city } = useContext(MyContext);

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;

    const lang = navigator.language.split("-")[0];
    console.log(lang);

    try {

      setLoading(true)

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${key}&lang=${lang}&units=metric`
      );
      setTimeout(() => {
        setWeatherdata(data);
        setLoading(false)
      }, 1000);
      console.log(data);
    } catch {
      setLoading(false)
      alert("Bir sorun oluştu!");
    }
  };

  useEffect(() => {
    const latidude = city.lat;
    const longitude = city.long;
    getWeatherData(latidude, longitude);
  }, [city]);

  if (loading) {
    return <p style={{color:"white"}}>Loading...</p>;
  }

  return (
    <div className="container">
      <p> </p>
      {weatherdata.daily.map((item, index) => (
        <div key={index} className="weather-container">
          <h4>
            {new Date(item.dt * 1000).toLocaleString("tr-TR", {
              weekday: "long",
            })}
          </h4>
          <div className="img-container">
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            />
          </div>
          <h5>{item.weather[0].description}</h5>
          <div>{`${item.temp.max}°C`}</div>
          <div>{`${item.temp.min}°C`}</div>
        </div>
      ))}
    </div>
  );
}

export default HavaDurumu;
