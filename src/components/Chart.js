import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import the Chart module
import { useSelector } from 'react-redux';

const TemperatureChart = () => {

  const weatherDetail=useSelector(store=>store.weather.dailyweather)
  const index=useSelector(store=>store.weather.selected)

  const temperatureData = [
    { time: '6:00 AM', temperature: weatherDetail[index]?.temp.morn },
    { time: '10:00 AM', temperature: weatherDetail[index]?.temp.day },
    { time: '2:00 PM', temperature: weatherDetail[index]?.temp.max },
    { time: '6:00 PM', temperature: weatherDetail[index]?.temp.eve },
    { time: '10:00 PM', temperature: weatherDetail[index]?.temp.night },
    { time: '2:00 PM', temperature: weatherDetail[index]?.temp.min },
  ];

  const data = {
    labels: temperatureData.map((entry) => entry.time),
    datasets: [
      {
        label: 'Temperature Variation',
        data: temperatureData.map((entry) => entry.temperature),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: temperatureData.map((entry) => entry.time),
        ticks: {
          stepSize: 4, 
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default TemperatureChart;
