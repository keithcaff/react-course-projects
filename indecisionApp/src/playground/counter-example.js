//Counter with state:
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne  = this.handleAddOne.bind(this);
        this.handleMinusOne  = this.handleMinusOne.bind(this);
        this.handleReset  = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count++
            };
        });
        this.state.count++;
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }        
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));













//Counter without state:

// const appRoute = document.getElementById('app');
// const appDeets = {
//     title: 'Indecision App - hello world :/',
//     subtitle: 'React app dev',
//     options: ['A','B','C','D']
// }


// const template = (
//     <div>
//         <h1>{appDeets.title}</h1> 
//         {appDeets && appDeets.subtitle && <p>{appDeets.subtitle}</p>}
//         {(appDeets && appDeets.options.length > 0)? <p>Options are {appDeets.options} </p> : <p>No options</p> }
//     </div>
// );

// let count = 0;
// const addOne = () => {
//     console.log('addOne');
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     console.log('minus one clicked');
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     console.log('reset clicked');
//     count = 0;
//     renderCounterApp();
// }


// const appRoute = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>   
//             <button onClick={addOne} >+1</button>
//             <button onClick={minusOne} >-1</button>
//             <button onClick={reset} >reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoute);
// };

// renderCounterApp();