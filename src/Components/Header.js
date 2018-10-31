import React from 'react';
import SearchForm from './SearchForm';

const Header = (props) => {
    const input = prompt("Favvokebab?");
    return (
        <header>
            <h1 className="heading">{ props.text }</h1>
            <p>{ input }</p>
        </header>
    );
}

export default Header;