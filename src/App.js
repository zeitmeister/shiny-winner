import React, { Component } from 'react';
import Header from './Components/Header'
import Language from './Components/Language';
import SearchForm from './Components/SearchForm';
import Content from './Components/Content';
import './App.css';

class App extends Component {
  state = {
    text: "",
    languages:   [
      {
        name: "JavaScript",
        startingYear: 2016,
        id: 1,
        pressed: false
      },
      {
        name: "C#",
        startingYear: 2017,
        id: 2,
        pressed: false
      },
      {
        name: "Java",
        startingYear: 2018,
        id: 3,
        pressed: false
      },
      {
        name: "PHP",
        startingYear: 2017,
        id: 4,
        pressed: false
      }
    ]
  }

  
  

  addLanguage = (language, year) => {
    this.setState({
      languages: [
        ...this.state.languages,
        {
          name: language,
          startingYear: year,
          id: this.state.languages.length + 1
        }
      ]
    })
    const updatedLanguages = this.state.languages;
    localStorage.setItem("languages", JSON.stringify(updatedLanguages));
  }

getLanguageyears = (id) => {
  const currentYear = new Date().getFullYear();
  const languageYears = this.state.languages.map( l => l.startingYear );
  return currentYear - languageYears[id];
}

handleClick = i => {
  this.setState({
    languages: this.state.languages.map(language => {
      if (language.id === i) {
        alert ("I've been learning " + language.name + " for " + this.getLanguageyears(language.id + -1) + " years");
        return {
          ...language,
          name: "Skalleper"
        };
        
      }
      return language
  })
})}


  render() {
    return (
      <div className="container">
        <Header />
        <Content 
        languages={this.state.languages}
        handleClick={this.handleClick} 
        />
        <SearchForm
          handleFormSubmit={this.addLanguage}/>
        {this.state.languages.map( (language) =>
        <div className="box" key={language.id}>
          <Language 
          language = {language.name}
          years = {this.getLanguageyears(language.id - 1)}
          id = {language.id}
          key = {language.id.toString()}
          />
        </div>
          )}
      </div>
    );
  }
}

export default App;
