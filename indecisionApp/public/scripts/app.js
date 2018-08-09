'use strict';

console.log('app.js is running');

var appDeets = {
    title: 'Indecision App - hello world :/',
    subtitle: 'React app dev'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appDeets.title
    ),
    React.createElement(
        'p',
        null,
        appDeets.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Jim',
    age: '33',
    location: 'Galway'
};

var userName = 'Keith';
var userAge = '30';
var userLocation = 'NYC';
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoute = document.getElementById('app');
//JSX to render, div to render it in
ReactDOM.render(template, appRoute);
