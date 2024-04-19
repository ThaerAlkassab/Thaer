import Chart from 'chart.js/auto' /* loading all components */

(async function() {
  const data = [
    { year: 2018, count: 10 },
    { year: 2019, count: 20 },
    { year: 2020, count: 15 },
    { year: 2021, count: 25 },
    { year: 2022, count: 22 },
    { year: 2023, count: 30 },
    { year: 2024, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();