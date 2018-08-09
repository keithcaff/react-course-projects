'use strict';

console.log('app.js is running');

var appDeets = {
    title: 'Indecision App - hello world :/',
    subtitle: 'React app dev',
    options: [] //['A','B','C','D']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appDeets.title
    ),
    appDeets && appDeets.subtitle && React.createElement(
        'p',
        null,
        appDeets.subtitle
    ),
    appDeets && appDeets.options.length > 0 ? React.createElement(
        'p',
        null,
        'Options are ',
        appDeets.options,
        ' '
    ) : React.createElement(
        'p',
        null,
        'No options'
    )
);

var user = {
    name: 'Jim',
    age: '33',
    location: ''
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var userName = 'Keith';
var userAge = '30';
var userLocation = 'NYC';
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoute = document.getElementById('app');
//JSX to render, div to render it in
ReactDOM.render(template, appRoute);
