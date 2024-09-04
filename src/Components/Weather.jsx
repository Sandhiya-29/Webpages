import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Weather.css';
import moment from 'moment-timezone';
import searchicon from '../assets/icons8-search-50.png';
import clear_icon from '../assets/icons8-sun-behind-cloud-48.png';
import cloud_icon from '../assets/icons8-rain-48.png';
import drizzle_icon from '../assets/icons8-storm-94.png';
import rain_icon from '../assets/icons8-sun-48.png';
import snow_icon from '../assets/icons8-snow-94.png';
import humidity from '../assets/icons8-humidity-64 (1).png';
import wind from '../assets/icons8-wind-47.png';

const Weather = () => {
    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(null);
    const [currentTime, setCurrentTime] = useState('');
    const [locationCoords, setLocationCoords] = useState({ lat: 51.505, lng: -0.09 });
    const [locationDetails, setLocationDetails] = useState({ city: '', country: '', state: '', capital: '' });

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    };

    const search = async (city) => {
        if (city === "") {
            alert("Enter city name");
            return;
        }

        try {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const weatherResponse = await fetch(weatherUrl);
            const data = await weatherResponse.json();

            if (!weatherResponse.ok) {
                alert(data.message);
                return;
            }

            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            const updatedWeatherData = {
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
                coords: {
                    lat: data.coord.lat,
                    lng: data.coord.lon,
                }
            };

            setWeatherData(updatedWeatherData);
            setLocationCoords({ lat: data.coord.lat, lng: data.coord.lon });

            // const localTime = moment.utc().add(data.timezone, 'seconds').
            // format('YYYY-MM-DD HH:mm:ss');
            // setCurrentTime(localTime);

            const localTime = moment.utc().add(data.timezone, 'seconds').
            format('MMM D, YYYY HH:mm');
            setCurrentTime(localTime);

            // Fetch geocode data after weather data is set
            fetchGeocodeData(updatedWeatherData.coords.lat, updatedWeatherData.coords.lng, updatedWeatherData.location);

        } catch (error) {
            setWeatherData(null);
            console.error("Error in fetching weather data:", error);
        }
    };

    const fetchGeocodeData = async (lat, lng, location) => {
        try {
            const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${import.meta.env.VITE_GEOCODE_API_KEY}`;
            const geocodeResponse = await fetch(geocodeUrl);
            const geocodeData = await geocodeResponse.json();

            if (geocodeData.results.length > 0) {
                const details = geocodeData.results[0].components;
                setLocationDetails({
                    city: details.city || location,
                    country: details.country || '',
                    state: details.state || '',
                  
                });
            } else {
                setLocationDetails({ city: location, country: '', state: '' },
                               {country: location, city: '',state: '' }
                );
            }
        } catch (error) {
            console.error("Error in fetching geocode data:", error);
        }
    };

    useEffect(() => {
        search("Singapore");
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search(inputRef.current.value);
        }
    };

    const MapUpdater = ({ coords }) => {
        const map = useMap();
        useEffect(() => {
            map.setView(coords, 10);  // Update the map view
        }, [coords, map]);
        return null;
    };

    return (
        <div className='weather'>
            <div className="search-bar">
            <input ref={inputRef} className="search" type="text" placeholder='search' onKeyDown={handleKeyDown} />
                <img src={searchicon} className='search-icon' onClick={() => search(inputRef.current.value)} alt="Search" />
            </div>

            <div>
                {weatherData && (
                    <>
                        <div className='weather-app'>
                            <div className='weather'>
                                <p className="current-time"> {currentTime}</p>
                               
                                <img src={weatherData.icon} alt="" className="weather-icon" />
                                <p className="temprature">{weatherData.temperature}°c</p>
                                <p className="location">{weatherData.location}</p>
                                <div className="weather-data">
                                    <div className="col">
                                        <img src={humidity} alt="" />
                                        <div>
                                            <p>{weatherData.humidity} %</p>
                                            <span>Humidity</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <img src={wind} alt="" />
                                        <div>
                                            <p>{weatherData.windSpeed} km/h</p>
                                            <span>Wind Speed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='map'>
                                <MapContainer center={locationCoords} zoom={10} style={{ height: "300px", width: "100%" }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; OpenStreetMap contributors"
                                    />
                                    <Marker position={locationCoords}>
                                        <Popup>
                                            {weatherData.location}
                                        </Popup>
                                    </Marker>
                                    <MapUpdater coords={locationCoords} />
                                </MapContainer>
                            </div>
                            <div className="location-details">
                                <p><strong>City:</strong> {locationDetails.city}</p>
                                <p><strong>Country:</strong> {locationDetails.country}</p>
                                <p><strong>State:</strong> {locationDetails.state}</p>
                            
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Weather;
