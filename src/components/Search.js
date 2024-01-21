import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoordinates,
  addDailyWeater,
  changeSelected,
} from "../utils/weatherSlice";
import Suggestion from "./Suggestion";

const Search = () => {
  const [city, setCity] = useState("Lucknow");
  const dispatch = useDispatch();
  const coordinates = useSelector((store) => store.weather.coordinates);

  const handleCityChange = (e) => {
    setCity(e.target.value.toUpperCase());
  };
  const key = "e4c70ce6a6821649a416cb9521d5f4f8";

  const fetchCoordinates = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
    const data = await response.json();
    console.log("new coordinates ", data);
    const { lat, lon } = data.coord;
    dispatch(addCoordinates({ lat, lon }));
  };

  const fetchWeatherDetails = async () => {
    console.log("count");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=current,minutelyalerts&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8`
      );
      const data = await response.json();
      console.log(data);
      dispatch(addDailyWeater(data.daily));
      dispatch(changeSelected(0));
    } catch {
      alert("YOUR CITY IS NOT AVAIABLE/ENTER CORRECT CITY");
    }
  };

  const getUserlocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      (p) => {
        const { latitude, longitude } = p.coords;
        console.log(latitude, longitude);
        // dispatch(addCoordinates({ latitude, longitude }));
      },
      () => {
        console.log("some error");
      }
    );
  };

  useEffect(()=>{
      getUserlocation()
  },[])

  useEffect(() => {
    fetchWeatherDetails();
  }, [coordinates]);

  return (
    <div className="w-full">
      <form className="relative flex font-bold justify-center border-2 border-indigo-500 rounded-lg md:rounded-lg">
        <img
          className="w-8 md:mx-4"
          alt="location"
          src="https://as2.ftcdn.net/v2/jpg/02/54/62/25/1000_F_254622588_6OClHyYpak64rVI8y9QVjUvDlStsDEu9.jpg"
        />
        <input
          type="text"
          placeholder="Search"
          value={city}
          onChange={handleCityChange}
          className="w-full  bg-white h-10 px-5 text-sm focus:outline-none focus:border-indigo-500"
        />
        <button onClick={fetchCoordinates}>
          <img
            className="w-8 mx-8"
            alt="search-button"
            src="https://t4.ftcdn.net/jpg/05/58/27/27/240_F_558272798_DNqj4q2TXE7EsDM9Zp2wdyap8gzatwlF.jpg"
          />
        </button>
      </form>

      <div className="py-4 ">
        // <Suggestion />
      </div>
    </div>
  );
};

export default Search;
