import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';

const AppRouter = () => ( 
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route component={HomePage} path="/"  exact={true}/>
                <Route component={PortfolioPage} path="/portfolio" exact={true} />
                <Route component={PortfolioItemPage} path="/portfolio/:id" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;