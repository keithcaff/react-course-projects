
class VisibiltyToggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibilty: false
        }
        this.handleToggelVisibilty = this.handleToggelVisibilty.bind(this);
    }

    handleToggelVisibilty() {
        console.log('handleToggelVisibilty');
        this.setState((prevState) => {
            return {
                visibilty: !prevState.visibilty 
            }
        });
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick= {this.handleToggelVisibilty}>{this.state.visibilty ? 'Hide details' : 'Show details'}</button>
                {
                    this.state.visibilty && (
                        <p>This is the details section - tada! </p>
                    )
                }
                
            </div>
        );
    }
}

ReactDOM.render(<VisibiltyToggle/>, document.getElementById('app'));










// const appRoute = document.getElementById('app');

// let hidden = true;


// const showHide = () => {
//     hidden = !hidden
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
    
//             <button onClick= {showHide}>{hidden ? 'Show details' : 'Hide details'}</button>
//             <p hidden={hidden}>This is the details section - tada! </p>
//         </div>
//      );
    
//      ReactDOM.render(template,appRoute);
// }

// render();