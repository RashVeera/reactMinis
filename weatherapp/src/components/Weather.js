import React, { useEffect, useState,useRef } from 'react'
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import humidity from "../assets/humidity.png"
import windspeed from "../assets/wind.png"

const Weather = () => {
    const [weatherdata,setweatherdata]=useState(false)
    const inputRef=useRef("")
    
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
    "13n": snow_icon}

    const search = async (city) =>{
        if(city===""){
            alert("Enter a valid city name")
            return;
        }
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            
            const data = await response.json()
            if(!response.ok){
                alert(data.message)
            }
            const icon=data.weather[0].icon
            const alt_icon=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            setweatherdata({
                icon:allIcons[icon] || alt_icon,
                temp:Math.floor(data.main.temp),
                name:data.name,
                humidity:data.main.humidity,
                windspeed:data.wind.speed
                })
            
            inputRef.current.value=''
        }
        catch(error){
            setweatherdata(false)
        }
       
    }

    useEffect(()=>{
        search("London")
    },[])



  return (
    <div className='weather-app'>
        <div className='weather-card'>
        <div className='search-bar'>
        <input ref={inputRef} type='search' placeholder='Search' />
        <img  src={search_icon} alt='search-icon' onClick={()=>{search(inputRef.current.value)}}/>
        </div>
       {
        weatherdata && <>
         <img src={weatherdata.icon} alt='clear-weather' className='weatherDetails' />
        <p className='degree'>{weatherdata.temp}°C</p>
        <p className='city'>{weatherdata.name}</p>
        <div className='weatherCondition'>
        <div className='weatherConditionDetails'>
            <img src={humidity} alt='humidity'/>
            <div className='details'>
                <p>{weatherdata.humidity} %</p>
                <p>Humidity</p>
            </div>
        </div>
        <div className='weatherConditionDetails'>
            <img src={windspeed} alt='windspeed'/>
            <div className='details'>
                <p>{weatherdata.windspeed} Km/h</p>
                <p>Wind Speed</p>
            </div>
        </div>
        </div>

        </> 
       }
        </div>
    </div>
  )
}

export default Weather