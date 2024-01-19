import React from 'react'
import { useSelector } from 'react-redux'
import WeatherCard from './WeatherCard'

const DailyWeatherContainer = () => {

    const weather=useSelector((store)=>store.weather.dailyweather)
  return (
    <div className='flex overflow-x-scroll'>
      {weather?.map((item,idx)=><WeatherCard key={idx} index={idx} temp_min={weather[idx]?.temp?.min} temp_max={weather[idx]?.temp?.max} desc={weather[idx]?.weather[0]?.main}/>)}
      
    </div>
  )
}

export default DailyWeatherContainer