const app = document.getElementById('app');

function render(state) {
  app.innerHTML = '<h1>' + state.title + '</h1>';
}

render({ title: 'Dashboard' });
