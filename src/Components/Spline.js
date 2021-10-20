import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1.00pm', '2.00pm', '3.00pm', '4.00pm'],
  datasets: [
    {
      label: 'Speed',
      data: [1, 15, 7, 5, 12, 3],
      fill: true,
      backgroundColor: '#2980B9',
      borderColor: '#2980B9',
      pointRadius: 2,
      tension: 0.4,

    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Spline = () => (
  <>
    <div className='header' style={{ height: "0.4cm" }} >
      <h5 className='title' >CPU Usage</h5>
      <div className='links'>
        <a
          className='btn btn-gh'
        >
        </a>
      </div>
    </div>
    <Line data={data} options={options} style={{ height: "7cm", width: "500px", marginTop: "-20px", }} />
  </>
);

export default Spline;