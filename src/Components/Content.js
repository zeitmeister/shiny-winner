import React from 'react';


const Content = props => {
    return (
    <div className="box">
    <h1 className="heading">Simon Sporrong</h1>
    <ul>
        {props.languages.map(language => 
            <button 
            key={language.id}
            onClick={() => props.handleClick(language.id)}
            value={language.pressed}
            >
                {language.name}
            </button>
        )
        }
        
    </ul>
  </div>
    )
    };

export default Content