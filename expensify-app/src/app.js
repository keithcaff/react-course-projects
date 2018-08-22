
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        <p>Dashbboard component</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>Add expense component</p>
    </div>
);


const EditExpensePage = () => (
    <div>
        <p>Edit expense component</p>
    </div>
);

const HelpExpensePage = () => (
    <div>
        <p>Help expense component</p>
    </div>
);


const NotFoundPage = () => (
    <div>
        404!<Link to="/">Go Home</Link>
    </div>
);



const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashbboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);


// FYI - BrowserRouter always requires a single root element!
const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
    </BrowserRouter>
); 

ReactDOM.render(routes, document.getElementById('app'));
