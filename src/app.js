const app = document.getElementById('app');

function render(state) {
  app.innerHTML = '<h1>' + state.title + '</h1><div id="chart"></div>';
  barChart(document.getElementById('chart'), state.series);
}

render({
  title: 'Dashboard',
  series: [
    { label: 'Charges', value: 120 },
    { label: 'Refunds', value: 18 },
    { label: 'Disputes', value: 4 }
  ]
});
