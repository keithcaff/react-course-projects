console.log('app.js is running');

var appDeets = {
    title: 'Indecision App - hello world :/',
    subtitle: 'React app dev'
}


var template = (
    <div>
        <h1>{appDeets.title}</h1> 
        <p>{appDeets.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


var user = {
    name: 'Jim',
    age: '33',
    location: 'Galway'    
};

var userName = 'Keith';
var userAge = '30';
var userLocation = 'NYC';
var template2 = (
    <div>
        <h1>{user.name + '!'}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoute = document.getElementById('app');
//JSX to render, div to render it in
ReactDOM.render(template, appRoute);

