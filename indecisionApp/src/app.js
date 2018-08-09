console.log('app.js is running');

const appDeets = {
    title: 'Indecision App - hello world :/',
    subtitle: 'React app dev',
    options: ['A','B','C','D']
}


const template = (
    <div>
        <h1>{appDeets.title}</h1> 
        {appDeets && appDeets.subtitle && <p>{appDeets.subtitle}</p>}
        {(appDeets && appDeets.options.length > 0)? <p>Options are {appDeets.options} </p> : <p>No options</p> }
    </div>
);


const user = {
    name: 'Jim',
    age: '33',
    location: ''    
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>
    }
}

const userName = 'Keith';
const userAge = '30';
const userLocation = 'NYC';
const template2 = (
    <div>
        <h1>{user.name? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoute = document.getElementById('app');
//JSX to render, div to render it in
ReactDOM.render(template, appRoute);

