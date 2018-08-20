import React from 'react';
import AddOption from './AddOption';
import Options  from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp  extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        /*if we wrap arrow function curly brackeys in parentheses 
        we are returning an object instead of opening the funcion body*/
        this.setState(() => ({ options:[] }) );
    };

    handleClearSelectedOption = () =>{
        this.setState(()=>( { selectedOption: undefined} ));
    }

    handlePick = () => {
        if (this.state.options.length > 0) {
            const options = this.state.options
            const randomNum = Math.floor((Math.random() * options.length));
            const selectedOption = options[randomNum];
            this.setState( () => ( { selectedOption }))
        }
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => option !== optionToRemove)
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1 ) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}) );
    }; 

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

    render() {
        const subtitle = 'Put your life in the hands of a computer!'
        return (
            <div> 
                <Header subtitle={subtitle}  />
                <div className="container">
                    <Action 
                        hasOptions = {this.state.options.length > 0} 
                        handlePick = {this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption ={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}