const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
}


const getName = obj.getName.bind({name:'Keith'});
console.log(getName());


class IndecisionApp  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing 1', 'Thing 2' , 'Thing 3']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handlePick() {
        if (this.state.options.length > 0) {
            const options = this.state.options
            const randomNum = Math.floor((Math.random() * options.length));
            const randomOption = options[randomNum];
            alert(randomOption);
        }
    }

    handleDeleteOptions() {
        this.setState(() =>{
            return {
                options: []
            }
        });
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1 ) {
            return 'This option already exists';
        }

        this.setState((prevState)=> {
            return {
                options: prevState.options.concat([option])
            }
        })
    } 

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer!'
        return (
            <div> 
                <Header title= {title} subtitle={subtitle}  />
                <Action 
                    hasOptions = {this.state.options.length > 0} 
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
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
            <h2>{props.subtitle}</h2>  
        </div>
    );
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
            { props.options.map((option, index) => <Option key={index} optionText={option} />) }
        </div>
    );
}

//functional Stateless component
const Option = (props) => {
    return (
        <div> 
            {props.optionText}
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
        if (error) {
            this.setState(() => {
                return {error}                //short hand for error: error
            });
        }
        e.target.elements.option.value = '';
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

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
// ReactDOM.render(<User name='Keith' age='29'/>,document.getElementById('app'));