import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelected } from "../utils/weatherSlice";

const WeatherCard = ({ temp_min, temp_max, desc, index }) => {
  const selected = useSelector((store) => store.weather.selected);
  const dispatch=useDispatch()
  const currentDate = new Date();
  const dayOfWeek = (currentDate.getDay() + index) % 7;
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  // console.log(dayOfWeek+index)

  const handleSelected=()=>{
    dispatch(changeSelected(index))
  }
  return (
    <div
      className={`flex flex-col justify-center  items-center p-4 my-4 w-1/3 md:w-1/5 ${
        selected == index ? "border-indigo-500 border-2 bg-orange-100" : null
      }`}
      onClick={handleSelected}
    >
      <p className="font-bold text-sm">{daysOfWeek[dayOfWeek]}</p>
      <p className="text-xs flex flex-col justify-center md:block">
       <span className="font-bold text-sm"> {Math.floor(temp_max)}° </span>
       <span>{temp_min.toFixed(1)}°</span>
      </p>
      <p>{desc?.includes("lear") ? "🌞":desc.includes("loud")?"⛅️":"🌧️"}</p>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default WeatherCard;
