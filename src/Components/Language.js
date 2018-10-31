import React from 'react';

const Language = (props) => {
    return(
        <div className="languages">
            <span className="language-name">
                I've been learning { props.language } for { props.time } years
            </span>
        </div>
    );
}

export default Language;