import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Portfolio Header</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
    </header>
);

export default Header;