console.log('app.js is running');
const appRoute = document.getElementById('app');



const appDeets = {
    title: 'Indecision App - hello world :/',
    subtitle: 'React app dev',
    options: ['A','B','C','D']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted!');
    const option = e.target.elements.option.value;
    if(option) {
        appDeets.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const clearOptions = () => {
    appDeets.options = [];
    renderApp();
}

const numbers = [22,32,42,52];


const onMakeDecision = () => {
    //appDeets.length
    const randomNum = Math.floor((Math.random() * appDeets.options.length));
    const option = appDeets.options[randomNum];
    alert(option);
};

const renderApp = () => {
    console.log('render app called. Options are: ' + appDeets.options)
    let template = (
        <div>
            <h1>{appDeets.title}</h1> 
            {appDeets && appDeets.subtitle && <p>{appDeets.subtitle}</p>}
            {
                numbers.map((number,index) => <p key ={index}>Number: {number}</p>)
            }
            
            {/*<p>{appDeets.options.length}</p> */}
            {/* <p>{(appDeets && appDeets.options.length > 0) ? "Options are " + appDeets.options  :"No options" }</p> */}

            <ol>
            {
             appDeets.options.map((option,index)=> <li key={index}> {option}</li>)   
            }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add option</button>
                <button disabled= {appDeets.options.length <1} onClick={onMakeDecision}>What should I do</button>
                <button onClick={clearOptions}>Remove all</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoute);    
}

renderApp();
