import React, { useEffect, useState, useRef } from 'react';
import './Weather.css';
import searchicon from '../assets/icons8-search-50.png';
import clear_icon from '../assets/icons8-sun-behind-cloud-48.png';
import cloud_icon from '../assets/icons8-rain-48.png';
import drizzle_icon from '../assets/icons8-storm-94.png';
import rain_icon from '../assets/icons8-sun-48.png';
import snow_icon from '../assets/icons8-snow-94.png';
import humidity from '../assets/icons8-humidity-64 (1).png'
import wind from '../assets/icons8-wind-47.png';

const Weather = () => {

       const inputRef = useRef();
       const [weatherData, setWeatherData]  = useState(false);
       const [currentDateTime, setCurrentDateTime] = useState(new Date());


       const allIcons ={

        "o1d" : clear_icon,
        "01n" : clear_icon,
        "02d" : cloud_icon,
        "02n" : cloud_icon,
        "03d" : cloud_icon,
        "03n" : cloud_icon,
        "04d" : drizzle_icon,
        "04n" : drizzle_icon,
        "09d" : rain_icon,
        "09n" : rain_icon,
        "10d" : rain_icon,
        "10n" : rain_icon,
        "13d" : snow_icon,
        "13n" : snow_icon,
       }

       const search = async (city)=>{
        if(city === ""){
            alert("Enter city name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response =await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
            })
        } catch(error){
            setWeatherData(false);
            console.error("Error in fetching weather data");
        }
    }

     useEffect(()=>{
        search("Singapore");
     },[]);
   
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000)
        return () =>  clearInterval(timer);
    }, []);
     
  return (
    <div className='weather'>
         <div className="search-bar">
          <input ref={inputRef} className="search" type="text" placeholder='search' /> 
          <img src={searchicon} className='search-icon' onClick={()=>search(inputRef.current.value)}/>
         </div>
         <p className="date-time">{currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}</p>
         <div>
         {weatherData?<><img src={weatherData.icon} alt="" className="weather-icon"/>
            <p className="temprature">{weatherData.temperature}°c</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
            <div className="col">
                <img src={humidity} alt=""/>
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
                </div>
                <div className="col">
                <img src={wind} alt=""/>
                <div>
                    <p>{weatherData.windSpeed} km/h</p>
                    <span>Wind Speed</span>
                </div>
                </div>
            </div></>:<></>}
          
          </div>
        
    </div>
  )
}

export default Weather
