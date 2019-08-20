import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Noteful/header';
import Sidebar from './Noteful/sidebar';
import MainSection from './Noteful/mainSection';
import MainPage from './Noteful/mainPage';
import INFO from './store';
import LinkTest from './Noteful/linkTest';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { INFO };
  }
  render() {
    console.log(this.state, 'state');
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <MainPage info={this.state} />} />
          <Route component={LinkTest} />
        </Switch>
      </div>
    );
  }
}

export default App;
