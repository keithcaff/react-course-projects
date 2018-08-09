'use strict';

console.log('app.js is running');

var template = React.createElement(
  'h1',
  null,
  ' Chaned app.js again77!'
);
var appRoute = document.getElementById('app');

//JSX to render, div to render it in
ReactDOM.render(template, appRoute);
