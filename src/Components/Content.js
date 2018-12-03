import React, { Component} from 'react';
//import SearchForm from './SearchForm';


class Content extends Component {
    render(){
    return (
    <div className="box">
    <h1 className="heading">Some programming languages</h1>
        
        <div className="languageInfo">
        <p className="languageParagraph">
        {this.props.languages.map(language => {
            if (language.pressed === true) {
                return language.languageInfo;
            }
            return null
        })}
          </p>
        </div>
    <ul className="languageContainer">

            {this.props.languages.map(language => 
                <button
                type="submit" 
                key={language.id}
                onClick={() => this.props.handleClick(language.id)}
                value={language.pressed}
                >
                    {language.name}
                </button>
            )
            }
        </ul>
        
    {/*<SearchForm handleFormSubmit={(name, year) => {props.handleFormSubmit(name, year)}}/>*/}
  </div>
  
    )
        }
    }
export default Content;