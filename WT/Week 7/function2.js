import Chart from 'chart.js/auto'; // loading all components

import { getAquisitionsByYear } from './api';

(async function() {
  function data_generate(func, from, to, step = 1, decimals = 2) {
    const array_x = [];
    const array_y = [];

    for (let x = from; x <= to; x += step) {
      array_x.push(Math.round(x * 10**decimals) / 10**decimals);
      array_y.push(eval(func));
    }

    return [array_x, array_y];
  }

  let array_x, array_y;
  try {
    const expr = "Math.cos(x)**2+Math.sin(x)+1";
    [array_x, array_y] = data_generate(expr, 0.10, 0.123, 0.002);
  } catch {
    const expr = "Math.cos(x)**2+Math.sin(x)+1";
    [array_x, array_y] = data_generate(expr, 0.10, 0.123, 0.002);
  }

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: array_x,
        datasets: [
          {
            label: 'Acquisitions by year',
            data: array_y
          }
        ]
      }
    }
  );

})();
