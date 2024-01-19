import React from "react";
import { useSelector } from "react-redux";
import { cloudy, rainy, sunny } from "../utils/constants";
import TemperatureChart from "./Chart";

const TodayCard = () => {

  const weatherDetail=useSelector(store=>store.weather.dailyweather)
  const index=useSelector(store=>store.weather.selected)
  const weatherDesc=weatherDetail[index]?.weather[0]?.main

  const sunriseDate = new Date(weatherDetail[index]?.sunrise * 1000);
  const sunsetDate = new Date(weatherDetail[index]?.sunset * 1000);

  const formattedSunrise = sunriseDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  const formattedSunset = sunsetDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  return (
    <div className=" md:w-7/8 shadow p-2 md:p-8">
      <div className="flex md:mx-4 items-center md:mb-8">
        <p className=" text-3xl mx-2 md:text-6xl font-bold">{Math.floor(weatherDetail[index]?.temp?.max)} °C </p>
        <p className=" p-4 md:mx-12 w-24">{weatherDesc?.includes("ain")?<img src={rainy} alt="rainyday" className="w-48"/>:weatherDesc?.includes("lear")?<img src={sunny} alt="sunnyday" className="w-48"/>:<img src={cloudy} alt="cloudyday" className="w-48"/>}</p>
      </div>
      <div>
        <TemperatureChart/>
      </div>
      <div className="flex my-4">
        <div className="bg-blue-100 mx-2 md:mx-4 w-1/2 md:w-1/3 py-4">
          <p className="md:text-xl font-bold px-2 md:px-4"> Pressure</p>
          <p className="md:xl px-2 md:px-4">{weatherDetail[index]?.pressure} hpa</p>
        </div>
        <div className="bg-blue-100 mx-2 md:mx-4 w-1/2 md:w-1/3 py-4 ">
          <p className="md:text-xl font-bold px-2 md:px-4">Humidity</p>
          <p className="md:xl px-2 md:px-4">{weatherDetail[index]?.humidity}%</p>
        </div>
      </div>

      <div className="flex justify-between">
          <div>
            <p className="md:text-xl font-bold ">Sunrise</p>
            <p>{formattedSunrise}</p>
          </div>
          <div>
            <p className="md:text-xl font-bold">Sunset</p>
            <p>{formattedSunset}</p>
          </div>
      </div>
    </div>
  );
};

export default TodayCard;
