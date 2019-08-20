import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Noteful/header';
import Sidebar from './Noteful/sidebar';
import MainSection from './Noteful/mainSection';
import MainPage from './Noteful/mainPage';
import INFO from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { INFO };
  }
  render() {
    console.log(this.state, 'state');
    return (
      <div className="App">
        <Route exact path="/" render={() => <MainPage info={this.state} />} />
      </div>
    );
  }
}

export default App;
