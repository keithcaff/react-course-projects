import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => {
    return (
        <div>
            <h3>Portfolio Page</h3>
            <Link to={"/portfolio/1"}>Portfolio Page 1</Link>
            <Link to={"/portfolio/2"}>Portfolio Page 2</Link>
        </div>
    )
}

export default PortfolioPage;