import React from 'react';


const PortfolioItemPage = (props) => {
    console.log(props);
    return (
        <div>Portfolio item no. {props.match.params.id}</div>
    )
} 

export default PortfolioItemPage;