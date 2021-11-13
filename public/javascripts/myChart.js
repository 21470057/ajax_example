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

const config1 = {
  type: "bar",
  data,
  options: {
    indexAxis: "y",
    scales: {
      x: {
        title: {
          display: true,
          text: "No. of corresponding Interviewee",
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
        text: "Age Group of Interviewee",
        font: {
          size: 16,
        },
        padding: 20,
      },
      legend: {
        display: false,
      },
    },
  },
};

const config2 = {
  type: "line",
  data,
  options: {
    indexAxis: "y",
    scales: {
      x: {
        title: {
          display: true,
          text: "No. of corresponding Interviewee",
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
        text: "Expected time to close Border Control",
        font: {
          size: 16,
        },
        padding: 20,
      },
      legend: {
        display: false,
      },
    },
  },
};

const config3 = {
  type: "pie",
  data,
  options: {
    indexAxis: "y",
    scales: {
      x: {
        title: {
          display: true,
          text: "No. of corresponding Interviewee",
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
        text: "Most wanted travel place",
        font: {
          size: 16,
        },
        padding: 20,
      },
      legend: {
        display: false,
      },
    },
  },
};


function createChart1(selector) {
  return new Chart(document.querySelector(selector), config1);
}

function createChart2(selector) {
  return new Chart(document.querySelector(selector), config2);
}

function createChart3(selector) {
  return new Chart(document.querySelector(selector), config3);
}

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    current_set = dataset.data;
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
