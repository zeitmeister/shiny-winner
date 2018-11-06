import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'


import Header from './Components/Header'
import Content from './Components/Content';
import TextContent from './Components/TextContent';
import StravaStats from './Components/StravaStats';
import './App.css';

class App extends Component {
  state = {
    text: "",
    runningStats: {
      totalDistance: 0,
      count: 0
    },
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

  componentDidMount() {
    fetch('https://www.strava.com/api/v3/athletes/8167341/stats?access_token=5f45791fa47c6947afa3531a11383a0bb9d31fdf')
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => this.setState({
        runningStats: {
         totalDistance: data.all_run_totals.distance / 1000,
         count: data.all_run_totals.count 
        }
        })
      );
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
          pressed: !language.pressed
        };
        
      }
      return language
  })
})}


  render() {
    return (
      <div className="app">
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      <div id="page-wrap">
      <Header />
      <Content 
        languages={this.state.languages}
        handleClick={this.handleClick}
        handleFormSubmit={this.addLanguage}
        />
        
        {/*<SearchForm
          handleFormSubmit={this.addLanguage}/>*/}
          <div className="box">
          <TextContent />
          </div>
          <div className="box">
          <StravaStats 
          distance={this.state.runningStats.totalDistance}
          count={this.state.runningStats.count}
          />
          </div>

          
      </div>
      </div>
      
    );
  }
}

export default App;
