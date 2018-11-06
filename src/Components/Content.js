import React from 'react';
import SearchForm from './SearchForm';


const Content = props => {
    let partial = null;
    props.languages.map(language => {
        if (language.pressed === true) {
            partial = <ul className="languageContainer">
            {props.languages.map(language => 
                <button
                type="submit" 
                key={language.id}
                onClick={() => props.handleClick(language.id)}
                value={language.pressed}
                >
                    {language.name}
                </button>
            )
        }
            
        </ul>
        }
    })
    return (
    <div className="box">
    <h1 className="heading">Simon Sporrong</h1>
    
    {/*<ul className="languageContainer">
        {props.languages.map(language => 
            <button
            type="submit" 
            key={language.id}
            onClick={() => props.handleClick(language.id)}
            value={language.pressed}
            >
                {language.name}
            </button>
        )
    }
        
</ul>*/}{partial}
    <SearchForm handleFormSubmit={(name, year) => {props.handleFormSubmit(name, year)}}/>
  </div>
  
    )
    };

export default Content