const appRoute = document.getElementById('app');
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

let count = 0;
const addOne = () => {
    console.log('addOne');
    count++;
    renderCounterApp();
}

const minusOne = () => {
    console.log('minus one clicked');
    count--;
    renderCounterApp();
}

const reset = () => {
    console.log('reset clicked');
    count = 0;
    renderCounterApp();
}


const appRoute = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>   
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne} >-1</button>
            <button onClick={reset} >reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoute);
};

renderCounterApp();