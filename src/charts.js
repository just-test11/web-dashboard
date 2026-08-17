function barChart(container, data) {
  const max = Math.max(...data.map(d => d.value));
  container.innerHTML = data.map(d =>
    '<div class="bar" style="width:' + (d.value / max * 100) + '%">' + d.label + '</div>'
  ).join('');
}
