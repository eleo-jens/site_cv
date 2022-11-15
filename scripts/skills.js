import { Chart } from 'chart.js/auto';
import { getDimensions } from './api';

// https://www.chartjs.org/docs/latest/getting-started/usage.html

const chart = document.getElementById("myChart");

const myChart = new Chart(chart, {
  type: "bubble",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bubble Chart",
      },
    },
  },
});

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, rmin: 5, rmax: 15, min: 0, max: 100 };

const data = {
  datasets: [
    {
      label: "Dataset 1",
      data: Utils.bubbles(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: "Dataset 2",
      data: Utils.bubbles(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.orange,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
    },
  ],
};

const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.bubbles({count: DATA_COUNT, rmin: 5, rmax: 15, min: 0, max: 100});
        });
        chart.update();
      }
    },
    {
      name: 'Add Dataset',
      handler(chart) {
        const chartData = chart.data;
        const dsColor = Utils.namedColor(chartData.datasets.length);
        const newDataset = {
          label: 'Dataset ' + (chartData.datasets.length + 1),
          backgroundColor: Utils.transparentize(dsColor, 0.5),
          borderColor: dsColor,
          data: Utils.bubbles({count: DATA_COUNT, rmin: 5, rmax: 15, min: 0, max: 100}),
        };
        chart.data.datasets.push(newDataset);
        chart.update();
      }
    },
    {
      name: 'Add Data',
      handler(chart) {
        const chartData = chart.data;
        if (chartData.datasets.length > 0) {
  
          for (let index = 0; index < chartData.datasets.length; ++index) {
            chartData.datasets[index].data.push(Utils.bubbles({count: 1, rmin: 5, rmax: 15, min: 0, max: 100})[0]);
          }
  
          chart.update();
        }
      }
    },
    {
      name: 'Remove Dataset',
      handler(chart) {
        chart.data.datasets.pop();
        chart.update();
      }
    },
    {
      name: 'Remove Data',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data.pop();
        });
  
        chart.update();
      }
    }
  ];
