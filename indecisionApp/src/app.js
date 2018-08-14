class IndecisionApp  extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch(e) {
            // Do nothing at all
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    
    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    handlePick() {
        if (this.state.options.length > 0) {
            const options = this.state.options
            const randomNum = Math.floor((Math.random() * options.length));
            const randomOption = options[randomNum];
            alert(randomOption);
        }
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    handleDeleteOptions() {
        /*if we wrap arrow function curly brackeys in parentheses 
        we are returning an object instead of opening the funcion body*/
        this.setState(() => ({ options:[] }) );
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1 ) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}) );
    } 

    render() {
        const subtitle = 'Put your life in the hands of a computer!'
        return (
            <div> 
                <Header subtitle={subtitle}  />
                <Action 
                    hasOptions = {this.state.options.length > 0} 
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption ={this.handleAddOption}
                />
            </div>
        );
    }
}

//functional Stateless component
const Header = (props) => {
    return (
        <div> 
            <h1>{props.title}</h1>  
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

//functional Stateless component
const Action = (props) => {
    return (
        <div> 
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
       );
}

//functional Stateless component
const Options = (props) => {
    return (
        <div> 
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length == 0 && <p>Please add an option to get started</p>}
            { 
                props.options.map((option, index) => (
                    <Option 
                        key={index} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}        
                    />
                )) 
            }
        </div>
    );
}

//functional Stateless component
const Option = (props) => {
    return (
        <div> 
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    );
}


class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    
    
    handleAddOption(e) {
        e.preventDefault();
        console.log('form submitted!');
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}) ); //short hand for error: error
        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
         <div>
            {
                this.state.error && <p>{this.state.error}</p>
            }
             <form onSubmit={this.handleAddOption}>
             <input type='text' name='option'/>
             <button>Add Option</button>
             </form>
         </div>
        );
     }
}

// const User = (props) => {
//     return (
//         <div> 
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<User name='Keith' age='29'/>,document.getElementById('app'));