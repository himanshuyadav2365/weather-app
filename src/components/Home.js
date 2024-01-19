import React from 'react'
import TemperatureChart from './Chart'
import Chart from './Chart'
import DailyWeatherContainer from './DailyWeatherContainer'
import Search from './Search'
import TodayCard from './TodayCard'

const Home = () => {
  return (
    <div className='mx-auto bg-white-700 w-5/6 md:w-[70%] p-4 md:p-8 my-8 md:my-24  shadow rounded-lg'>
        <Search/>
        <DailyWeatherContainer/>
        <TodayCard/>
    </div>
  )
}

export default Home