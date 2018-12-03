import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import axios from 'axios';


import Header from './Components/Header'
import Content from './Components/Content';
import TextContent from './Components/TextContent';
import Personal from './Components/Personal';
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
        pressed: false,
        languageInfo: "JavaScript was the first language for me. Back in 2016 I came across it on the intro course on teamtreehouse.com. Since then I have continued to work with it. This page is mostly written in JavaScript with the React-library."
      },
      {
        name: "C#",
        startingYear: 2017,
        id: 2,
        pressed: false,
        languageInfo: "After a year of programming on my own I decided to go for it and started university as a systems developer. There I learned Object Oriented Programming through C#, something that I still enjoy alot"
      },
      {
        name: "Java",
        startingYear: 2018,
        id: 3,
        pressed: false,
        languageInfo: "Later on I started to develop som Android apps with Java. For example I've made a shoppinglist-app for me and my girlfriend, tailormade for our needs."
      },
      {
        name: "PHP",
        startingYear: 2017,
        id: 4,
        pressed: false,
        languageInfo: "Through the university I also came across some PHP and connected it to some SQL-databases. Together with some friends I made an app for the hazing/freshman pranks with the back-end functionality written by me. Please contact with me if you'd like to see it"
      }
    ]
  }

  componentDidMount() {
    axios.post('https://www.strava.com/oauth/token?client_id=29955&client_secret=b23767307c131cad647f8e88843b62e4c8d71071&grant_type=refresh_token&refresh_token=0be56ee1c4851376cfa7158c579aa5ae01a16ff0')
      .then(response => fetch(`https://www.strava.com/api/v3/athletes/8167341/stats?access_token=`+response.data.access_token))
      .then(fetchResponse => fetchResponse.json())
      .then(data => this.setState({
        runningStats: {
          totalDistance: data.all_run_totals.distance / 1000,
          count: data.all_run_totals.count
        }
      }, console.log(data)))
      .catch(error => {
        console.log(error);
      })
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
        return {
          ...language,
          pressed: !language.pressed
        };
        
      }
      return {
        ...language,
        pressed: false
      }
  })
})}


  render() {
    return (
      <div className="app">
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
      <div id="page-wrap">
      <Header />
      <Content 
        languages={this.state.languages}
        handleClick={this.handleClick}
        handleFormSubmit={this.addLanguage}
        languageText=""
        />
        
        {/*<SearchForm
          handleFormSubmit={this.addLanguage}/>*/}
          <div className="box">
            <Personal
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
