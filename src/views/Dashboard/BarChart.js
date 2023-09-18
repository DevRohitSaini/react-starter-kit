import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ data }) => {
  const { series, labels } = data;

  // Options for the chart
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: labels
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    }
  };

  return (
    <ReactApexChart options={options} series={[{ data: series }]} type="bar" height={350} />
  );
};

export default BarChart;