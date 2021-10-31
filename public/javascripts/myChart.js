const data = {
  labels: [],
  datasets: [
    {
      axis: "y",
      data: [],
      fill: false,
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data,
  options: {
    indexAxis: "y",
    scales: {
      x: {
        title: {
          display: true,
          text: "X sacale text",
          font: {
            size: 18,
          },
          padding: 20,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Chart Title here",
        font: {
          size: 24,
        },
        padding: 20,
      },
      legend: {
        display: false,
      },
    },
  },
};

function createChart(selector) {
  return new Chart(document.querySelector(selector), config);
}

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
    dataset.backgroundColor.push(getRandomColor());
    dataset.borderColor.push(getRandomColor());
  });
  chart.update();
}

function removeAllData(chart) {
  chart.data.labels = [];
  chart.data.datasets.forEach((dataset) => {
    dataset.data = [];
    dataset.backgroundColor = [];
    dataset.borderColor = [];
  });

  chart.update();
}
