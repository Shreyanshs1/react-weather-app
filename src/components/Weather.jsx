import React from 'react';
import { useState } from "react";
import './Weather.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity from '../assets/humidity.png';
import search_icon from '../assets/search.png';
import snow_icon from '../assets/snow.png';
import wind from '../assets/wind.png';
import rain_icon from '../assets/R.png'


export const Weather = () => {

    let api_key = "dd94f859a0e52d6e4767fddf735f04a7";

    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        // response will store the data from url
        let response = await fetch(url);
        // data will store the data in json format
        let data = await response.json();

        const location = document.getElementsByClassName("weather-location");
        const temprature = document.getElementsByClassName("weather-temp");
        const wind = document.getElementsByClassName("wind-rate");
        const humidity = document.getElementsByClassName("humidity-percent");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        temprature.innerHTML = Math.floor(data.main.tmep) + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon ==="01d" || data.weather[0].icon ==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }
  return (
    <div className='container'>
        <div className="top-bar">
            <div className="search-bar">
            <input type="text" className="cityInput" placeholder='Haa Bhai..' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" className='search-icon1' />
            </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" className='weath'/>
            </div>
            <div className="weather-temp fnt-m">24°C</div>
            <div className="weather-location fnt-2">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} alt="" />
                    <div className="data">
                        <div className="humidity-percent fnt-3">64%</div>
                        <div className="text fnt">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="" />
                    <div className="data">
                        <div className="wind-rate fnt-3">18km/h</div>
                        <div className="text fnt">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
