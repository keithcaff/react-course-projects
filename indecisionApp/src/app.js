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
                <AddOption />
            </div>
        );
    }
}



class Header extends React.Component {
    render() {
        return (
            <div> 
                <h1>{this.props.title}</h1>  
                <h2>{this.props.subtitle}</h2>  
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
       return (
        <div> 
            <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
            >
                    What should I do?
            </button>
        </div>
       );
    }
}

class Options extends React.Component {
    render() {
        return (
         <div> 
            <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            { this.props.options.map((option, index) => <Option key={index} optionText={option} />) }
         </div>
        );
     }
}

class Option extends React.Component {
    render() {
        return (
         <div> 
             {this.props.optionText}
         </div>
        );
     }
}


class AddOption extends React.Component {
    
    handleAddOption(e) {
        e.preventDefault();
        console.log('form submitted!');
        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option)
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
         <div> 
             <form onSubmit={this.handleAddOption}>
             <input type='text' name='option'/>
             <button>Add Option</button>
             </form>
         </div>
        );
     }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));