
const appRoute = document.getElementById('app');

let hidden = true;


const showHide = () => {
    hidden = !hidden
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
    
            <button onClick= {showHide}>{hidden ? 'Show details' : 'Hide details'}</button>
            <p hidden={hidden}>This is the details section - tada! </p>
        </div>
     );
    
     ReactDOM.render(template,appRoute);
}

render();