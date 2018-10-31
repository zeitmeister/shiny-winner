import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Language from './Components/Language'
import { Button, Jumbotron } from 'react-bootstrap'
import SearchForm from './Components/SearchForm';
import Results from './Components/Results';

class App extends Component {
  state = {
    languages:   [
      {
        name: "JavaScript",
        time: 2016,
        id: 1
      },
      {
        name: "C#",
        time: 2017,
        id: 2
      },
      {
        name: "Java",
        time: 2018,
        id: 3
      },
      {
        name: "PHP",
        time: 2017,
        id: 4
      }
    ]
  }

getLanguageTime = (id) => {
  const currentYear = new Date().getFullYear();
  const languageYears = this.state.languages.map( l => l.time );
  return currentYear - languageYears[id];
}

  render() {
    return (
      <div className="container">
        <Header text="Bröd" />
        <div className="bulk">
          <Jumbotron>
            <h1>Döner</h1>
            <p>
              This is a simple kebabpage!
            </p>
            <SearchForm/>
          </Jumbotron>
          <Results />
        {this.state.languages.map( (language) =>
          <Language 
          language = {language.name}
          time = {this.getLanguageTime(language.id - 1)}
          id = {language.id}
          key = {language.id.toString()}
          />
          )}
          </div>
      </div>
    );
  }
}

export default App;
